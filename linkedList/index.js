// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
   constructor(data, next = null) {
      this.data = data;
      this.next = next;
   }
}

class LinkedList {
   constructor() {
      this.head = null
   }

   insertFirst(data) {
      this.insertAt(data, 0);
   }

   insertLast(data) {
      this.insertAt(data, this.size());
   }

   getFirst() {
      return this.getAt(0);
   }

   getLast() {
      return this.getAt(this.size() - 1);
   }

   clear() {
      this.head = null;
   }

   removeFirst() {
      this.removeAt(0);
   }

   removeLast() {
      this.removeAt(this.size() - 1);
   }

   size() {
      let node = this.head;
      let counter = 0;

      while(node) {
         node = node.next;
         counter++;
      }

      return counter;
   }

   getAt(index) {
      let node = this.head;
      let counter = 0;

      if (!node || index < counter) return null;
     
      while(node) {
         if (index === counter) {
            return node;
         }
         
         node = node.next;
         counter++;
      }

      return null;
   }

   removeAt(index) {
      // change the reference of the prev node to the node after the one selected
      const previousNode = this.getAt(index - 1);

      if (!this.head) {
         return;
      }

      if (index === 0) {
         this.head = this.head.next;
         return;
      }

      if (!previousNode.next) {
         return;
      }

      previousNode.next = previousNode.next.next;
   }

   insertAt(data, index) {
      if (!this.head) {
         this.head = new Node(data);
         return;
      }

      if (index === 0) {
         this.head = new Node(data, this.head);
         return;
      }

      // out of bounds case 1) - getAt would return null, in such case insertAt last element
      const previousNode = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previousNode.next);
      previousNode.next = node;
   }

   forEach(fun) {
      let node = this.head;
      let i = 0;
   
      while(node) {
         fun(node, i);
         node = node.next;
         i++;
      }
   }

   *[Symbol.iterator]() {
      let node = this.head;
      while(node) {
         yield node;
         node = node.next;
      }
   } 

}

const list = new LinkedList;

// list.insertFirst(8);
// list.insertFirst(34);
// list.insertFirst(2);
// list.insertFirst(111);
// list.insertFirst(222);

// list.forEach((node, i) => { console.log(111, node.data + 1) });

// for (let node of list) {
//    console.log(222, node);
// }

// list.getFirst();
// list.getLast();
// list.removeLast();
// list.insertAt(3435, 3);
//console.log("BEFORE", { size: list.size(), 0: list.getAt(0), last: list.getLast()});
// list.removeAt(4);
//console.log("AFTER", { size: list.size(), 0: list.getAt(0), last: list.getLast() });


/***************************************************/
/** MIDPOINT exercise with slow and fast pointers **/
/***************************************************/

// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time using slow and fast pointers.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(linkedList) {
   let slowPointer = linkedList.getFirst();
   let fastPointer = linkedList.getFirst();

   while(fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
   }

   return slowPointer;
}


/********************************************************/
/** CIRCULAR LIST exercise with slow and fast pointers **/
/********************************************************/

// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(linkedList) {
   let slowPointer = linkedList.getFirst();
   let fastPointer = linkedList.getFirst();

   while(fastPointer.next && fastPointer.next.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;

      if (slowPointer === fastPointer) {
         return true;
      }
   }

   return false;
}


/*********************************************************/
/** STEP BACK FROMN THE TAIL exercise with two pointers **/
/*********************************************************/

// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
   let slowPointer = list.getFirst();
   let fastPointer = list.getFirst();

   while(n > 0) {
      fastPointer = fastPointer.next;
      n--;
   }

   while(fastPointer.next) {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next;
   }

   return slowPointer;
}

module.exports = fromLast;

module.exports = { Node, LinkedList, midpoint, circular, fromLast };


/** USE GENERATORS TO LOOP OVER A TREE 

class Tree {
   constructor(value = null, children = []) {
      this.value = value;
      this.children = children;
   }

   *printValues() {
      yield this.value;
      for (let child of this.children) {
         yield* child.printValues();
      }
   }
}

const tree = new Tree(
   1, [new Tree(2, [new Tree(4)]), new Tree(3)]
);

let values = [];

for (let value of tree.printValues()) {
   values.push(value);
}

console.log(222, values);

*/