class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;

        // Pointer to the next node in the list
        this.next = next;
    }
}

function lengthOfLoop(head){
    var visitedNodes = new Map()
    var temp = head;
    var timer = 0 ;
    while(temp!==null){
        if(visitedNodes.has(temp)){
        return timer - visitedNodes.get(temp);// timer is assosiated with the temp so it is the value of temp that is for the loop is 2      
        /**The line visitedNodes.get(temp) retrieves the value associated with the temp key in the visitedNodes map. In this code, visitedNodes stores the timer value at each node, which represents the position (or "time") when the node was first visited. */
        }
        visitedNodes.set(temp, timer);
        temp = temp.next;
        timer++;
    }
    return 0
}// Create nodes
var head = new Node(1);
var second = new Node(2);
var third = new Node(3);
var fourth = new Node(4);
var fifth = new Node(5);

// Link nodes
head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

// Create a loop
fifth.next = third; // fifth node points to the third node, creating a loop

var loopLength = lengthOfLoop(head);

if (loopLength > 0) {
    console.log("Length of the loop:", loopLength);
} else {
    console.log("No loop found in the linked list.");
}

//----------------------Tortoise and hare algorithm-------------//
// class Node {
//   constructor(data, next) {
//     // Data stored in the node
//     this.data = data;

//     // Pointer to the next node in the list
//     this.next = next;
//   }
// }
// // loop detect hone k baad hmko length calculkate krni he
// function findLength(slow, fast) {
//   let cnt = 1;
//   fast = fast.next;
//   while (slow !== fast) {
//     cnt++;
//     fast = fast.next;
//   }
//   return cnt;
// }

// function lengthOfLoop(head) {
//   let slow = head;
//   let fast = head;
//   while (fast !== null && fast.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       return findLength(slow, fast);
//     }
//   }
//   return 0;
// }
// // Create a sample linked list with a loop
// var head = new Node(1);
// var second = new Node(2);
// var third = new Node(3);
// var fourth = new Node(4);
// var fifth = new Node(5);

// // Create a loop from fifth to second
// head.next = second;
// second.next = third;
// third.next = fourth;
// fourth.next = fifth;

// // This creates a loop
// fifth.next = third;

// var loopLength = lengthOfLoop(head);

// if (loopLength > 0) {
//   console.log("Length of the loop:", loopLength);
// } else {
//   console.log("No loop found in the linked list.");
// }
/**Let's go through a detailed dry run of the given code to understand how it detects and calculates the length of the loop in a linked list.

### Dry Run

#### Initial Setup
- `head` -> Node(1)
- `second` -> Node(2)
- `third` -> Node(3)
- `fourth` -> Node(4)
- `fifth` -> Node(5)
- The list is created and linked as follows:
  - head.next = second
  - second.next = third
  - third.next = fourth
  - fourth.next = fifth
  - fifth.next = third (creating a loop starting at Node(3))

#### Starting `lengthOfLoop` Function
1. Initialize `slow` and `fast` pointers to `head`.
   - `slow` = Node(1)
   - `fast` = Node(1)

#### First Iteration of the While Loop
2. Move `slow` by one step and `fast` by two steps.
   - `slow` = slow.next -> Node(2)
   - `fast` = fast.next.next -> Node(3)
3. `slow` is not equal to `fast`, continue the loop.

#### Second Iteration of the While Loop
4. Move `slow` by one step and `fast` by two steps.
   - `slow` = slow.next -> Node(3)
   - `fast` = fast.next.next -> Node(5)
5. `slow` is not equal to `fast`, continue the loop.

#### Third Iteration of the While Loop
6. Move `slow` by one step and `fast` by two steps.
   - `slow` = slow.next -> Node(4)
   - `fast` = fast.next.next -> Node(4) (since fast.next is Node(3), and fast.next.next is Node(4))
7. `slow` is now equal to `fast`, indicating the presence of a loop.
8. Call `findLength(slow, fast)` with `slow` = Node(4) and `fast` = Node(4).

#### Entering `findLength` Function
9. Initialize `cnt` to 1.
10. Move `fast` by one step.
    - `fast` = fast.next -> Node(5)
11. `slow` is not equal to `fast`, increment `cnt` by 1.
    - `cnt` = 2

#### Loop in `findLength` Function
12. Move `fast` by one step.
    - `fast` = fast.next -> Node(3)
13. `slow` is not equal to `fast`, increment `cnt` by 1.
    - `cnt` = 3

#### Continuing Loop in `findLength` Function
14. Move `fast` by one step.
    - `fast` = fast.next -> Node(4)
15. `slow` is equal to `fast`, exit the loop.
16. Return `cnt` which is 3.

#### Returning to `lengthOfLoop` Function
17. `lengthOfLoop` returns 3.

### Output
18. Print "Length of the loop: 3".

### Summary of the Dry Run
- The loop detection mechanism using Floyd's Tortoise and Hare algorithm correctly identifies the loop.
- Once the loop is detected, the `findLength` function calculates the length of the loop by traversing the loop until it meets the starting point again.
- The output correctly indicates that the length of the loop is 3.

### Complete Dry Run Output:
```
Length of the loop: 3
``` */