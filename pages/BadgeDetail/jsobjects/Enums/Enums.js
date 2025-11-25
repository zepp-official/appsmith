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
		{ "name": "Achivements", "code": "1" },
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
			"name": "No End Date",
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
		}
	],
	// metricList: [
	// {
	// "field_name": "workouts_over_10min_current_week",
	// "field_desc": "workouts over 10min current week"
	// },
	// {
	// "field_name": "calories_burned_today_previous",
	// "field_desc": "calories burned today previous"
	// },
	// {
	// "field_name": "calories_goal",
	// "field_desc": "calories goal"
	// },
	// {
	// "field_name": "currentTotalCyclingDistance",
	// "field_desc": "calories goal"
	// },
	// {
	// "field_name": "totalCyclingDistance",
	// "field_desc": "calories goal"
	// },
	// {
	// "field_name": "distance",
	// "field_desc": "distance goal"
	// }
	// ],
	
	labelTypes: [
		{
			"code": "Repetitive"
		},
		{
			"code": "Challenge"
		}
	],

	metricList:[
		{
			"field_name": "country_code",
			"field_desc": "countryCode"
		},
		{
			"field_name": "device_source",
			"field_desc": "deviceSource"
		},
		{
			"field_name": "is_metric",
			"field_desc": "isMetric"
		},
		{
			"field_name": "total_cycling_distance",
			"field_desc": "totalCyclingDistance"
		},
		{
			"field_name": "day_of_cycling_distance",
			"field_desc": "dayOfCyclingDistance"
		},
		{
			"field_name": "total_running_distance",
			"field_desc": "totalRunningDistance"
		},
		{
			"field_name": "day_of_running_distance",
			"field_desc": "dayOfRunningDistance"
		},
		{
			"field_name": "reach_calorie_goal_times",
			"field_desc": "reachCalorieGoalTimes"
		},
		{
			"field_name": "day_of_calorie",
			"field_desc": "dayOfCalorie"
		},
		{
			"field_name": "calorie_goal",
			"field_desc": "calorieGoal"
		},
		{
			"field_name": "reach_calorie_goal_of_week",
			"field_desc": "reachCalorieGoalOfWeek"
		},
		{
			"field_name": "total_steps",
			"field_desc": "totalSteps"
		},
		{
			"field_name": "day_of_steps",
			"field_desc": "dayOfSteps"
		},
		{
			"field_name": "step_goal",
			"field_desc": "stepGoal"
		},
		{
			"field_name": "reach_step_goal_of_week",
			"field_desc": "reachStepGoalOfWeek"
		},
		{
			"field_name": "day_of_exercise_minutes",
			"field_desc": "dayOfExerciseMinutes"
		},
		{
			"field_name": "exercise_minutes_goal",
			"field_desc": "exerciseMinutesGoal"
		},
		{
			"field_name": "reach_exercise_time_goal_of_week",
			"field_desc": "reachExerciseTimeGoalOfWeek"
		},
		{
			"field_name": "sport_of_distance",
			"field_desc": "workout.distance"
		},
		{
			"field_name": "sport_of_category",
			"field_desc": "workout.category"
		},
		{
			"field_name": "sport_of_type",
			"field_desc": "workout.type"
		},
		{
			"field_name": "sport_of_duration",
			"field_desc": "workout.duration"
		},
		{
			"field_name": "climb_highest_altitude_m",
			"field_desc": "workout.bestClimbHighestMeter"
		},
		{
			"field_name": "climb_most_up_m",
			"field_desc": "workout.bestClimbMaxRiseMeter"
		},
		{
			"field_name": "climb_most_down_m",
			"field_desc": "workout.bestClimbMaxFallMeter"
		},
		{
			"field_name": "climb_longest_climbing_m",
			"field_desc": "workout.bestClimbLongestClimbingMeter"
		},
		{
			"field_name": "ride_furthest_km",
			"field_desc": "workout.bestRideFurthestKiloMeter"
		},
		{
			"field_name": "ride_longest_time",
			"field_desc": "workout.bestRideLongestTime"
		},
		{
			"field_name": "ride_5_km",
			"field_desc": "workout.bestRideTime5Kilometer"
		},
		{
			"field_name": "ride_10_km",
			"field_desc": "workout.bestRideTime10Kilometer"
		},
		{
			"field_name": "ride_20_km",
			"field_desc": "workout.bestRideTime20Kilometer"
		},
		{
			"field_name": "ride_40_km",
			"field_desc": "workout.bestRideTime40Kilometer"
		},
		{
			"field_name": "ride_90_km",
			"field_desc": "workout.bestRideTime90Kilometer"
		},
		{
			"field_name": "ride_180_km",
			"field_desc": "workout.bestRideTime180Kilometer"
		},
		{
			"field_name": "ride_5_mi",
			"field_desc": "workout.bestRideTime5Mile"
		},
		{
			"field_name": "ride_10_mi",
			"field_desc": "workout.bestRideTime10Mile"
		},
		{
			"field_name": "ride_20_mi",
			"field_desc": "workout.bestRideTime20Mile"
		},
		{
			"field_name": "ride_40_mi",
			"field_desc": "workout.bestRideTime40Mile"
		},
		{
			"field_name": "ride_most_up_m",
			"field_desc": "workout.bestRideMaxRiseMeter"
		},
		{
			"field_name": "diving_max_depth",
			"field_desc": "workout.bestMaxDepth"
		},
		{
			"field_name": "diving_longest_time",
			"field_desc": "workout.bestMaxDivingTime"
		},
		{
			"field_name": "rope_skipping_maximum_total",
			"field_desc": "workout.bestRopeSkiTotal"
		},
		{
			"field_name": "rope_skipping_maximum_time",
			"field_desc": "workout.bestRopeSkiLongestTime"
		},
		{
			"field_name": "rope_skipping_maximum_continuous_jump",
			"field_desc": "workout.bestRopeSkiMaxCount"
		},
		{
			"field_name": "run_3_km",
			"field_desc": "workout.bestRunTime3Kilometer"
		},
		{
			"field_name": "run_5_km",
			"field_desc": "workout.bestRunTime5Kilometer"
		},
		{
			"field_name": "run_10_km",
			"field_desc": "workout.bestRunTime10Kilometer"
		},
		{
			"field_name": "run_3_mi",
			"field_desc": "workout.bestRunTime3Mile"
		},
		{
			"field_name": "run_5_mi",
			"field_desc": "workout.bestRunTime5Mile"
		},
		{
			"field_name": "run_10_mi",
			"field_desc": "workout.bestRunTime10Mile"
		},
		{
			"field_name": "run_furthest_km",
			"field_desc": "workout.bestRunFurthestKiloMeter"
		},
		{
			"field_name": "run_longest_time",
			"field_desc": "workout.bestRunLongestTime"
		},
		{
			"field_name": "run_half_marathon",
			"field_desc": "workout.bestRunTimeHalfMarathon"
		},
		{
			"field_name": "run_full_marathon",
			"field_desc": "workout.bestRunTimeMarathon"
		},
		{
			"field_name": "swim_100_meter",
			"field_desc": "workout.bestSwimTime100Meter"
		},
		{
			"field_name": "swim_400_meter",
			"field_desc": "workout.bestSwimTime400Meter"
		},
		{
			"field_name": "swim_750_meter",
			"field_desc": "workout.bestSwimTime750Meter"
		},
		{
			"field_name": "swim_1000_meter",
			"field_desc": "workout.bestSwimTime1000Meter"
		},
		{
			"field_name": "swim_1500_meter",
			"field_desc": "workout.bestSwimTime1500Meter"
		},
		{
			"field_name": "swim_100_yard",
			"field_desc": "workout.bestSwimTime100Yard"
		},
		{
			"field_name": "swim_500_yard",
			"field_desc": "workout.bestSwimTime500Yard"
		},
		{
			"field_name": "swim_1000_yard",
			"field_desc": "workout.bestSwimTime1000Yard"
		},
		{
			"field_name": "swim_1650_yard",
			"field_desc": "workout.bestSwimTime1650Yard"
		},
		{
			"field_name": "swim_furthest_m",
			"field_desc": "workout.bestSwimFurthestKiloMeter"
		},
		{
			"field_name": "swim_longest_time",
			"field_desc": "workout.bestSwimLongestTime"
		},
		{
			"field_name": "swim_furthest_yard",
			"field_desc": "workout.bestSwimFurthestYard"
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