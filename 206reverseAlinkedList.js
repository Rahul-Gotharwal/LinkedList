// ----------Iterative Appraoch (Brute Force)--------------------//
// class Node {
//     constructor(data , next = null){
//         this.data = data;
//         this.next = next;
//     }
  
   
// }
// // Function to reverse the linked list using a stack
// function reverseLinkedList(head) {
//     // Create a temporary pointer to traverse the linked list
//     let temp = head;
//       // Create a stack to temporarily store the data values
//       let stack = [];
//       while(temp!==null)
//       {
//         stack.push(temp.data);
//         temp = temp.next
//       }
//        // Reset the temporary pointer to the head of the linked list
//     temp = head;
//       // Step 2: Pop values from the stack and update the linked list
//       while(temp!==null){
//         temp.data = stack.pop();
//         temp = temp.next
//       }
//       return head
// }
// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//     //https://www.geeksforgeeks.org/difference-between-process-stdout-write-and-console-log-in-node-js/
//       process.stdout.write(temp.data+" ")
//         temp = temp.next;
//     }
//     console.log();
// }
// let head = new Node(1);
// head.next = new Node(3);
// head.next.next = new Node(2);
// head.next.next.next = new Node(4);


// // Print the original linked list
// process.stdout.write("Original Linked List: ");
// printLinkedList(head);

// // Reverse the linked list
// head = reverseLinkedList(head);

// // Print the reversed linked list
// process.stdout.write("Reversed Linked List: ");
// printLinkedList(head);


//------------------Optimal way (reverse the linked list)----------------//


// class Node {
//     constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//     }
//   }
  
  function reverseLinkedList(head) {
      

      let temp = head;  
    
      let prev = null;  

      while (temp !== null) {  
          let front = temp.next;  
          
          // Reverse direction of current node's
          // 'next' pointer to point to 'prev'
          temp.next = prev;  
          
          // Move 'prev' to the current node,
          // preparing it for the next iteration
          prev = temp;
          
          // Move 'temp' to the 'front' node
          // (the next node), advancing traversal
          temp = front;  
      }
  
      // Return the new head of
      // the reversed linked list
      return prev;  
  }
  
//   // Function to print the linked list
//   function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//       process.stdout.write(temp.data + ' ');
//       temp = temp.next;
//     }
//     console.log();
//   }
  
//   // Create a linked list with
//   // values 1, 3, 2, and 4
//   const head = new Node(1);
//   head.next = new Node(3);
//   head.next.next = new Node(2);
//   head.next.next.next = new Node(4);
  
//   // Print the original linked list
//   process.stdout.write('Original Linked List: ');
//   printLinkedList(head);
//   // Reverse the linked list and update the head
//   // we should store it because we return prev so that is the new head so we want to print it 
//   const reversedHead = reverseLinkedList(head);

//   // Print the reversed linked list
//   process.stdout.write('Reversed Linked List: ');
//   printLinkedList(reversedHead);
  
  //--------------------------Recursive Appraoch--------------------//
  
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  function reverseLinkedList(head) {
    // Base case:
    if(head === null|| head.next === null) return head
    // array ki last value humara head bn jayegi
    var newHead = reverseLinkedList(head.next);
    var front = head.next; // head ka next part humara front hoga
    front.next = head;
    head.next = null;
    return newHead
    
  }
  // Function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.data + ' ');
      temp = temp.next;
    }
    console.log();
  }
  
  // Create a linked list with
  // values 1, 3, 2, and 4
  const head = new Node(1);
  head.next = new Node(3);
  head.next.next = new Node(2);
  head.next.next.next = new Node(4);
  
  // Print the original linked list
  process.stdout.write('Original Linked List: ');
  printLinkedList(head);
  
  // Reverse the linked list
  let reverselist = reverseLinkedList(head);
  
  // Print the reversed linked list
  process.stdout.write('Reversed Linked List: ');
  printLinkedList(reverselist);
  
