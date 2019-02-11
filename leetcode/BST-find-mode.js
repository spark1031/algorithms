const findMode = function (root) {
  const result = [];
  const counter = {};
  if (!root) return result;

  dfs(root);
  findModeInCounter();
  return result;

  function dfs(root) {
    (!counter[root.val]) ? counter[root.val] = 1 : counter[root.val] += 1;
    if (root.left) dfs(root.left);
    if (root.right) dfs(root.right);
  }

  function findModeInCounter() {
    const values = Object.values(counter);
    const modeCount = Math.max(...values);
    Object.keys(counter).forEach(key => {
      if (counter[key] === modeCount) {
        result.push(key);
      }
    })
  }
};