
//ITERATIVE SOLUTION
const searchBST = function (root, val) {
  if (!root) return null;
  while (root) {
    if (root.val === val) return root;
    if (val <= root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return null;
};