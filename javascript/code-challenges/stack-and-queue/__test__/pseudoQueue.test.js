'use strict';

const { PseudoQueue } = require('../stack-queue-pseudo/index');

// Test for PseudoQueue
describe('PseudoQueue Test', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('Enqueue method on a queue built with two stacks', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);
    expect(pseudoQueue.dequeue()).toBe(3);
  });

  it('Dequeue method on a queue built with two stacks', () => {
    pseudoQueue.enqueue(1);
    pseudoQueue.enqueue(2);
    pseudoQueue.enqueue(3);

    expect(pseudoQueue.dequeue()).toBe(1);
    expect(pseudoQueue.dequeue()).toBe(2);

    pseudoQueue.enqueue(4);
    pseudoQueue.enqueue(5);

    expect(pseudoQueue.dequeue()).toBe(3);
    expect(pseudoQueue.dequeue()).toBe(4);
    expect(pseudoQueue.dequeue()).toBe(5);
  });
});
