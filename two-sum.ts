// function twoSum(nums: number[], target: number): number[] {
//   var pos: number[];

//   for (var i = 0; i < nums.length; i++)
//     for (var j = i + 1; j < nums.length; j++)
//       if (nums[i] + nums[j] === target) return [i, j];

//   return [];
// }

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
