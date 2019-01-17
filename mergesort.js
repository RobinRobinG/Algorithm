//Merge Sort

function mergeSort(arr) {
  if ( arr.length === 1) {
    return;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  mergeSort(left);
  mergeSort(right);
  merge(left, right, arr);

}

function merge (left, right, arr) {
  while (left.length && right.length) {
  if (left[idx] < right[idx]){
    arr[idx] = left.shift();
  } else {
    arr[idx] = right.shift();
  }
    idx++;
  }
  while(left.length) {
    arr.concat(left);
  }
  while(right.length) {
    arr.concat(right);
  }
}