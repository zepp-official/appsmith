export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	},
	randomNegativeInteger(min, max) {
		// Math.ceil() is used on 'min' and Math.floor() is used on 'max' 
		// to ensure the full range of integers is covered.
		min = Math.ceil(min);
		max = Math.floor(max);
		// The logic is the same as a standard random integer:
		// Math.floor(Math.random() * (max - min + 1)) + min;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
}