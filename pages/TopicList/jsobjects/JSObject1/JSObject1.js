export default {
	myVar1: [],
	myVar2: {},
	perPageNumber: 5,
	topicType: [
  	{
    	"name": "单款推新",
    	"code": "single"
  	},
  	{
    	"name": "多款合集",
    	"code": "collection"
  	}
	],
	async myGetTopicList () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		const response = await getTopicList.run();
		return response.data;
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}