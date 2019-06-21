import addValue from "./tree-helpers/add-value";

function Tree(rootNode) {
  this.root = rootNode;
}

Tree.prototype.addValue = addValue;

export default Tree;
