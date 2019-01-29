/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// /**
//  * @param {TreeNode} root
//  */
function BSTIterator(root) {
  this.stack = [];
  while (root) {
    this.stack.push(root);
    root = root.left;
  };
};

// /**
//  * @return the next smallest number
//  * @return {number}
//  */
BSTIterator.prototype.next = function () {
  let smallestNode = this.stack.pop();
  let nextNode = smallestNode.right;
  while (nextNode) {
    this.stack.push(nextNode);
    nextNode = nextNode.left;
  }
  return smallestNode.val;
};

// /**
//  * @return whether we have a next smallest number
//  * @return {boolean}
//  */
BSTIterator.prototype.hasNext = function () {
  if (this.stack.length > 0) return true;
  return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */