export default {

	sportType:
	[
		{
			"name": "Common",
			"code": "0"
		},
		{
			"name": "STEPS",
			"code": "1"
		},
		{
			"name": "Running",
			"code": "2"
		},
		{
			"name": "Riding",
			"code": "3"
		}
	],
	difficultyLevel:
	[
		{
			"name": "Very Easy",
			"code": "1"
		},
		{
			"name": "Easy",
			"code": "2"
		},
		{
			"name": "Medium",
			"code": "3"
		},
		{
			"name": "Hard",
			"code": "4"
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
	unitOfMeasurement:[
		{ "name": "Meter", "code": "0" },
		{ "name": "KM", "code": "1" },
		{ "name": "Yard", "code": "2" },
		{ "name": "Inch", "code": "3" },
		{ "name": "Mile", "code": "4" },
		{ "name": "Number", "code": "5" },
		{ "name": "Jump Rope Count", "code": "6" },
		{ "name": "Second", "code": "7" }
	],
	orderEnums: {
			"1": "Total Condition",
			"2": "Bottom Condition",
			"3": "Middle Condition",
			"4": "Mid-low Condition",
	},
	
	// metricList:[
		// {
			// "field_name": "country_code",
			// "field_desc": "countryCode"
		// },
		// {
			// "field_name": "device_source",
			// "field_desc": "deviceSource"
		// }
	// ],
	metricList: [],
	
	operators: [
		{ "name": ">","code": ">"},
		{ "name": ">=","code": ">="},
		{ "name": "<","code": "<"},
		{ "name": "<=","code": "<="},
		{ "name": "==", "code": "=="}
	],
	
	
}