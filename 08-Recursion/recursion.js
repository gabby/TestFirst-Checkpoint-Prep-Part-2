function factorialIterative(num){
	var total = 1;
	for (var i=num; i>0; i--) {
		total *= i;
	}
	return total;
}; 

function factorial(num){
	if (num) {
		return num * factorial(num-1)
	}
	return 1;
}; 

function fib(num){
	if (num <= 1)
		return 1;
	return fib(num-1) + fib(num-2);
};

function type(input){
	return Object.prototype.toString.call(input).slice(8, -1);
};


function stringify(input){
	if (type(input)=== 'String'){
		return ('"' + input +'"');
	} 
	if (type(input)==='Array'){
		let result = input.map(function(x){
			return stringify(x)
		});
		return '[' + result.join(',') + ']';
	};
	if (type(input)==='Object'){
		var result = [];
		Object.keys(input).forEach(function(key){
			let value = stringify(input[key]);
			result.push('"' + key + '": ' + value);
		});
		return "{" + result.join(',') + "}";
	}
	return input + ''; 
}
