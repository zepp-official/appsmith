export default {
	// This variable will hold the current badge data.
	// UI widgets will bind to this object.
	currentBadge: {
	},

	// This is the default structure for a new badge.
	// We use this to reset the form in 'new' mode.
	defaultBadge: {
		"id": "",
		"appname": "com.huami.midong",
		"contents": {
			"badge_title": "",
			"badge_description": "",
			"badge_tags": [
				"",
				""
			]
		},
		"assets": {
			"icon": ""
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
		"createdTime": "",
		"updatedTime": "",
		"isDelete": 1
	},

	// This function will run when the page loads.
	// It must be 'async' because it waits for an API call.
	async onPageLoad() {
		// 1. Get the 'mode' from the URL parameter
		const mode = appsmith.URL.queryParams.mode;

		showAlert('current mode:' + mode, 'info');
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
				this.currentBadge = badgeData.data.items[0].badge;

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
	},

	// Add a new tag
	addTag () {
		const tagInput = tagInput_Widget.text;
		if (!tagInput || tagInput.trim() === "") {
			showAlert("Please enter a tag", "warning");
			return;
		}

		// Check for duplicates
		if (this.currentBadge.contents.badge_tags.includes(tagInput.trim())) {
			showAlert("Tag already exists", "warning");
			return;
		}

		// Add tag to array
		this.currentBadge.contents.badge_tags.push(tagInput.trim());

		// Clear input
		resetWidget("tagInput_Widget");
		showAlert("Tag added successfully", "success");
	},

	// Delete a tag by index
	deleteTag (index) {
		this.currentBadge.contents.badge_tags.splice(index, 1);
		showAlert("Tag deleted", "success");
	},
}