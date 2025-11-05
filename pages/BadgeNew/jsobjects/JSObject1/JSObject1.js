export default {
	challenge: {
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
				},
				"difficulty": 2
			},
			{
				"id": 2,
				"expression": "steps >= 10000",
				"rewardConfig": {
					"type": "points",
					"amount": 100,
					"badgeId": 5
				},
				"difficulty": 3
			}
		]
	},
	sportType:
	[
		{
			"name": "STEPS",
			"code": "STEPS"
		},
		{
			"name": "RUN",
			"code": "RUN"
		},
		{
			"name": "RECOVERY",
			"code": "RECOVERY"
		}
	],
	difficultyLevel:
	[
		{
			"name": "Bronze",
			"code": "0"
		},
		{
			"name": "Silver",
			"code": "1"
		},
		{
			"name": "Gold",
			"code": "2"
		},
		{
			"name": "Patinum",
			"code": "3"
		}
	],
	badgeType: [
		{
			"name": "Lifetime",
			"code": "0"
		},
		{
			"name": "Seasonal",
			"code": "1"
		},
		{
			"name": "PB",
			"code": "2"
		},
		{
			"name": "Seasonal",
			"code": "3"
		}
	],
	actionType: [
		{
			"name": "RUN"
		}
	],
	repeatPeriod: [
		{
			"name": "None",
			"code": "0"
		},
		{
			"name": "Day",
			"code": "1"
		},
		{
			"name": "Week",
			"code": "2"
		},
		{
			"name": "Month",
			"code": "3"
		},
		{
			"name": "Infinity",
			"code": "4"
		}
	],
	conditions: [
		{
			"progress": "workouts_over_10min_current_week",
			"conditional": ">=",
			"goal": 3
		},
		{
			"progress": "workouts_over_10min_current_week_previous",
			"conditional": "<",
			"goal": 3
		}
	]
}