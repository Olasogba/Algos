const twoSum = function (nums, target) {
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]]) {
      return [comp[nums[i]], i]; 
    }
    comp[target - nums[i]] = i;
    console.log(comp)
  }
};

console.log(twoSum([1, 2, 3, 4, 5, 6], 7));

