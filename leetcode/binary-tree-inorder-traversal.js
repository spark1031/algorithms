/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  * @return {number[]}
//  */

//RECURSIVE SOLUTION
const inorderTraversal = (root) => {
  const array = [];
  if (!root) return array;
  dfs(root, array);

  function dfs(node, array) {
    if (!node) return;
    dfs(node.left, array);
    array.push(node.val);
    dfs(node.right, array);
  }
  return array;
};

//ITERATIVE SOLUTION (using stack)
const inorderTraversal = (root) => {
  const stack = [];
  const result = [];
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }
  return result;
};