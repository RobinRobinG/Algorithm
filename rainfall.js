function rain_collection(arr){
	var n = arr.length;
	var water = 0;
	var left_max = 0;
	var right_max = 0;
 	var lo_idx = 0;
 	var hi_idx = n - 1; 

 	while (lo_idx <= hi_idx){
 		if (arr[lo_idx] < arr[hi_idx]){
	 		if (arr[lo_idx] > left_max){
	 			left_max = arr[lo_idx];
	 		}
	 		else{
	 			water += left_max - arr[lo_idx];
	 		}
	 		lo_idx++;
 		}
 		else {
 			if (arr[hi_idx] > right_max){
 				right_max = arr[hi_idx];
 			}
 			else {
 				water += right_max - arr[hi_idx];
 			}
 			hi_idx--;
 		}
 	}
 	return water;
}
var arr = [7,0,0,0,0];
var x = rain_collection(arr);
console.log(x);


