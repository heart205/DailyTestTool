/**
 * @author heart
 * @description 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * @Date 2022-05-11
 */
export function singleNumber(nums: number[]): number {
  let result = nums[0]
  for (let i = 1; i < nums.length; i++) {
    result ^= nums[i]
  }
  return result
}
