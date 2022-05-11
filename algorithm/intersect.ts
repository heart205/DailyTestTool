/**
 * @author heart
 * @description 数组交集问题
 * @Date 2022-05-11
 */
// 0 <= nums1[i], nums2[i] <= 1000
// 至此规定 nums1 为 大的数  nums2 为小的数字
export function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  if (nums1.length < nums2.length) {
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }
  for (let i = 0; i < nums1.length; i++) {
    const num = nums1[i]
    for (let j = 0; j < nums2.length; j++) {
      if (nums2[j] === -1) {
        continue
      }
      if (num === nums2[j]) {
        result.push(num)
        nums2[j] = -1
        break
      }
    }
  }
  return result
}

// 先将数组从小到达排序 然后利用指针的方式
export function intersect1(nums1: number[], nums2: number[]): number[] {
  const result: number[] = []
  let pointer1 = 0,
    pointer2 = 0
  // 先将数组进行排序
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  // 对两个数组进行遍历
  while (pointer1 < nums1.length && pointer2 < nums2.length) {
    // 先从小的开始遍历
    if (nums1[pointer1] > nums2[pointer2]) {
      // pointer2 向后移动
      pointer2++
    } else if (nums1[pointer1] === nums2[pointer2]) {
      result.push(nums1[pointer1])
      pointer1++
      pointer2++
    } else {
      pointer1++
    }
  }
  return result
}

// map set 解决
// 将对象 先存入map中 然后再存入set中
export function intersect2(nums1: number[], nums2: number[]): number[] {
  const map = new Map()
  const result: number[] = []
  const arr = nums1.length > nums2.length ? nums1 : nums2
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  const tempArr = arr === nums1 ? nums2 : nums1
  for (let i = 0; i < tempArr.length; i++) {
    if (map.has(tempArr[i])) {
      result.push(tempArr[i])
      const index = map.get(tempArr[i])
      if (index > 0) {
        map.set(tempArr[i], map.get(tempArr[i]) - 1)
        if (index === 1) map.delete(tempArr[i])
      }
    }
  }
  return result
}
