export default {
	// This variable will hold the current challenge data.
	// UI widgets will bind to this object.
	currentChallenge: {
	},
	badgeList: [],

	// This is the default structure for a new challenge.
	// We use this to reset the form in 'new' mode.
	defaultChallenge: {
		"sportType": 1,
		"appname": "com.huami.midong",
		"contents": {
			"challenge_title": "",
			"challenge_description": "",
			"challenge_condition": ""
		},
		"assets": {
			"challenge_cover_icon": "",
			"challenge_accept_icon": ""
		},
		"rules": [
		],
		"unit": 0,
		"startTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"endTime": moment().startOf('day').format('YYYY-MM-DD HH:mm:ss'),
		"isTop": 0,
		"groupId": "",
		"isDelete": 1,
		"engineVersion": 0
	},

	// This function will run when the page loads.
	// It must be 'async' because it waits for an API call.
	async onPageLoad() {
		const queryResult = await queryRewardsApi.run();
		const items = queryResult.data?.items;
		// Use .map() to transform the array into the desired structure
		this.badgeList = items.filter(item => {
			// The data we need is nested inside the 'badge' object
			return item.badge.type === 3;
		}).map(item => {
			return {
				id: item.badge.id,
				title: item.badge.contents.badge_title,
			};
		});


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

				showAlert('Challenge data loaded.', 'success');
			} catch (error) {
				// Handle any errors during the API call
				showAlert('Failed to load challenge data.', 'error');
				console.error(error);
				this.currentChallenge = this.defaultChallenge; // Reset on failure
			}

		} else if (mode === "new") {
			// --- NEW MODE ---
			// 5. Initialize 'currentBadge' with the default empty structure
			this.currentChallenge = this.defaultChallenge;
			showAlert('Ready to create a new challenge.', 'info');
		} else {
			// --- (Optional) Handle unknown modes ---
			showAlert('Page mode is not set. Defaulting to new.', 'warning');
			this.currentChallenge = this.defaultChallenge;
		}
	},

	// Save a challenge configuration
	async saveChallenge() {
		let savingChallenge = JSON.parse(JSON.stringify(this.currentChallenge));

		if(savingChallenge.rules.length < 3) {
			showAlert('There must be three rules!', 'warning');
			return;
		}
		for (let rule of savingChallenge.rules) {
			if (rule.id < 0) {
				delete rule.id;
			}
		}
		
		try {
			const mode = appsmith.store.pageMode;
			if (mode === "new" || mode === "copy") {
				delete savingChallenge.id;
				await addChallenge.run({ body: savingChallenge });
				showAlert('Challenge created successfully!', 'success');
			} else {
				await updateChallenge.run({ body: savingChallenge });
				showAlert('Badge created successfully!', 'success');
			}

			navigateTo("ChallengeList");
			return;
		} catch (error) {
			console.error("API call failed:", error);
			showAlert('Failed to create challenge template: ' + error.message, 'error');
		}
	},


	newPredictModalmode: "new",
	defaultPredict: {
		source: "",
		operator: "",
		goal: "",
		isMetric: false
	},
	tempPredict: {},
	currentRuleId: 0,
	openPredictModal(id) {
		console.log("begin openPredictModal");
		let currentRule = this.currentChallenge.rules.find((item) => item.id === id);
		let currentPredictExpression = ExpressionUtils.expressionToConditions(currentRule.expression.predictExpression);
		if (currentPredictExpression.length > 0) {
			this.tempPredict = JSON.parse(JSON.stringify(currentPredictExpression[0]));
		} else {
			this.tempPredict = JSON.parse(JSON.stringify(this.defaultPredict));
		}

		this.newPredictModalmode = "new";
		this.currentRuleId = id;
		console.log("begin openPredictModal showModal");
		showModal(PredictModal.name);
	},
	async savePredict () {
		this.tempPredict.source = predicateSourceMetric.selectedOptionValue;
		this.tempPredict.operator = predicateOperator.selectedOptionValue;
		this.tempPredict.isMetric = predicateGoalType.selectedOptionValue === "Metric" ? true : false;

		if (this.tempPredict.isMetric) {
			this.tempPredict.goal = predicateGoalMetric.selectedOptionValue;
		} else {
			this.tempPredict.goal = predicateGoalNumber.text;
		}

		const predictExpression = ExpressionUtils.conditionsToExpression([this.tempPredict]);

		let currentRule = this.currentChallenge.rules.find((item) => item.id === this.currentRuleId);
		currentRule.expression.predictExpression = predictExpression;
	},

	addRule() {
		const templateRule = {
			"id": MathUtils.randomNegativeInteger(-10000, -1),
			"expression": {
				"predictExpression": "",
				"goalExpression": "",
				"progressExpression": "",
				"valueExpression": ""
			},
			"rewardConfig": {
				"rewardtype": 1,
				"rewardId": 0
			}
		}
		this.currentChallenge.rules.push(templateRule);
	},
	updateProgress(index, newValue) {
		let currentRule = this.currentChallenge.rules[index];
		currentRule.expression.progressExpression = newValue;
	},
	updateValue(index, newValue) {
		let currentRule = this.currentChallenge.rules[index];
		currentRule.expression.valueExpression = newValue;
	},
	updateGoal(index, newValue) {
		let currentRule = this.currentChallenge.rules[index];
		currentRule.expression.goalExpression = newValue;
	},
	updateBadge(index, newValue) {
		let currentRule = this.currentChallenge.rules[index];
		currentRule.rewardConfig.rewardId = newValue;
	},
	deleteRule (index) {
		this.currentChallenge.rules.splice(index, 1);
		showAlert('Rule delete successfully!', 'success');
	},

	updateStartTime() {
		this.currentChallenge.startTime = startTime.formattedDate;
	},
	updateEndTime() {
		this.currentChallenge.endTime = endTime.formattedDate;
	},

	// 
	// isStrictNumber(str) {
	// if (typeof str !== 'string' || str.trim() === '') {
	// return false;
	// }
	// return !isNaN(Number(str));
	// }

	saveCoverIcon() {
		showAlert("Saved icon url:" + uploadCoverImage.data.url, 'success')
		this.currentChallenge.assets.challenge_cover_icon = uploadCoverImage.data.url;
	},
	saveAcceptIcon() {
		showAlert("Saved icon url:" + uploadAcceptImage.data.url, 'success')
		this.currentChallenge.assets.challenge_accept_icon = uploadAcceptImage.data.url;
	},

}