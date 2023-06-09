'use strict';


// Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


// Create a Linked List class
class LinkedList {
  constructor() {
    this.head = null;
  }


  // adds a node to the FRONT of a linked list
  insert(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }


  // adds a node to the END of a linked list
  append(value) {
    let node = new Node(value);
    // if the head is null, we need to assign this new to the head as well
    if (!this.head) {
      // in other words, if the list was empty, do this and done
      this.head = node;
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  // iteratively traverse linked list and do a thing
  // traversal() {
  //   let current = this.head;

  //   while (current) {
  //     console.log(current.value);
  //     current = current.next;
  //   }
  // }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let string = `{ ${current.value} }`;
    current = current.next;
    while (current) {
      string = `${string} -> { ${current.value} }`;
      current = current.next;
    }
    if (current === null) {
      string = `${string} -> NULL`;
    }
    return string;
  }
}

module.exports = LinkedList;
