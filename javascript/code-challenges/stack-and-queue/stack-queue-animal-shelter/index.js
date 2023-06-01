'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    let removedValue = null;
    if (this.top) {
      removedValue = this.top.value;
      this.top = this.top.next;
    }
    return removedValue;
  }


  peek() {
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.front) {
      this.back.next = newNode;
    } else {
      this.front = newNode;
    }
    this.back = newNode;
  }

  dequeue() {
    let removedValue = null;
    if (this.front) {
      removedValue = this.front.value;
      if (this.front === this.back) {
        this.back = null;
      }
      this.front = this.front.next;
    }
    return removedValue;
  }

  peek() {
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}


// CODE CHALLENGE 11: Stack-Queue-Pseudo

class PseduoQueue {
  constructor() {
    this.stackOne = [];
    this.stackTwo = [];
  }

  enqueue(value) {
    while (this.stackOne.length > 0) {
      this.stackTwo.push(this.stackOne.pop());
    }
    this.stackOne.push(value);

    while (this.stackTwo.length > 0) {
      this.stackOne.push(this.stackTwo.pop());
    }
  }

  dequeue() {
    if (this.stackOne.length === 0) {
      return null;
    }
    return this.stackOne.pop();
  }

}


// CODE CHALLENGE 12: ANIMAL SHELTER
class Animal {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    if (animal.species === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.species === 'cat') {
      this.catQueue.push(animal);
    }
  }

  dequeue(pref) {
    if (pref === 'dog') {
      if (this.dogQueue.length > 0) {
        return this.dogQueue.shift();
      }
    } else if (pref === 'cat') {
      if (this.catQueue.length > 0) {
        return this.catQueue.shift();
      }
    }
    return null;
  }
}


// CODE CHALLENGE 13:


module.exports = { Stack, Queue, PseduoQueue, Animal, AnimalShelter };
