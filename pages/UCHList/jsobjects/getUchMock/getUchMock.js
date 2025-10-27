export default {

	getListData () {
		const name = Input1.text
		const dc = Select1.selectedOptionValue
		return {
			"data": [
				{
					"id": 129,
					"name": "Auto_Strategy_AP",
					"isRuleBased": true,
					"frequency": {
						"perDay": 1,
						"mDays": 7,
						"nTimes": 7
					},
					"relations": [
						{
							"id": "rule_1750745202333",
							"rule": "int(w_ai_music_membership_status ?? \"0\") == 0 and (float(w_avg_stress_7) \u003e= 5.0   and (float(w_avg_stress_7) / float(w_avg_stress_14) \u003e 1.05 || float(w_avg_stress_7) / float(w_avg_stress_14) \u003c 0.95))",
							"status": 0,
							"weight": 9,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3387",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1744879997352",
							"rule": "int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_stp_ttl_7d != nil and int(w_stp_ttl_7d) \u003e= 10000 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 8,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2803",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1750745353269",
							"rule": "(int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999  and w_stp_dis_7 != nil   and w_stp_dis_14 != nil  and float(w_stp_dis_7) \u003e= 0.5 and (float(w_stp_dis_7) / float(w_stp_dis_14) \u003e 1.1 || float(w_stp_dis_7) / float(w_stp_dis_14) \u003c 0.9)) and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 8,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3363",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1743418833574",
							"rule": "int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_stp_cal_7 != nil and w_gender != nil and int(w_ai_music_membership_status ?? \"0\") == 0 and float(w_stp_cal_7) \u003e= 400.0 and int(w_gender) == 1",
							"status": 0,
							"weight": 7,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2667",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1743418923418",
							"rule": "int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_stp_cal_7 != nil and w_gender != nil and int(w_ai_music_membership_status ?? \"0\") == 0 and float(w_stp_cal_7) \u003e= 300.0 and int(w_gender) == 0",
							"status": 0,
							"weight": 7,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2681",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1750745463883",
							"rule": "int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999 and (float(w_stp_cal_7) \u003e= 100.0 and (float(w_stp_cal_7) / float(w_stp_cal_14) \u003e 1.1 || float(w_stp_cal_7) / float(w_stp_cal_14) \u003c 0.9)) and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 7,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3351",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1743418661987",
							"rule": "int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_avg_pai_7 != nil and float(w_avg_pai_7) \u003e= 50.0 and float(w_avg_pai_7) \u003c 100.0 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 6,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2877",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1743418733571",
							"rule": "int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_avg_pai_7 != nil and float(w_avg_pai_7) \u003e= 100.0 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 6,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2889",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1750745273251",
							"rule": "int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999 and (float(w_avg_pai_7) \u003e= 10.0 and (float(w_avg_pai_7) / float(w_avg_pai_14) \u003e 1.1 || float(w_avg_pai_7) / float(w_avg_pai_14) \u003c 0.9)) and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 6,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3375",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1741162429863",
							"rule": " int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and int(w_ai_music_membership_status??\"0\") == 0 and int(w_sleep_count_1d??\"0\") == 1 and int(w_slp_ss_1d??\"0\") \u003c 70",
							"status": 0,
							"weight": 5,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2460",
								"properties": {
									"materialTarget": "https://fe-cdn.zepp.com/aura-sleep-report/index.html#/introduction?from=active\u0026module=1",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ffe-cdn.zepp.com%2Faura-sleep-report%2Findex.html%23%2Fintroduction%3Ffrom%3Dactive%26module%3D1"
								}
							}
						},
						{
							"id": "rule_1741162629097",
							"rule": " int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_slp_ss_1d != nil and w_slp_ss_mid_15d != nil and int(w_slp_ss_1d) \u003e 80 and int(w_slp_ss_mid_15d) \u003c= 80 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 5,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2865",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1745227534813",
							"rule": " int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 666 and w_slp_ss_1d != nil and int(w_slp_ss_1d) \u003e 70 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": 0,
							"weight": 5,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2901",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1750919362304",
							"rule": "int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999 and int(w_ai_music_membership_status ?? \"0\") == 0 and (int(w_slp_ss_mid_7d) \u003e= 20 and (int(w_slp_ss_mid_7d) / int(w_slp_ss_mid_15d) \u003e 1.1 || int(w_slp_ss_mid_7d) / int(w_slp_ss_mid_15d) \u003c 0.9))",
							"status": 0,
							"weight": 5,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3327",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1750919397305",
							"rule": "int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999 and int(w_ai_music_membership_status ?? \"0\") == 0 and (float(w_slp_dt_7) \u003e= 10.0 and (float(w_slp_dt_7) / float(w_slp_dt_14) \u003e 1.1 || float(w_slp_dt_7) / float(w_slp_dt_14) \u003c 0.9))",
							"status": 0,
							"weight": 5,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3339",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1747216556086",
							"rule": "((int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 499    and w_stp_cal_reach_7 != nil    and w_stp_cal_reach_14 != nil    and int(w_ai_music_membership_status ?? \"0\") == 0    and (int(w_stp_cal_reach_7) \u003e= 2 and int(w_stp_cal_reach_14) \u003e= 6)    and (now().Day() \u003e= 1 and now().Day() \u003c= 15))   ||   (int(uid[-3:]) \u003e= 500 and int(uid[-3:]) \u003c= 999    and w_stp_cal_reach_7 != nil    and w_stp_cal_reach_14 != nil    and int(w_ai_music_membership_status ?? \"0\") == 0    and (int(w_stp_cal_reach_7) \u003e= 2 and int(w_stp_cal_reach_14) \u003e= 6)    and (now().Day() \u003e= 16 and now().Day() \u003c= 31)))",
							"status": 0,
							"weight": 4,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3207",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741163664527",
							"rule": "w_readiness_score_1 != nil and w_is_readiness != nil and float(w_readiness_score_1) \u003c= 70.0 and int(w_is_readiness) == 1 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": -1,
							"weight": 4,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2520",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1741163719135",
							"rule": "w_readiness_score_1 != nil and w_is_readiness != nil and (float(w_readiness_score_1) \u003e 80.0 and float(w_readiness_score_1) \u003c 100.0) and int(w_is_readiness) == 1 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": -1,
							"weight": 4,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2532",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1741163897005",
							"rule": "w_ai_music_duration_7d != nil and int(w_ai_music_membership_status ?? \"0\") == 0 and int(w_ai_music_duration_7d) \u003e 1",
							"status": 0,
							"weight": 4,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2580",
								"properties": {
									"materialTarget": "sky:play_control",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=play_control"
								}
							}
						},
						{
							"id": "rule_1744880047276",
							"rule": "w_readiness_score_1 != nil and w_is_readiness != nil and float(w_readiness_score_1) \u003e 70.0 and float(w_readiness_score_1) \u003c= 80.0 and int(w_is_readiness) == 1 and int(w_ai_music_membership_status ?? \"0\") == 0",
							"status": -1,
							"weight": 4,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2815",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1748056208425",
							"rule": "w_rhrrate_score_7 != nil and int(w_ai_music_membership_status ?? \"0\") == 0 and (int(w_rhrrate_score_7) \u003e= 80 and int(w_rhrrate_score_7) \u003c 100 ) ",
							"status": 0,
							"weight": 3,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3231",
								"properties": {
									"materialTarget": "sky:player:openRn:CombinedAITalk",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=player\u0026data=%7B%22type%22:%22openRn%22,%22modal%22:%22CombinedAITalk%22,%22text%22%3A%22extraText%22%7D"
								}
							}
						},
						{
							"id": "rule_1741162205866",
							"rule": "w_avg_stress_7 != nil and  int(w_ai_music_membership_status ?? \"0\") == 0 and  float(w_avg_stress_7) \u003e= 20.0",
							"status": 0,
							"weight": 2,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2568",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1745847916467",
							"rule": "w_avg_stress_7 != nil and int(w_ai_music_membership_status ?? \"0\") == 0 and (float(w_avg_stress_14 ?? \"0\") - float(w_avg_stress_7 ?? \"0\")) \u003e 0.0 and not (float(w_avg_stress_7) \u003e= 20.0)",
							"status": 0,
							"weight": 2,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2939",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1746065147182",
							"rule": "(( int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 333 and int(w_ai_music_membership_status??\"0\") == 0 and int(w_lastactivedayspan) == 7 and (now().Day() \u003e= 1 and now().Day() \u003c= 10) )   || ( int(uid[-3:]) \u003e= 334 and int(uid[-3:]) \u003c= 666 and int(w_ai_music_membership_status??\"0\") == 0 and int(w_lastactivedayspan) == 7 and (now().Day() \u003e= 11 and now().Day() \u003c= 20) )   || ( int(uid[-3:]) \u003e= 667 and int(uid[-3:]) \u003c= 999 and int(w_ai_music_membership_status??\"0\") == 0 and int(w_lastactivedayspan) == 7 and (now().Day() \u003e= 21 and now().Day() \u003c= 31) ))",
							"status": 0,
							"weight": 2,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3243",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1750499607090",
							"rule": "(( int(uid[-3:]) \u003e= 0 and int(uid[-3:]) \u003c= 499 and int(w_ai_music_membership_status ?? \"0\") == 0 and (int(w_sleep_count_15d ?? \"0\") - int(w_sleep_count_7d ?? \"0\") \u003e 1) and int(w_sleep_count_7d ?? \"0\") \u003e 0 and (now().Day() \u003e= 1 and now().Day() \u003c= 15) ) || ( int(uid[-3:]) \u003e= 500 and int(uid[-3:]) \u003c= 999 and int(w_ai_music_membership_status ?? \"0\") == 0 and (int(w_sleep_count_15d ?? \"0\") - int(w_sleep_count_7d ?? \"0\") \u003e 1) and int(w_sleep_count_7d ?? \"0\") \u003e 0 and (now().Day() \u003e= 16 and now().Day() \u003c= 31) ))",
							"status": 0,
							"weight": 2,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2436",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741160823686",
							"rule": "int(w_newest_firstbind_interval??\"0\") \u003e= 3 and int(w_newest_firstbind_interval??\"0\") \u003c 6 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2592",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741161118071",
							"rule": "int(w_newest_firstbind_interval??\"0\") \u003e= 6 and int(w_newest_firstbind_interval??\"0\") \u003c 8 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2604",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741161293527",
							"rule": "int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003e 83 and int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003c= 90 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2388",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741161376954",
							"rule": "int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003e 173 and int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003c= 180 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2400",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741161441358",
							"rule": "int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003e 358 and int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003c= 365 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2412",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1741161487469",
							"rule": "int(w_newest_firstbind_interval??\"0\") \u003e= 13 and int(w_newest_firstbind_interval??\"0\") \u003c 15 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3063",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1744108735351",
							"rule": "(int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003e 270 and int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003c= 277 and (int(w_ai_music_membership_status??\"0\") == 0))",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2751",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						},
						{
							"id": "rule_1745590079409",
							"rule": "int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003e 30 and int((now() - date(w_newest_firstbind_day)).Seconds()/duration(\"24h\").Seconds()) \u003c= 37 and (int(w_ai_music_membership_status??\"0\") == 0)",
							"status": 0,
							"weight": 1,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 1,
								"do_action_frequency_Mdays": 7,
								"do_action_frequency_Ntimes": 1,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2913",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-03-06T12:46:11Z",
					"updatedAt": "2025-09-30T02:32:54Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 154,
					"name": "asia_weeklysummarypush_temporaryuse",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1719370058621",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": true,
								"do_action_at_specific": false,
								"do_action_at_specific_time": "",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3279",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-report-week",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-report-week"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-08-15T10:32:07Z",
					"updatedAt": "2025-08-15T10:32:07Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 115,
					"name": "AP_manual_strategy_monthlyreport",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1724986290635",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "09:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3291",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-month-report-push",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-month-report-push"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-01-06T01:30:26Z",
					"updatedAt": "2025-08-11T07:12:27Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 60,
					"name": "asia_weeklysummarypush",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1719370058621",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "09:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3279",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-report-week",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-report-week"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2024-09-10T07:15:05Z",
					"updatedAt": "2025-07-28T08:20:01Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 152,
					"name": "Zepp_manual_campaign_summersalelastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-08-05 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3435",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-07-22T10:44:58Z",
					"updatedAt": "2025-07-22T10:44:58Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 151,
					"name": "Zepp_manual_campaign_summersale",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-07-23 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3423",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-07-22T10:44:43Z",
					"updatedAt": "2025-07-22T10:44:43Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 124,
					"name": "ASIA_manual_strategy_1andhalfyear",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1730189489675",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-06-21 20:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2276",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-01-25T01:11:09Z",
					"updatedAt": "2025-06-21T10:08:58Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 58,
					"name": "asia_nonmembermonthlyreport",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1724986290635",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "09:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3291",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-month-report-push",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-month-report-push"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2024-09-10T06:27:27Z",
					"updatedAt": "2025-06-11T06:01:00Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 9,
					"name": "PacificAsiaweeklysummarypush",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1719370058621",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": true,
								"do_action_at_specific": false,
								"do_action_at_specific_time": "",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3279",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-report-week",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-report-week"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2024-06-25T19:03:38Z",
					"updatedAt": "2025-06-11T05:57:55Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 6,
					"name": "PAweeklysummarypush",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1719370058621",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": true,
								"do_action_at_specific": false,
								"do_action_at_specific_time": "",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3279",
								"properties": {
									"materialTarget": "https://t.zepp.com/t/h5-sleep-report-week",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=webview\u0026url=https%3A%2F%2Ft.zepp.com%2Ft%2Fh5-sleep-report-week"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2024-06-25T19:02:28Z",
					"updatedAt": "2025-06-11T05:57:29Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 150,
					"name": "AP_manual_campaign_fathersdaylastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-06-16 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3267",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-06-09T07:31:05Z",
					"updatedAt": "2025-06-09T07:31:05Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 149,
					"name": "AP_zepplife_manual_campaign_fathersdaylastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-06-16 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3267",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "mifit://cn.com.hm.health/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-06-09T07:30:45Z",
					"updatedAt": "2025-06-09T07:30:45Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 148,
					"name": "AP_zepplife_manual_campaign_fathersday",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-06-10 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3255",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "mifit://cn.com.hm.health/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-06-09T07:30:32Z",
					"updatedAt": "2025-06-09T07:30:32Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 147,
					"name": "AP_manual_campaign_fathersday",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-06-10 19:00:00",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "3255",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-06-09T07:30:02Z",
					"updatedAt": "2025-06-09T07:30:02Z",
					"createdBy": "renyu@zepp.com"
				},
				{
					"id": 146,
					"name": "ASIA_manual_campaign_mothersdaylastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-05-12 18:51:48",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2974",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-29T07:03:54Z",
					"updatedAt": "2025-04-29T07:03:54Z",
					"createdBy": "shaohongyan@zepp.com"
				},
				{
					"id": 145,
					"name": "ASIA_zepplife_manual_campaign_mothersdaylastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-05-12 18:51:48",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2974",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "mifit://cn.com.hm.health/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-29T07:03:23Z",
					"updatedAt": "2025-04-29T07:03:23Z",
					"createdBy": "shaohongyan@zepp.com"
				},
				{
					"id": 144,
					"name": "ASIA_zepplife_manual_campaign_mothersday",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-05-08 18:51:48",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2960",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "mifit://cn.com.hm.health/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-29T06:54:26Z",
					"updatedAt": "2025-04-29T06:54:26Z",
					"createdBy": "shaohongyan@zepp.com"
				},
				{
					"id": 143,
					"name": "ASIA_manual_campaign_mothersday",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745908756889",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-05-08 18:51:48",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2960",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-29T06:54:02Z",
					"updatedAt": "2025-04-29T06:54:02Z",
					"createdBy": "shaohongyan@zepp.com"
				},
				{
					"id": 142,
					"name": "ASIA_zepplife_manual_campaign_easterlastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745217551721",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-04-22 17:39:31",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2848",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "mifit://cn.com.hm.health/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-21T06:42:07Z",
					"updatedAt": "2025-04-21T06:42:53Z",
					"createdBy": "shaohongyan@zepp.com"
				},
				{
					"id": 141,
					"name": "ASIA_manual_campaign_easterlastcall",
					"isRuleBased": false,
					"frequency": {
						"perDay": 0,
						"mDays": 0,
						"nTimes": 0
					},
					"relations": [
						{
							"id": "rule_1745217551721",
							"rule": "",
							"status": 0,
							"weight": 0,
							"action": "push",
							"setting": {
								"do_action_at_once": false,
								"do_action_at_specific": true,
								"do_action_at_specific_time": "2025-04-22 17:39:31",
								"do_action_with_dynamic_field": false,
								"do_action_dynamic_config": {
									"appName": "",
									"fieldName": "",
									"timeOffset": 0,
									"timeUnit": "",
									"accessTimeRangeStart": "",
									"accessTimeRangeEnd": ""
								},
								"do_action_frequency_per_day": 0,
								"do_action_frequency_Mdays": 0,
								"do_action_frequency_Ntimes": 0,
								"bizSceneCode": "",
								"isSupportUnsubscribe": true,
								"emailFrom": "",
								"isPassThrough": false
							},
							"material": {
								"id": "2848",
								"properties": {
									"materialTarget": "sky:member",
									"msgType": "jumpdirect",
									"msgURL": "amazfit://com.huami.watch.hmwatchmanager/action?name=sky\u0026target=member"
								}
							}
						}
					],
					"status": true,
					"createdAt": "2025-04-21T06:40:43Z",
					"updatedAt": "2025-04-21T06:40:43Z",
					"createdBy": "shaohongyan@zepp.com"
				}
			],
			"current": 1,
			"total": 123,
			"per_page": 20
		}
	}
}