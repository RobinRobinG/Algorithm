//Binary Search
//Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.

binary_search_1 = function(arr, val) {
	var mid = Math.floor(arr.length-1)/2;

	if (arr.length == 1 && arr[arr.length - 1] != val){
		return False;
	}
	else if (arr[mid] == val){ 
		return mid; //return the index of the val
	}
	else if (arr[mid] > val){
		return binary_search(arr.slice(0, mid), val);
	}
	else {
		return binary_search(arr.slice(mid), val);
	}
}


binary_search_2 = function(arr, val, start, end) {
    if (start > end) {
        return False;
    } else {
        let mid = Math.floor((start + end)/2);
        if (val == arr[mid]) {
            return mid;
        } else if (val > arr[mid]) {
            return search(arr, val, mid+1, end);
        }else {
            return search(arr, val, start, mid-1);
        }
    }
};

console.log(search(['ant', 'bison', 'camel', 'duck', 'elephant'], 'pikachu', 0, 4))

