/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */

const findSum = (root) => {
  if (!root) return 0;
  return root.val + findSum(root.left) + findSum(root.right);

}

const findTilt = (root) => {
  if (!root) return 0;
  let left = findSum(root.left);
  let right = findSum(root.right);
  return Math.abs(left - right) + findTilt(root.left) + findTilt(root.right);

};

// const findTilt = (root) => {
//     if (!root) return 0;
//     let left; 
//     let right; 
//     let tilt;
//     if (root.left) {
//         left = root.left;
//     } else {
//         left = 0;
//     }

//     if (root.right) {
//         right = root.right;
//     } else {
//         right = 0;
//     }

//     tilt = Math.abs(left - right);
//     return tilt + findTilt(root.left) + findTilt(root.right);
// };