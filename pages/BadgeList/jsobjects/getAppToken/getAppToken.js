export default {
	getPrivate_pem () {
		// TODO prod in env
		return '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6l2F5RkQbylKf\nu0lgJ8X2VKy0Y5PJBKNjVbMRIAQb0F5mt6/vxS647EPAYaB6A3L1ETkX4SACMnIu\nv8NFymqtPeBVmO9Y6HB8I5s0mZAR5DwiSfCTKqB7fwdDf6dEr25hoBT1qDmiMvwS\nFL4t9w+WjmQ5pDaz491h0PIdHO/VwogumCxnY8PidWzCpAIzsTr/2zs4Kke7JYMW\nX/uJIk+6hLLr2q1MAmvMSZxH14fCEYluckA2Ih+FWVPVOYE6VIksGg2JvpzA9Duo\nOq729D7756QKhypKO/mgj8tLgGHm5BT1eKz238Dh52sYN6DL2O1Rf6A9Y3wk+6oV\nuZWD6aj9AgMBAAECggEAONnm2QyPs+fxRLnLoYB80JD8DfpJDPZc0edKp+0ZU2Ap\nYyKUeHmbwrw56GPWgVaLsB+PRbdSCVlVcOj8lkcWObKgp3PxeSVZIHm40E35l3ny\n2H+uzSgvvXD2xZofXM4W06fyuuaGqOTf6KJpT5f3J+g6oVVnVWgYC7WeD0DB0l7t\n7k6sOJRZmQCRB55LM7gViD33FNjfu3d7C0/KqFATSTGy30J42sSxWt4SD5fZnf5F\nD33RHjoIz3UO3MEKVP82cjh6mZt7I8ljuyG4uVLgMJ6oQzDV7hhfDEKf1R/5LLpT\ntoM/H03stN7RaOxcYyKaNAjujGrCnKa8yifwClNIAQKBgQDc7oGVeuBDyIsGxZER\nDsaDq8q3AoP76KPMxwBjHhiwMODBJd04DpsHCDzr40C9iqAAaTnyS3lBOJF3ZBmX\nEjSYjesqrJOIOQrpxAYaHaivUafH+JYQDgwcVkFLyxeneSMiXWfiZiymTYdsEiok\nxoiMtPWYrbkhnepw2tdyG2it7wKBgQDYNXcR6GdeswQdrbKzX/Ofh4HBgcCy8jWG\nrzwIG+z2MCP+ryb+tgz7VecwoMUH4p/a5S7cU4rUVQNerNF3AJ4m9WBc43ME81cs\nFwHdhxhcv5j5/r+MtdmKxPOtJVWsUTIsOWmKH000zNe15hTNDYg01YZN2gH0sGIg\nzuzhH2+D0wKBgH0/8dLuoGmNLdQe+Uj0WXKYWAo8sNqFXydewkdu7owkiaa2cp2v\nGhB4iSEp6rAKAP96qFFGnG1vRnirFR7iQVMjUekVgWY/AILakKMJoXITFs11jo13\niUIfXFE9yCE3ucVnstdVGYcGePm5qo7CxvMOPBXclxIJ1rk4N+AGzeedAoGAKjYO\nAB4KiG+U3yJ5YBHco4m2KIxnjchB8QCnTMH++nWdoWyaxWHPmQZFc7X/obF6Gidi\nhbt9wES0urgs0Pn65opDfP8fBplnrID1aUWl2P3DJRO6XANo7HHVTTmbx1+21vGC\njGfeD+/qMWYxK3N34zDI3swwU5BYKCWeE7mqcOcCgYEAgTargkLQpB1fXRsY10rx\n8y4seg/7Iz1HSqcUu29v9O/2unhRvW7/Iyu3O8r20z/l0Djp4N1n6APmdVyFJAX7\naCOKUtFyB/qJgJltzO11mHrms8UTT4mQ9jAn2HpOI/ZAUtCy2Yz//0iwOkndxTbS\ndhFbQMqWXKVipppLPFjo/ic=\n-----END PRIVATE KEY-----'
	},
	encodeJwtWithPrivateKey(privatePem, payload) {
		try {
			// 添加标准 JWT 声明
			const payloadWithClaims = {
				data: payload,
				iat: Math.floor(Date.now() / 1000),        // 签发时间
				exp: Math.floor(Date.now() / 1000) + 3600, // 过期时间（1小时后）
				iss: "feishu-admin"                      // 签发者
			};

			// 使用 RS256 算法签名
			const token = jsonwebtoken.sign(
				payloadWithClaims,
				privatePem,
				{ algorithm: 'RS256' }
			);

			return token;
		} catch (error) {
			console.error('JWT 编码失败:', error);
			return null;
		}
	},
	getUserEmail () {
		return appsmith.user.email
	},
	getAuthCode() {
		const privatePem = this.getPrivate_pem()
		const authCode = this.encodeJwtWithPrivateKey(privatePem,{email: this.getUserEmail()});
		return authCode
	},
	async token () {
		const authCode = this.getAuthCode()
		const authRes = await fetch({
			method: 'post',
			maxBodyLength: Infinity,
			url: `https://account-internal.zepp.top/
v1/accounts/connect/feishu-admin/auth?code=${authCode}`,
			headers: {}
		})
		const authorization = authRes.data.apptoken

		storeValue('authorization', authorization)
	}
}