export default {
	// This variable will hold the current badge data.
	// UI widgets will bind to this object.
	currentBadge: {},

	// This is the default structure for a new badge.
	// We use this to reset the form in 'new' mode.
	defaultBadge: {
		"name": "",
		"description": "",
		"points": 0,
		"iconUrl": ""
		// Add any other fields you expect for a new badge
	},

	// This function will run when the page loads.
	// It must be 'async' because it waits for an API call.
	async onPageLoad() {
		// 1. Get the 'mode' from the URL parameter
		const mode = appsmith.URL.queryParams.mode;

		if (mode === "edit") {
			// --- EDIT MODE ---
			// 2. Get the 'id' from the URL
			const badgeId = appsmith.URL.queryParams.id;

			if (!badgeId) {
				showAlert('Error: No ID provided in edit mode.', 'error');
				this.currentBadge = this.defaultBadge; // Reset to default
				return;
			}

			try {
				// 3. Run the API query and wait for the response
				// We pass the 'badgeId' as a parameter to the query
				const badgeData = await getBadgeById.run({ id: badgeId });

				// 4. Store the API response in our variable
				// IMPORTANT: Adjust 'badgeData' based on your API's actual response structure.
				// For example, if your data is at badgeData.data, use:
				// this.currentBadge = badgeData.data;
				this.currentBadge = badgeData;

				showAlert('Badge data loaded.', 'success');

			} catch (error) {
				// Handle any errors during the API call
				showAlert('Failed to load badge data.', 'error');
				console.error(error);
				this.currentBadge = this.defaultBadge; // Reset on failure
			}

		} else if (mode === "new") {
			// --- NEW MODE ---
			// 5. Initialize 'currentBadge' with the default empty structure
			this.currentBadge = this.defaultBadge;
			showAlert('Ready to create a new badge.', 'info');
		} else {
			// --- (Optional) Handle unknown modes ---
			showAlert('Page mode is not set. Defaulting to new.', 'warning');
			this.currentBadge = this.defaultBadge;
		}
	}
}