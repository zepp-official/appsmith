export default {

	rewardDetail: {
                "id": 1,
                "type": "STEPS",
                "backendConfigTitle":"ABC",
                "ctype": 1,
                "appname": "com.huami.midong",
                "difficulty": 2,
                "contents": {
                    "title": "每日万步挑战",
                    "description": "完成每日10000步目标",
                    "ruleDesc": "在24小时内完成10000步"
                },
                "assets": {
                    "bgActive": "https://assets.challenge_active.png",
                    "bgInactive": "https://assets.challenge_inactive.png",
                    "icon": "https://assets.challenge_icon.png"
                },
                "repeatPeriod": 0,
                "order": 1,
                "startDate": 1698765432,
                "endDate": 1701357432,
                "onlineDate": 1698679032,
                "offlineDate": 1701443832,
                "rules": [
                    {
                        "id": 1,
                        "expression": "steps >= 10000",
                        "rewardConfig": {
                            "type": "points",
                            "amount": 100,
                            "badgeId": 5
                        }
                    }
                ]
   },
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}