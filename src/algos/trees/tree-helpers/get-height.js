const getHeight = rootNode => {
  if (rootNode === undefined) {
    return 0;
  }
  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
};

export default getHeight;
