function A() {
	this.val = '123'
	return 'Function A';
}

var B = function B() {
	return 'Funtion B';
}

console.log(A);
console.log(A());
console.log('---------------');
console.log(B);
console.log(B());
console.log('---------------');
console.log(new A().val);