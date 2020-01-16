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

   size() {
      let node = this.head;
      let counter = 0;

      while(node) {
         node = node.next;
         counter++;
      }

      return counter;
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

   removeFirst() {
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

      return null;
   }

   removeAt(index) {
      // change the reference of the prev node to the node after the one selected
      const previousNode = this.getAt(index - 1);

      if (!previousNode) {
         this.removeFirst();
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
         this.insertFirst(data);
         return;
      }

      // out of bounds case 1) - getAt would return null, in such case insertAt last element
      const previousNode = this.getAt(index - 1) || this.getLast();
      const node = new Node(data, previousNode.next);
      previousNode.next = node;
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
// list.insertAt(3435, 3);
//console.log("BEFORE", { size: list.size(), 0: list.getAt(0), last: list.getLast()});
// list.removeAt(4);
//console.log("AFTER", { size: list.size(), 0: list.getAt(0), last: list.getLast() });

module.exports = { Node, LinkedList };