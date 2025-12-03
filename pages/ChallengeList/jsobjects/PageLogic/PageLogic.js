export default {
	// data source of the table
	challenges: [],

	// --- Challenge Status Mapping ---
	challengeStatus: [
		{ "name": "Pending Launch", "code": "0" },
		{ "name": "Launched (Pending)", "code": "1" },
		{ "name": "Launched (Active)", "code": "2" },
		{ "name": "Launched (Expired)", "code": "3" }
	],

	/**
	 * Helper function: Finds the name for a given status code.
	 * @param {number | string} code - The status code from the API (e.g., 0)
	 * @returns {string} - The matched name (e.g., "Offline") or the original code as a fallback.
	 */
	getStatusName(code) {
		const stringCode = String(code);
		const statusObject = this.challengeStatus.find(s => s.code === stringCode);

		if (statusObject) {
			return statusObject.name;
		}
		return code; // Fallback
	},

	async transformChallenges() {

		await EnvSetup.setEnvironment();

		const queryResult = await queryChallengesApi.run();

		const items = queryResult.data?.items;

		// If items is not an array (e.g., API hasn't run or returned an error), return an empty array
		if (!Array.isArray(items)) {
			// this.rewardList = [];
			return;
		}

		// Use .map() to transform the array into the desired structure
		this.challenges = items.map(item => {

			return {
				id: item.id,
				title: item.contents.challenge_title,
				// Get status name
				status: this.getStatusName(item.challengeStatus),
				createBy: item.createBy,
				updatedTime: item.updatedTime
			};
		});

		return;
	},

	async launchChallenge(id) {
		const params = {
			"id": id,
			"status": 1
		}

		try {
			await launchChallengeApi.run({ body: params });
			showAlert('Record launched successfully!! ID: ' + id, 'success');
			await this.transformChallenges();
			return;
		} catch (error) {
			console.error("API call failed:", error);
			showAlert('Failed to launch record! ID: ' + id, 'error');
		}
	},

	async deleteChallenge(id) {
		const params = {
			"id": id,
			"isDelete": "0"
		}

		try {
			await deleteChallengeApi.run({ body: params });
			showAlert('Record deleted successfully!! ID: ' + id, 'success');
			await this.transformChallenges();
			return;
		} catch (error) {
			console.error("API call failed:", error);
			showAlert('Failed to delete record! ID: ' + id, 'error');
		}
	},

	async exportContent() {
		const content = await exportContentApi.run();
		download(
			JSON.stringify(content, null, 2), // Convert object to string with indentation
			"content.json",                            // File name
			"application/json"                         // File type
		);
	}

}