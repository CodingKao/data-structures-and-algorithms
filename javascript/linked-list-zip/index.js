'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function zipLists(listOne, listTwo) {
  let L1 = listOne.head;
  let L2 = listTwo.head;
  const zipped = new LinkedList();

  while (L1 && L2) {
    zipped.append(L1.value);
    zipped.append(L2.value);
    L1 = L1.next;
    L2 = L2.next;
  }

  // Append remaining nodes from List One, if any
  while (L1) {
    zipped.append(L1.value);
    L1 = L1.next;
  }

  // Append remaining nodes from List Two, if any
  while (L2) {
    zipped.append(L2.value);
    L2 = L2.next;
  }

  return zipped;
}
