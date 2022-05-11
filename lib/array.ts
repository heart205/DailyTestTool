/**
 * @author heart
 * @description 数组方法
 * @Date 2022-05-11
 */

/**
 * 比较两个数组是否相等
 */
export function toEqualArray(nums1: number[], nums2: number[]): boolean {
  if (nums1 === nums2) return true
  if (nums1.length !== nums2.length) return false
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== nums2[i]) {
      return false
    }
  }
  return true
}
