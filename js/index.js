function multiplyNode(node, count, deep) {
  for (var i = 0, copy; i < count - 1; i++) {
      copy = node.cloneNode(deep);
      node.parentNode.insertBefore(copy, node);
  }
}

multiplyNode(document.querySelector('.todo-task'), 5, true);