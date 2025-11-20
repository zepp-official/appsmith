export default {
	
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
	badgeStatus:
	[
		{
			"name": "Offline",
			"code": "0"
		},
		{
			"name": "Online",
			"code": "1"
		},
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
		{ "name": "Lifetime", "code": "0" },
		{ "name": "Seasonal", "code": "1" },
		{ "name": "PB", "code": "2" },
		{ "name": "Seasonal", "code": "3" }
	],
	actionType: [
		{ "name": "General Workout", "code": "0" },
		{ "name": "Steps", "code": "1" },
		{ "name": "Running", "code": "2" },
		{ "name": "Cycling", "code": "3" },
		{ "name": "Sleep", "code": "4" },
		{ "name": "Food", "code": "5" },
		{ "name": "Swimming", "code": "6" },
		{ "name": "Jump Roap", "code": "7" },
		{ "name": "Free Diving", "code": "8" },
		{ "name": "Hiking", "code": "9" }
	],
	badgeLevel: [
		{ "name": "Level 1", "code": "1" },
		{ "name": "Level 2", "code": "2" },
		{ "name": "Level 3", "code": "3" },
		{ "name": "Level 4", "code": "4" },
		{ "name": "Level 5", "code": "5" },
		{ "name": "Level 6", "code": "6" },
		{ "name": "Level 7", "code": "7" },
		{ "name": "Level 8", "code": "8" },
		{ "name": "Level 9", "code": "9" },
		{ "name": "Level 10", "code": "10" },
		{ "name": "Level 11", "code": "11" },
		{ "name": "Level 12", "code": "12" },
		{ "name": "Level 13", "code": "13" },
		{ "name": "Level 14", "code": "14" },
		{ "name": "Level 15", "code": "15" },
		{ "name": "Level 16", "code": "16" },
		{ "name": "Level 17", "code": "17" },
		{ "name": "Level 18", "code": "18" },
		{ "name": "Level 19", "code": "19" },
		{ "name": "Level 20", "code": "20" },
		{ "name": "Level 21", "code": "21" },
		{ "name": "Level 22", "code": "22" },
		{ "name": "Level 23", "code": "23" },
		{ "name": "Level 24", "code": "24" },
		{ "name": "Level 25", "code": "25" }
	],
	unitOfMeasurement:[
		{ "name": "Meter", "code": "0" },
		{ "name": "KM", "code": "1" },
		{ "name": "Yard", "code": "2" },
		{ "name": "Inch", "code": "3" },
		{ "name": "Mile", "code": "4" },
		{ "name": "Number", "code": "5" },
		{ "name": "Count", "code": "6" },
		{ "name": "Second", "code": "7" }
	],
	repeatPeriod: [
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
		}
	],
	metricList: [
		{
			"field_name": "workouts_over_10min_current_week",
			"field_desc": "workouts over 10min current week"
		},
		{
			"field_name": "calories_burned_today_previous",
			"field_desc": "calories burned today previous"
		},
		{
			"field_name": "calories_goal",
			"field_desc": "calories goal"
		},
		{
			"field_name": "currentTotalCyclingDistance",
			"field_desc": "calories goal"
		},
		{
			"field_name": "totalCyclingDistance",
			"field_desc": "calories goal"
		},
		{
			"field_name": "distance",
			"field_desc": "distance goal"
		}
	],
	
	// conditions: [
		// {
			// "source": "workouts_over_10min_current_week",
			// "operator": ">=",
			// "goal": 3,
			// "isMetric": false
		// },
		// {
			// "source": "calories_burned_today_previous",
			// "operator": "<",
			// "goal": "calories_goal",
			// "isMetric": true
		// }
	// ],
	operators: [
		{ "name": ">","code": ">"},
		{ "name": ">=","code": ">="},
		{ "name": "<","code": "<"},
		{ "name": "<=","code": "<="},
		{ "name": "==", "code": "=="}
	],

}