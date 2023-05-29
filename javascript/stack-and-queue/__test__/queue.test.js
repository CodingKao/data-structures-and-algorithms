'use strict';

const { Queue } = require('../index');

describe('Queue test', () => {

  test('Can successfully enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);

  });

  test('Can successfully enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);

  });

  test('Can successfully dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    let dequeuedValue = queue.dequeue();

    expect(dequeuedValue).toBe(1);
    expect(queue.peek()).toBe(2);

  });

  test('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek()).toBe(1);

  });

  test('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.isEmpty()).toBe(true);

  });

  test('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();

    expect(queue.isEmpty()).toBe(true);

  });

  test('Calling dequeue or peek on empty queue raises exception', async () => {
    expect.assertions(2);

    try {
      await queue.dequeue();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }

    try {
      await queue.peek();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

});








// Write tests to prove the following functionality for Queues:
// Can successfully enqueue into a queue
// Can successfully enqueue multiple values into a queue
// Can successfully dequeue out of a queue the expected value
// Can successfully peek into a queue, seeing the expected value
// Can successfully empty a queue after multiple dequeues
// Can successfully instantiate an empty queue
// Calling dequeue or peek on empty queue raises exception
