// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
   constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
   }

   insert(data) {
      // left end side of the node
      if (data < this.data && this.left) {
         // delegate insertion to already existing node
         this.left.insert(data);
      } else if (data < this.data) {
         // insert node
         this.left = new Node(data);
      } else if (data > this.data && this.right) {
         // delegate insertion to already existing node
         this.right.insert(data);
      } else if (data > this.data) {
         // insert node
         this.right = new Node(data);
      }
   }

   contains(data) {
      if (data === this.data) {
         return this;
      }

      if (data < this.data && this.left) {
         return this.left.contains(data);
      } else if (data > this.data && this.right) {
         return this.right.contains(data);
      } 
         
      return null;
   }
}


/**********************************************************/
/** Binary TREE validation exercise with slow and fast pointers **/
/*********************************************************/
// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

const n = new Node(10);
  n.insert(5);
  n.insert(15);
  n.insert(0);
  n.insert(20);
  n.insert(6);

const validate = (node, min = null, max = null) => {
   console.log(222, {node, min, max})
   // check if node is valid
   if (max !== null && node.data > max) {
      return false;
   }

   if (min !== null && node.data < min) {
      return false;
   }

   // perform the recursion on the left node
   if (node.left && !validate(node.left, min, node.data)) {
      console.log(111, node.left, node.data)
      return false;
   }

   // perform the recursion on the right node
   if (node.right && !validate(node.right, node.data, max)) {
      console.log(333, node.right, node.data)
      return false;
   }
   
   return true;
}

validate(n);

module.exports = { Node, validate };