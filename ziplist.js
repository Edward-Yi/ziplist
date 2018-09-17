const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(nums1, nums2) {
  if (nums1.length === nums2.length) {
    const list = [];
    for (let i = 0; i < nums1.length; i++) {
      list.push(nums1[i]);
      list.push(nums2[i]);
    }
    return list;
  }
  return 0;
}
console.log(zipList(list1, list2));

function zipListTheSimpleWay(nums1, nums2) {
  return _.flatten(_.zip(nums1, nums2));
}
console.log(zipListTheSimpleWay(list1, list2));
