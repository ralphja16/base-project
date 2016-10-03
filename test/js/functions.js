var test = function() {

	isEven = function(num) {
		if (num%2 !== 0) return false;
		return true;
	}
	return {
		isEven: isEven
	}
}
 var test = new test();
