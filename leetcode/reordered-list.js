// linked list question

var reorderList = function (head) {
  const nodes = [];
  const reordered = [];
  let currentIndex = 0;
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  for (let i = 0; i < nodes.length / 2; i++) {
    reordered[i * 2] = nodes[i];
  }

  let index = 1;
  for (let i = nodes.length - 1; i >= nodes.length / 2; i--) {
    reordered[index] = nodes[i];
    index += 2;
  }

  for (let i = 0; i < reordered.length; i++) {
    let currentNode = reordered[i];
    let adjacentNode = reordered[i + 1];
    if (adjacentNode) {
      currentNode.next = null;
      adjacentNode.next = null;
      currentNode.next = adjacentNode;
    }

  }
  return reordered[0];
};