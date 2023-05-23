'use strict';


// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// Create a Linked List Insertation class
class LinkedListInsert {
  constructor() {
    this.head = null;
  }


  // adds a node to the FRONT of a linked list inseration
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // inserts a new node before a target node in a linked list
  insertBefore(value, target) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    if (this.head.value === target) {
      node.next = this.head;
      this.head = node;
      return;
    }

    let currentNode = this.head;
    let prevNode = null;

    while (currentNode) {
      if (currentNode.value === target) {
        node.next = currentNode;
        prevNode.next = node;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    prevNode.next = node;
  }


  //  inserts a new node after a target node in a linked list.
  insertAfter(value, target) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === target) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        return;
      }
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }


  // adds a node to the END of a linked list
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // traverses and prints the values of a linked list.
  traversal() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  // the code searches for a value in a linked list and returns true if found, false otherwise.
  find(value) {
    let current = this.head;

    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }


  // converts a linked list to a string representation.
  toStr() {
    let result = '';
    let current = this.head;
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    result += 'NULL';

    return result;
  }
}

// creates a linked list and prints its JSON representation.
let list = new LinkedListInsert();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));

module.exports = LinkedListInsert;
