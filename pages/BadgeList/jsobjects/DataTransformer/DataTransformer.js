export default {
	// data source of the table
	rewardList: [],
	
	next: 0,
	
	// 1. Store your type mapping here
	badgeType: [
		{ "name": "Lifetime", "code": "0" },
		{ "name": "Seasonal", "code": "1" },
		{ "name": "PB", "code": "2" },
		{ "name": "Seasonal", "code": "3" }
	],
	
	// --- Badge Status Mapping ---
	badgeStatus: [
		{ "name": "Active", "code": "0" },
		{ "name": "Pending", "code": "1" },
		{ "name": "Expired", "code": "2" },
		{ "name": "Draft", "code": "3" }
	],

	/**
	 * Helper function: Finds the name for a given code.
	 * @param {number | string} code - The type code from the API (e.g., 0)
	 * @returns {string} - The matched name (e.g., "Lifetime") or the original code as a fallback.
	 */
	getTypeName(code) {
		// Convert the incoming code (e.g., 0) to a string (e.g., "0") for reliable matching.
		const stringCode = String(code);

		// Find the matching object in the array
		const typeObject = this.badgeType.find(t => t.code === stringCode);

		if (typeObject) {
			// If found, return the name
			return typeObject.name;
		}

		// If no match is found, return the original code.
		// This helps identify if there is missing data in the map.
		return code;
	},
	
	/**
	 * Helper function: Finds the name for a given status code.
	 * @param {number | string} code - The status code from the API (e.g., 0)
	 * @returns {string} - The matched name (e.g., "Offline") or the original code as a fallback.
	 */
	getStatusName(code) {
		const stringCode = String(code);
		const statusObject = this.badgeStatus.find(s => s.code === stringCode);
		
		if (statusObject) {
			return statusObject.name;
		}
		return code; // Fallback
	},

	async transformRewards() {
		// let params = { 
			// reward_type: "Badge",
			// title: InputSearch.text,
			// pageSize: 20
		// };
		// 
		// if (this.next > 0) {
			// params.next = this.next;
		// }
		// const toPrint = JSON.stringify(params);
		// console.log(toPrint);
		
		// Safely access the items array from the API response
		// reward_type=Badge&title={{InputSearch.text}}&pageSize={{rewardTable.pageSize}}
		
		// const queryResult = await queryRewardsApi.run({
			// reward_type: 1,
			// title: InputSearch.text,
			// pageSize: 20,
			// next: this.next
		// })
		
		await EnvSetup.setEnvironment();
		
		const queryResult = await queryRewardsApi.run();
		
		const items = queryResult.data?.items;

		// If items is not an array (e.g., API hasn't run or returned an error), return an empty array
		if (!Array.isArray(items)) {
			// this.rewardList = [];
			return [];
		}

		this.next = queryResult.data.next;
		
		// Use .map() to transform the array into the desired structure
		const tempRewardList = items.map(item => {
			// The data we need is nested inside the 'badge' object
			const badge = item.badge;

			return {
				id: badge.id,
				// Get type name
				type: this.getTypeName(badge.type),
				title: badge.contents.badge_title,
				// Get status name
				status: this.getStatusName(badge.badgeStatus),
				createBy: badge.createBy,
				updatedTime: badge.updatedTime
			};
		});
		
		this.rewardList = tempRewardList;
		return tempRewardList;
	}
}