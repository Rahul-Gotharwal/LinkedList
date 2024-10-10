class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
function reverseLinkedList(head) {
  let temp = head;
  let prev = null;
  while (temp !== null) {
    let front = temp.next;
    temp.next = prev;
    prev = temp;
    temp = front;
  }
  return prev;
}
function getKthNode(temp, k) {
  k -= 1;
  while (temp !== null && k > 0) {
    k--;
    temp = temp.next;
  }
  // Return the Kth node
  return temp;
}
// Function to reverse nodes in groups of K
function kReverse(head, k) {
  let temp = head;
  let prevLast = null;
  while (temp !== null) {
    let kThNode = getKthNode(temp, k); // this will return linked list with value 3
    // we can remove this if block , there is no changes in the answer
    // if there is no kthNode 
    if (kThNode === null) {
      // If there was a previous group,
      // link the last node to the current node
      if(prevLast){
        prevLast.next = temp;
      }// Exit the loop
      break;
    }
    // Store the next node
    // after the Kth node
    let nextNode = kThNode.next; 
    // Disconnect the Kth node
    // to prepare for reversal
    kThNode.next = null; // seprate till the kth node
    // Reverse the nodes from
    // temp to the Kth node
    reverseLinkedList(temp);
    // Adjust the head if the reversal
    // starts from the head
    // is it the first group
    if (temp === head) {
      head = kThNode;
    } else {
      // Link the last node of the previous
      // group to the reversed group
      prevLast.next = kThNode;
    }
    // Update the pointer to the
    // last node of the previous group
    prevLast = temp;
    // Move to the next group
    temp = nextNode;
  }
  // Return the head of the
  // modified linked list
  return head;
}

// Function to print the linked list
function printLinkedList(head) {
  let temp = head;
  let result = "";
  while (temp !== null) {
    result += temp.data + " ";
    temp = temp.next;
  }
  console.log(result);
}

// Create a linked list with
// values 5, 4, 3, 7, 9, and 2
let head = new Node(5);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(7);
head.next.next.next.next = new Node(9);
head.next.next.next.next.next = new Node(2);

// Print the original linked list
console.log("Original Linked List: ");
printLinkedList(head);

// Reverse the linked list
head = kReverse(head, 3);

// Print the reversed linked list
console.log("Reversed Linked List: ");
printLinkedList(head);

/**
 * Sure! Let's do a dry run of the `getKthNode` function to understand how it works. This function is designed to find the k-th node from the current node in a linked list. 

Here is the `getKthNode` function for reference:

```javascript
function getKthNode(temp, k) {
  k -= 1;
  while (temp !== null && k > 0) {
    k--;
    temp = temp.next;
  }
  // Return the Kth node
  return temp;
}
```

### Dry Run of `getKthNode`

Suppose we have a linked list and we want to find the k-th node. Here, we will use a linked list with values `5 -> 4 -> 3 -> 7 -> 9 -> 2`.

Let's go through an example call `getKthNode(head, 3)` step-by-step:

1. **Initialization:**
   - `temp` is pointing to the head of the list, which has the value `5`.
   - `k` is `3`.

2. **First Iteration:**
   - We decrement `k` by 1, so `k` becomes `2`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `4`.

3. **Second Iteration:**
   - We decrement `k` by 1, so `k` becomes `1`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `3`.

4. **Third Iteration:**
   - We decrement `k` by 1, so `k` becomes `0`.
   - We don't move `temp` to the next node because `k` is now `0`.

At this point, the loop condition `while (temp !== null && k > 0)` is no longer satisfied because `k` is `0`.

5. **Return:**
   - The function returns the current `temp`, which is pointing to the node with value `3`.

So, `getKthNode(head, 3)` returns the node with value `3`.

### Another Example

Let's try `getKthNode(head, 5)` step-by-step on the same list:

1. **Initialization:**
   - `temp` is pointing to the head of the list, which has the value `5`.
   - `k` is `5`.

2. **First Iteration:**
   - We decrement `k` by 1, so `k` becomes `4`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `4`.

3. **Second Iteration:**
   - We decrement `k` by 1, so `k` becomes `3`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `3`.

4. **Third Iteration:**
   - We decrement `k` by 1, so `k` becomes `2`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `7`.

5. **Fourth Iteration:**
   - We decrement `k` by 1, so `k` becomes `1`.
   - We move `temp` to the next node.
     - `temp` now points to the node with value `9`.

6. **Fifth Iteration:**
   - We decrement `k` by 1, so `k` becomes `0`.
   - We don't move `temp` to the next node because `k` is now `0`.

At this point, the loop condition `while (temp !== null && k > 0)` is no longer satisfied because `k` is `0`.

7. **Return:**
   - The function returns the current `temp`, which is pointing to the node with value `9`.

So, `getKthNode(head, 5)` returns the node with value `9`.

### Conclusion

The `getKthNode` function effectively traverses the linked list, moving `k-1` steps from the current node, and returns the node at that position. If there are fewer than `k` nodes from the current node, the function will return `null`. This function is useful in grouping nodes for reversal in the `kReverse` function.
 */

/** */