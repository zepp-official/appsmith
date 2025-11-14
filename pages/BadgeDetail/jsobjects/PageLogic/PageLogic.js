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
			]
		},
		"assets": {
			"icon": ""
		},
		"status": 1,
		"type": 0,
		"actionType": 2,
		"predictExpression": "",
		"predictDetails": [],
		"goalExpression": "",
		"progressExpression": "",
		"valueExpression": "",
		"level": 1,
		"difficulty": 0,
		"isRepeatable": 1,
		"repeatPeriod": 0,
		"visibilityStartTime": "",
		"visibilityEndTime": "",
		"availabilityStartTime": "",
		"availabilityEndTime": "",
		"unit": 1,
		"mark": 1,
		"showPredict": "version>10.0.0",
		"backendConfigTitle": "",
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
		if (mode === "edit" || mode === "clone") {
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
				this.currentBadge.predictDetails = ExpressionUtils.expressionToConditions(this.currentBadge.predictExpression);

				console.log("begin transform predictExpression to predictDetails");
				console.dir(this.currentBadge.predictExpression);
				console.dir(this.currentBadge.predictDetails);
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

	// Save a badge configuration
	async saveBadge() {
		this.defaultBadge.predictExpression = ExpressionUtils.conditionsToExpression(this.defaultBadge.predictDetails);
		delete this.defaultBadge.predictDetails;

		const reward = {
			"rewards": {
				rewardType: 1,
				badge: this.defaultBadge
			}
		};

		try {
			if (appsmith.URL.queryParams.mode === "new" || appsmith.URL.queryParams.mode === "copy") {
				delete reward.rewards.badge.id;
				await addBadge.run({ body: reward });
				showAlert('Badge created successfully!', 'success');
			} else {
				await updateBadge.run({ body: reward });
				showAlert('Badge created successfully!', 'success');
			}
			return;
		} catch (error) {
			console.error("API call failed:", error);
			showAlert('Failed to create badge template: ' + error.message, 'error');
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

	newPredicateModalmode: "new",
	tempPredicate: {			
		"source": "",
		"operator": "",
		"goal": 0,
		"isMetric": false
	},
	async saveCondition () {
		let condition = {};
		condition.id = crypto.randomUUID();
		condition.source = predicateSourceMetric.selectedOptionValue;
		condition.operator = 	predicateOperator.selectedOptionValue;
		condition.isMetric = predicateGoalType.selectedOptionValue === "Metric";
		if (condition.isMetric) {
			condition.goal = predicateGoalMetric.selectedOptionValue;
		} else {
			condition.goal = predicateGoalNumber.text;
		}
		this.currentBadge.predictDetails.unshift(condition);

		resetWidget(predicateSourceMetric);
		resetWidget(predicateOperator);
		resetWidget(predicateGoalType)
		resetWidget(predicateGoalMetric)
		resetWidget(predicateGoalNumber)

		closeModal(PredicateModalClose);
	},
	async deleteCondition (index) {
		//	write code here
		this.currentBadge.predictDetails.splice(index, 1);
	},
}