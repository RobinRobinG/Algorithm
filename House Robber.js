// House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 0) {
        return 0;
    }else if (nums.length == 1) {
        return nums[0];
    }else {
        var first = nums[0] + rob(nums.slice(2));
        var second = nums[1] + rob(nums.slice(3));
        if (first >= second) {
            return first;
        }else{
            return second;
        }        
    }
};

// Dy
function maxSubsetSum(arr) {
    let inclusive = 0;
    let exclusive = 0;
    for (let i = 0; i < arr.length; i++) {
        let temp = inclusive;
        inclusive = Math.max(inclusive, exclusive + arr[i]);
        exclusive = temp;
    }
    return inclusive;
}

// try again
function maxSubsetSum(arr) {
    let sumArr = [];
    let n = arr.length;
    sumArr[0] = Math.max(0, arr[0]);
    if (arr.length == 1) {
        return sumArr[0];
    }
    sumArr[1] = Math.max(sumArr[0], arr[1]);
    for (let i = 2; i < arr.length; i++) {
        sumArr[i] = Math.max(sumArr[i - 2], sumArr[i - 1], sumArr[i - 2] + arr[i]);
    }
    console.log(sumArr);
    return sumArr[n - 1];
}

// Complete the candies function below.
function candies(n, arr) {
    let candies = [];
    let sum = 0;
    candies[0] = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        } else {
            candies[i] = 1;
        }
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && candies[i] == candies[i + 1]) {
            candies[i] = candies[i + 1] + 1;
        }
    }
    for (let i = 0; i < candies.length; i++) {
        sum += candies[i];
    }
    return sum;
}
