// https://leetcode.com/problems/contains-duplicate/
function containsDuplicate(nums: number[]): boolean {
  var numSet = new Set<number>();

  for (var i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) return true;

    numSet.add(nums[i]);
  }
  return false;
}

console.log(containsDuplicate([1, 1, 3, 4]));
