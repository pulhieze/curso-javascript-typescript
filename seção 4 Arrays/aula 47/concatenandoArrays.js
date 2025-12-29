const nums1 = [1, 2, 3, 4, 5];
const nums2 = [6, 7, 8, 9, 10];
// const numerosConcatenados = nums1.concat(nums2);

const numerosConcatenados = [...nums1, ...nums2];

console.log(numerosConcatenados);
