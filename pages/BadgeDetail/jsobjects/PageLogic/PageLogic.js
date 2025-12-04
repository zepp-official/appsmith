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
		"type": 0,
		"actionType": 0,
		"predictExpression": "",
		"predictDetails": [],
		"goalExpression": "",
		"progressExpression": "",
		"valueExpression": "",
		"level": 1,
		"difficulty": 0,
		"isRepeatable": 1,
		"repeatPeriod": 0,
		"visibilityStartTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"visibilityEndTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"availabilityStartTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"availabilityEndTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"unit": 1,
		"mark": 1,
		"showPredict": "",
		"createdTime": "",
		"updatedTime": "",
		"isDelete": 1,
		"engineVersion": 1
	},

	// This function will run when the page loads.
	// It must be 'async' because it waits for an API call.
	async onPageLoad() {
		// 1. Get the 'mode' from the URL parameter
		let mode = appsmith.URL.queryParams.mode;
		if (!mode) {
			mode = "new";
		}
		storeValue('pageMode', mode, true);		
		showAlert('current mode:' + mode, 'info');

		if (mode === "edit" || mode === "copy") {
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
				this.currentBadge = badgeData.data.items[0].badge;
				this.currentBadge.predictDetails = ExpressionUtils.expressionToConditions(this.currentBadge.predictExpression);
				if (!this.currentBadge.hasOwnProperty("engineVersion")) {
  					this.currentBadge["engineVersion"] = 1;
				}

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
		
		this.tempPredicate = this.defaultPredicate;
	},

	// Save a badge configuration
	async saveBadge() {
		let savingBadge = JSON.parse(JSON.stringify(this.currentBadge));
		
		if (savingBadge.predictDetails.length === 0){
			showAlert('Predicate expression is requied.', 'error');
			return;
		}
		savingBadge.predictExpression = ExpressionUtils.conditionsToExpression(savingBadge.predictDetails);
		delete savingBadge.predictDetails;

		const reward = {
			"rewards": {
				rewardType: 1,
				badge: savingBadge
			}
		};

		try {
			const mode = appsmith.store.pageMode;
			if (mode === "new" || mode === "copy") {
				delete reward.rewards.badge.id;
				delete reward.rewards.badge.status;
				await addBadge.run({ body: reward });
				showAlert('Badge created successfully!', 'success');
			} else {
				await updateBadge.run({ body: reward });
				showAlert('Badge created successfully!', 'success');
			}

			navigateTo("BadgeList");
			return;
		} catch (error) {
			console.error("API call failed:", error);
			showAlert('Failed to create badge template: ' + error.message, 'error');
		}
	},

	// Add a new tag
	addTag () {
		const tagInput = tagSelect_Widget.selectedOptionValue;
		if (!tagInput || tagInput.trim() === "") {
			showAlert("Please select a tag", "warning");
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
	defaultPredicate: {			
		"source": "",
		"operator": "",
		"goal": "",
		"isMetric": true
	},
	tempPredicate: {
	},
	currentPredicateIndex: 0,
	async saveCondition () {
		this.tempPredicate.source = predicateSourceMetric.selectedOptionValue;
		this.tempPredicate.operator = predicateOperator.selectedOptionValue;
		this.tempPredicate.isMetric = predicateGoalType.selectedOptionValue === "Metric" ? true : false;
		if (this.tempPredicate.isMetric) {
			this.tempPredicate.goal = predicateGoalMetric.selectedOptionValue;
		} else {
			this.tempPredicate.goal = predicateGoalNumber.text;
		}
		
		console.log(this.newPredicateModalmode);
		console.log(this.currentPredicateIndex)
		if (this.newPredicateModalmode === "new") {
			this.currentBadge.predictDetails.unshift(this.tempPredicate);
		} else {
			this.currentBadge.predictDetails[this.currentPredicateIndex] = this.tempPredicate;
		}

		resetWidget(predicateSourceMetric);
		resetWidget(predicateOperator);
		resetWidget(predicateGoalType)
		resetWidget(predicateGoalMetric)
		resetWidget(predicateGoalNumber)
	},
	async deleteCondition (index) {
		this.currentBadge.predictDetails.splice(index, 1);
	},
	
	updateGoalExpression() {
    if (goalType.selectedOptionValue === "Metric") {
      this.currentBadge.goalExpression = goalMetric.selectedOptionValue;
    } else {
			this.currentBadge.goalExpression = goalNumber.text;
		}
  },
	
	saveIcon() {
		showAlert("Saved icon url:" + uploadFile.data.url, 'success')
		this.currentBadge.assets.icon = uploadFile.data.url;
	},
	
	updateVisibilityStartTime() {
		this.currentBadge.visibilityStartTime = visibilityStartTime.formattedDate;
	},
	
	updateVisibilityEndTime() {
		this.currentBadge.visibilityEndTime = visibilityEndTime.formattedDate;
	},
	
	updateAvailabilityStartTime() {
		this.currentBadge.availabilityStartTime = availabilityStartTime.formattedDate;
	},
	
	updateAvailabilityEndTime() {
		this.currentBadge.availabilityEndTime = availabilityEndTime.formattedDate;
	},
	
	// isStrictNumber(str) {
    // if (typeof str !== 'string' || str.trim() === '') {
        // return false;
    // }
    // return !isNaN(Number(str));
	// },
	
	isMetric(str) {
		const index = Enums.metricList.findIndex((item) => item.field_name === str);
		if (index < 0) {
			return false;
		} else {
			return true;
		}
	}
	
}