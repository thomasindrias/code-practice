// https://leetcode.com/problems/two-sum/

function twoSum(nums: number[], target: number): (number | undefined)[] {
  var pos = new Map<number, number>();

  for (var i = 0; i < nums.length; i++) {
    var diff = target - nums[i];

    if (pos.has(nums[i])) return [pos.get(nums[i]), i];

    pos.set(diff, i);
  }

  return [];
}

console.log(twoSum([1, 2, 3, 4], 3));
