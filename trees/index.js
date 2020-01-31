// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
   constructor(data) {
      this.data = data;
      this.children = [];
   }

   add(data) {
      this.children.push(new Node(data));
   }

   remove(data) {
      const filteredChildren = this.children.filter((node) => node.data !== data);
      this.children = filteredChildren;
   }
}

class Tree {
   constructor() {
      this.root = null;
   }

   breadthFirstTraversal(fun) {
      let nodes = [this.root];
      
      while(nodes.length) {
         // remove the first node and store it in firstNode
         let firstNode = nodes.shift();
         nodes.push(...firstNode.children);
         fun(firstNode);
      }
   }

   depthFirstTraversal(fun) {
      let nodes = [this.root];

      while(nodes.length) {
         let firstNode = nodes.shift();
         nodes.unshift(...firstNode.children);
         fun(firstNode);
      }
   }
}

// const myTree = new Tree();
// myTree.root = new Node(20);
// myTree.root.add(0);
// myTree.root.add(40);
// myTree.root.add(-15);
// myTree.root.children[0].add(12);
// myTree.root.children[0].add(-2);
// myTree.root.children[0].add(1);
// myTree.root.children[2].add(-2);

// myTree.breadthFirstTraversal((node) => node.data = node.data + 1);
// myTree.depthFirstTraversal((node) => node.data = node.data + 1);

module.exports = { Tree, Node };