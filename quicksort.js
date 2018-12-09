function QuickSort(arr){
	let pivot = Math.floor(Math.Random() * arr.length);
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	while (arr[leftIdx] < arr[pivot]) {
		leftIdx++;
	}
	while (arr[rightIdx] > arr[pivot]) {
		rightIdx--;
	}
	if (leftIdx == rightIdx) {
		return pivot;
	} else {
		let temp = arr[leftIdx];
		arr[leftIdx] = arr[rightIdx];
		arr[rightIdx] = temp;
	}
}