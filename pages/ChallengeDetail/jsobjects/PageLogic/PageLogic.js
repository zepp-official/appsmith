export default {
	// This variable will hold the current challenge data.
	// UI widgets will bind to this object.
	currentChallenge: {
	},

	// This is the default structure for a new challenge.
	// We use this to reset the form in 'new' mode.
	defaultChallenge: {
		"id": "",
		"sportType": 1,
		"appname": "com.huami.midong",
		"contents": {
			"challenge_title": "NEW YEAR TEST",
			"challenge_description": "Ring in the new year with steps towards a better you! Join the \"New Year New You\" badge challenge—accumulate 20,000 walking steps within 2 months to unlock your exclusive honor badge and kickstart your fresh self with every stride!",
			"challenge_condition": "20,000 walking steps"
		},
		"assets": {
			"challenge_cover_icon": "https://img-cdn.zepp.com/Aura/20251120/b55f05fe42a7e3ba33ea6f80ea2ff64b.png",
			"challenge_accept_icon": "https://img-cdn.zepp.com/Aura/20251120/687a0899049cb63feb091e40ff7bcc39.png"
		},
		"rules": [
			{
				"id": 47,
				"expression": {
					"predictExpression": "total_steps >=2000",
					"goalExpression": "2000",
					"progressExpression": "total_steps",
					"valueExpression": "total_steps"
				},
				"rewardConfig": {
					"rewardtype": 1,
					"rewardId": 14
				}
			},
			{
				"id": 48,
				"expression": {
					"predictExpression": "total_steps >=10000",
					"goalExpression": "10000",
					"progressExpression": "",
					"valueExpression": "total_steps"
				},
				"rewardConfig": {
					"rewardtype": 1,
					"rewardId": 15
				}
			},
			{
				"id": 49,
				"expression": {
					"predictExpression": "total_steps >=20000",
					"goalExpression": "20000",
					"progressExpression": "",
					"valueExpression": "total_steps"
				},
				"rewardConfig": {
					"rewardtype": 1,
					"rewardId": 16
				}
			}
		],
		"unit": 5,
		"startTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"endTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"challengeStatus": 2,
		"isTop": 0,
		"isDelete": 1
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
			const challengeId = appsmith.URL.queryParams.id;

			if (!challengeId) {
				showAlert('Error: No ID provided in edit mode.', 'error');
				this.currentChallenge = this.defaultChallenge; // Reset to default
				return;
			}

			try {
				// 3. Run the API query and wait for the response
				// We pass the 'badgeId' as a parameter to the query
				const challengeData = await getChallengeById.run({ id: challengeId });

				// 4. Store the API response in our variable
				// IMPORTANT: Adjust 'badgeData' based on your API's actual response structure.
				// For example, if your data is at badgeData.data, use:
				this.currentChallenge = challengeData.data.items[0];
				// this.currentChallenge.predictDetails = ExpressionUtils.expressionToConditions(this.currentBadge.predictExpression);

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

	isStrictNumber(str) {
		if (typeof str !== 'string' || str.trim() === '') {
			return false;
		}
		return !isNaN(Number(str));
	}
}