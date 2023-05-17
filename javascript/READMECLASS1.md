
# Challenge Title:  reverseArray

Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.

## Whiteboard Process

![White Board](/code-challenge-1.png)

## Approach & Efficiency

For the "reverseArray" problem, I chose to take an iterative approach to reverse the elements of the array. This approach involves traversing the array from both ends and swapping the elements until the midpoint is reached.

The time complexity of this approach is O(n), where n is the number of elements in the array. This is because we need to visit each element once to perform the swap operations.

The space complexity is O(1) because we are modifying the array in-place without using any additional data structures.

## Solution
>const reverseArray = (arr) => {
>
> let front = 0;
>
> let end = arr.length - 1;
>
> while(end > front){
>
>  let temp = arr[front];
>
>  arr[front] = arr[end];
>
>  arr[end] = temp;
>
>  front++;
>
>  end--;
>
> }
>
> return arr;
>
>}

To run the code and see examples of it in action, you can follow these steps:

1. Copy the provided code into a JavaScript file, for example, "reverseArray.js".
2. Open a command prompt or terminal and navigate to the directory where the file is located.
3. Run the JavaScript file using a JavaScript runtime environment such as Node.js by typing: node reverseArray.js and pressing Enter.

## Collaborators

Collaborated with Ryan C., Kenya W., Corianna W. and Hayden C.
