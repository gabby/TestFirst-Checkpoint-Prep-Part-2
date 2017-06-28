function doubler(num){
	return num * 2;
};

function map(arr, func){
	let newArr = [];
	for (let i=0; i<arr.length; i++){
		newArr.push(func(arr[i]));
	}
	return newArr;
}; 

function filter(arr, func){
	let newArr = [];
	for (let i=0; i<arr.length; i++){
		if (func(arr[i])) 
			newArr.push(arr[i]);
	}
	return newArr;
};

function contains(obj, val){
	for (key in obj) {
		if (obj.hasOwnProperty(key)){
			if (obj[key] === val) {
				return true;
			}
		}
	}
	// let newArr = Object.keys(obj); 
	// for (let i=0; i<newArr.length; i++){
	// 	if (obj[newArr[i]] == val) 
	// 		return true;
	// };
	return false;
}

function countWords(str){
	return str.split(' ').length;
}

function reduce(arr, start, func){
	let total = start;
	for (let i=0; i<arr.length; i++) {
		total = func(total, arr[i]);
	}
	return total;
}

function countWordsInReduce(a, b){
		return a + countWords(b); 
};

function sum(arr) {
	return reduce(arr, 0, function(a, b){
		return a + b;
	});
}

function every(arr, func){
	let newFunc =function(a,b){
		return a && func(b);
	}
	return reduce(arr, true, newFunc)
}

function any(arr, func){
	let newFunc = function(a, b){
		return a || func(b);
	}
	return reduce(arr, false, newFunc)
}













