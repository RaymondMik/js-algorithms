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
      // if the first node is not defined it will be null anyway
      this.head = new Node(data, this.head);
   }

   size(node = this.head, counter = 0) {
      if (node) {
         counter++;
         return this.size(node.next, counter)
      } else {
         return counter;
      }
   }

   getFirst() {
      return this.head;
   }

   getLast(node = this.head) {
      if (node && node.next) {
         return this.getLast(node.next)
      } else {
         return node;
      }
   }
}

const list = new LinkedList;
list.insertFirst(8);
list.insertFirst(34);
list.insertFirst(2);
list.insertFirst(111);
list.getFirst();
list.getLast();

module.exports = { Node, LinkedList };