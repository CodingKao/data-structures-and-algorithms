# Implementation: Stacks and Queues
A stack is a data structure that consists of nodes, where each node references the next node in the stack but not its previous node. The common operations on a stack include:

1. Push: This operation adds a node or item to the stack. The item is placed on top of the stack, and the reference to the previous top node is updated. Pushing a node onto a stack has a time complexity of O(1) since it takes the same amount of time regardless of the number of nodes in the stack.

2. Pop: This operation removes the top node from the stack and returns its value. The reference to the top node is updated to point to the previous node in the stack. Popping a node from a stack is also an O(1) operation.

3. Peek: This operation allows you to view the value of the top node in the stack without removing it. It returns the value of the top node and does not modify the stack. Peeking has a time complexity of O(1).

4. isEmpty: This operation checks if the stack is empty and returns a boolean value indicating whether the stack has any nodes or not. It has a time complexity of O(1) since it only involves checking the top reference.

A queue, on the other hand, is a data structure that follows the FIFO (First In First Out) or LILO (Last In Last Out) principle. It has similar operations to a stack:

1. Enqueue: This operation adds a node or item to the queue. The item is inserted at the rear end of the queue, and the rear reference is updated. Enqueueing an item in a queue is an O(1) operation.

2. Dequeue: This operation removes the front node from the queue and returns its value. The front reference is updated to point to the next node in the queue. Dequeueing a node from a queue also has a time complexity of O(1).

3. Peek: Similar to a stack, peeking in a queue allows you to view the value of the front node without removing it. It returns the value of the front node and does not modify the queue. Peeking in a queue has a time complexity of O(1).

4. isEmpty: This operation checks if the queue is empty and returns a boolean value indicating whether the queue has any nodes or not. It has a time complexity of O(1) since it only involves checking the front reference.

Both stacks and queues serve different purposes based on their principles and order of accessing elements. Stacks are useful for implementing features like undo/redo functionality, expression evaluation, and depth-first search algorithms. Queues, on the other hand, are commonly used in scenarios such as process scheduling, breadth-first search algorithms, and handling requests in web servers.


## Stacks and Queues Table of Contents
- [Stack and Queues Implementation](./stack-queue-implement/README.md)
- [Stack and Queues Pseudo Queues](./stack-queue-pseudo/README.md)
