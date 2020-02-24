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
         // add node children at the end of the array
         nodes.push(...firstNode.children);
         // run fun on the node
         fun(firstNode);
      }
   }

   depthFirstTraversal(fun) {
      let nodes = [this.root];

      while(nodes.length) {
         // remove the first node and store it in firstNode
         let firstNode = nodes.shift();
         // add node children at the beginning of the array
         nodes.unshift(...firstNode.children);
         // run fun on the node
         fun(firstNode);
      }
   }
}

const myTree = new Tree();
myTree.root = new Node(20);
myTree.root.add(0);
myTree.root.add(40);
myTree.root.add(-15);
myTree.root.children[0].add(12);
myTree.root.children[0].add(-2);
myTree.root.children[0].add(1);
myTree.root.children[2].add(-2);

// myTree.breadthFirstTraversal((node) => node.data = node.data + 1);
// myTree.depthFirstTraversal((node) => node.data = node.data + 1);

/******** LEVEL WIDTH EXERCISE ********/
// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
   let levels = [0];
   let nodes = [root, 'STOPPER'];

   while(nodes.length > 1) {
      // -> [Node, "STOPPER"]
      // remove the first node and store it in firstNode
      let firstNode = nodes.shift();
      // -> ["STOPPER"]
      if (firstNode && firstNode !== 'STOPPER' && firstNode.children) {
         // add node children at the end of the array to mark a new leve
         nodes.push(...firstNode.children);
         // -> ["STOPPER", ChildNode, ChildNode, ...]
      }
      
      // increment levels
      levels[levels.length - 1]++;
      // move stopper value to the end of nodes, this helps us figuring out we processed an entire level
      if (nodes[0]=== 'STOPPER' && nodes.length > 1) {
         const stopper = nodes.shift();
         nodes.push(stopper);
         // -> [ChildNode, ChildNode, ... , "STOPPER"]

         // move to the next level of the tree
         levels.push(0);
      }
   }

   return levels;
}

/*function levelWidthRefactored(root) {
   let levels = [0];
   let nodes = [root, 'STOPPER'];

   while(nodes.length > 1) {
      // [Node, "STOPPER"]
      // remove the first node and store it in firstNode
      let firstNode = nodes.shift();
  
      // move stopper value to the end of nodes, this helps us figuring out we processed an entire level
      if (firstNode === 'STOPPER') {
         nodes.push(firstNode);
         // [ChildNode, ChildNode, ... , "STOPPER"]

         // move to the next level of the tree
         levels.push(0);
      } else {
         // add node children at the end of the array to mark a new leve
         nodes.push(...firstNode.children);
         // ["STOPPER", ChildNode, ChildNode, ...]

         // increment levels
         levels[levels.length - 1]++;
      }
   }

   return levels;
}*/

levelWidth(myTree.root)


module.exports = { Tree, Node, levelWidth };