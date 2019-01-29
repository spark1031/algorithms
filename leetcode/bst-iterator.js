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


//RECURSIVE SOLUTION!!
/**
* Definition for binary tree
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/

// /**
//  * @constructor
//  * @param {TreeNode} root - root of the binary search tree
//  */
var BSTIterator = function (root) {
  this.array = []
  dfs(root, this.array)

  function dfs(root, array) {
    if (!root) {
      return
    }
    dfs(root.left, array)
    array.push(root.val)
    dfs(root.right, array)
  }
};


// /**
//  * @this BSTIterator
//  * @returns {boolean} - whether we have a next smallest number
//  */
BSTIterator.prototype.hasNext = function () {
  return this.array.length > 0
};

// /**
//  * @this BSTIterator
//  * @returns {number} - the next smallest number
//  */
BSTIterator.prototype.next = function () {
  if (this.hasNext()) {
    return this.array.shift()
  }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/