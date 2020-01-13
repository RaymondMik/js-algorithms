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

   insertLast(data) {
      const last = this.getLast();

      if (last) {
         last.next = new Node(data)
      } else {
         this.head = new Node(data);
      }
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

   clear() {
      this.head = null;
   }

   removeFirst(node = this.head) {
      if (!this.head) return null;
      // if there is only one node the list gets flushed
      this.head = this.head.next;
   }

   removeLast(node = this.head, previousNode = null) {
      if (node && node.next) {
         return this.removeLast(node.next, node);
      } else {
         if (previousNode) previousNode.next = null;
         if (node === this.head) this.head = null;
      }
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
   }
}

const list = new LinkedList;
list.insertFirst(8);
list.insertFirst(34);
list.insertFirst(2);
list.insertFirst(111);
list.insertLast(222);
// list.getFirst();
// list.getLast();
// list.removeLast();

console.log(888, list.getLast());


module.exports = { Node, LinkedList };