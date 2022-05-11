import { intersect, intersect2 } from '../../algorithm/intersect'
import { toEqualArray } from '../../lib/array'
test('intersect', () => {
  expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])

  expect(toEqualArray(intersect([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9])).toBe(true)
})

test('intersect1', () => {
  expect(toEqualArray(intersect2([4, 9, 5], [9, 4, 9, 8, 4]), [4, 9])).toBe(true)
})

test('intersect2', () => {
  expect(
    toEqualArray(
      intersect2(
        [
          93, 57, 18, 68, 93, 31, 36, 11, 27, 82, 3, 91, 58, 36, 21, 26, 72, 53, 15, 9, 56, 68, 89, 37, 54, 40, 87, 61,
          82, 24, 8, 68, 80, 36, 31, 11, 51, 45, 66, 78, 70, 93, 44, 45, 19, 23,
        ],
        [
          24, 30, 85, 26, 19, 82, 20, 92, 34, 31, 15, 43, 83, 40, 15, 0, 87, 60, 11, 2, 0, 26, 49, 14, 19, 18, 55, 21,
          96, 68, 30, 50, 11, 59, 8, 89, 51, 59, 76, 16, 59, 28, 88, 3, 87, 94, 0, 36, 70, 80, 8, 65, 84, 88, 28, 91,
          96,
        ]
      ),
      [18, 68, 31, 36, 11, 82, 3, 91, 21, 26, 15, 89, 40, 87, 24, 8, 80, 11, 51, 70, 19]
    )
  ).toBe(true)
})
