export default {
	badges: [
      {
        "badge": {
          "id": 1,
          "appname": "com.huami.midong",
          "contents": {
            "badge_title": "Running Expert",
            "badge_description": "Complete 1km run",
            "badge_tags": [
              "Challenge",
              "Repeatable"
            ]
          },
          "assets": {
            "icon": "badges/running_bronze.png"
          },
          "status": 1,
          "type": 0,
          "actionType": 2,
          "predictExpression": "distance >= 1000",
          "goalExpression": "1000",
          "progressExpression": "distance",
          "level": 1,
          "difficulty": 0,
          "isRepeatable": 1,
          "repeatPeriod": 0,
          "visibilityStartTime": "2024-01-01 00:00:00",
          "visibilityEndTime": "2025-12-31 23:59:59",
          "availabilityStartTime": "2024-01-01 00:00:00",
          "availabilityEndTime": "2025-12-31 23:59:59",
          "unit": 1,
          "mark": 1,
          "showPredict": "version>10.0.0",
          "backendConfigTitle": "Running Expert - Level 1",
          "badgeStatus": 0,
          "createBy": "admin@zepp.com",
          "updateBy": "admin@zepp.com",
          "createdTime": "2025-11-06 19:04:47",
          "updatedTime": "2025-11-06 19:04:47",
          "isDelete": 1
        },
        "rewardType": 1
      }
	],
	
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		queryRewardsApi.run()
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
	
}