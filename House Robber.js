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

