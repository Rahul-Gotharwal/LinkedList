// class Node {
//     constructor(data, next = null) {
//       // Data stored in the node
//       this.data = data;     
//        // Pointer to the next node in the list
//       this.next = next;    
//     }
//   }
//   function detectLoop(head){
//     let temp = head;
//     const nodeMap = new Map();
//     while(temp!==null){
//         if(nodeMap.has(temp)){
//             return temp
//         }
//         nodeMap.set(temp,true);
//         temp = temp.next
//     }
//     return null;

//   }
//   const node1 = new Node(1);
// const node2 = new Node(2);
// node1.next = node2;
// const node3 = new Node(3);
// node2.next = node3;
// const node4 = new Node(4);
// node3.next = node4;
// const node5 = new Node(5);
// node4.next = node5;

// // Make a loop from node5 to node2
// node5.next = node2;

// // Set the head of the linked list
// const head = node1;

// // Detect the loop in the linked list
// const loopStartNode = detectLoop(head);

// if (loopStartNode) {
//   console.log("Loop detected. Starting node of the loop is: " + loopStartNode.data);
// } else {
//   console.log("No loop detected in the linked list.");
// }

// -------------------Using Tortoise and Hare algo---------------//
class Node {
    constructor(data, next = null) {
      // Data stored in the node
      this.data = data; 
      // Pointer to the next node in the list
      this.next = next;      
    }
  }
  function firstNode(head){
    let slow = head;
    let fast = head;

    // Phase 1: Detect the loop
    while (fast !== null && fast.next !== null) {
        // Move slow one step
        slow = slow.next;
        // Move fast two steps
        fast = fast.next.next;

        // If slow and fast meet,
        // a loop is detected
        if (slow === fast) {
            // Reset the slow pointer
            // to the head of the list
            slow = head;

            // Phase 2: Find the first
            // node of the loop
            while (slow !== fast) {
                // Move slow and fast
                // one step at a time
                slow = slow.next;
                fast = fast.next;

                // When slow and fast meet again,
                 // it's the first node of the loop
            }

            // Return the first node of the loop
            return slow;
        }
    }

    // If no loop is found, return null
    return null;
}

  const node1 = new Node(1);
const node2 = new Node(2);
node1.next = node2;
const node3 = new Node(3);
node2.next = node3;
const node4 = new Node(4);
node3.next = node4;
const node5 = new Node(5);
node4.next = node5;

// Make a loop from node5 to node2
node5.next = node2;

// Set the head of the linked list
const head = node1;

// Detect the loop in the linked list
const loopStartNode = firstNode(head);

if (loopStartNode) {
  console.log("Loop detected. Starting node of the loop is: " + loopStartNode.data);
} else {
  console.log("No loop detected in the linked list.");
}