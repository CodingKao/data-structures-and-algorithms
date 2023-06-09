# Code Challenge 12:  FIFO Animal Shelter

## Feature Tasks

- Create a class called AnimalShelter which holds only dogs and cats.
- The shelter operates using a first-in, first-out approach.
- Implement the following methods:
  - enqueue
    - Arguments: animal
      - animal can be either a dog or a cat object.
      - It must have a species property that is either "cat" or "dog"
      - It must have a name property that is a string.

  - dequeue
    - Arguments: pref
      - pref can be either "dog" or "cat"
    - Return: either a dog or a cat, based on preference.
      - If pref is not "dog" or "cat" then return null.

## Whiteboard Process

![Stack & Queue Whiteboard](../assets/code-challenge-12.png)

Collaborated with Tim M. on creating the whiteboard.

## Approach & Efficiency
I used two stacks to implement the PseudoQueue, pushing values into the first stack and transferring them to the second stack for dequeueing. The time/space complexity is O(n).

## Solution

To run test run 'npm test animalShelter.test' in terminal.

![Animal Shelter Test](../assets/animalShelter-solution.png)

