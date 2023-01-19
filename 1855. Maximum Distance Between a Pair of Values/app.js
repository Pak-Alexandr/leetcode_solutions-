/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const maxDistance = function (nums1, nums2) {
    let i = 0, j = 0;
    let ans = 0;
    while (i < nums1.length && j < nums2.length) {
        j = Math.max(j, i);
        while (nums1[i] <= nums2[j]) {
            ans = Math.max(ans, j - i);
            j++;
        }
        i++;
    }
    return ans;
};


maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5])
maxDistance([2, 2, 2], [10, 10, 1])
maxDistance([30, 29, 19, 5], [25, 25, 25, 25, 25])

