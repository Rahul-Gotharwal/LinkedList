//---------------------Brute force appraoch--------------------//
// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// function ispalindrome(head) {
//   const stack = [];
//   let temp = head;
//   while (temp !== null) {
//     stack.push(temp.data);
//     temp = temp.next;
//   }
//   temp = head;
//   // Compare values by popping from the stack
//   while (temp !== null) {
//     if (temp.data !== stack.pop()) {
//       return false;
//     }
//     temp = temp.next;
//   }
//   return true;
// }
// // Function to print the linked list
// function printLinkedList(head) {
//   let temp = head;
//   while (temp !== null) {
//     console.log(temp.data + " ");
//     temp = temp.next;
//   }
//   console.log();
// }

// // Main function
// function main() {
//   // Create a linked list with values
//   // 1, 5, 2, 5, and 1 (15251, a palindrome)
//   const head = new Node(1);
//   head.next = new Node(5);
//   head.next.next = new Node(2);
//   head.next.next.next = new Node(5);
//   head.next.next.next.next = new Node(1);

//   // Print the original linked list
//   console.log("Original Linked List: ");
//   printLinkedList(head);

//   // Check if the linked list is a palindrome
//   if (ispalindrome(head)) {
//     console.log("The linked list is a palindrome.");
//   } else {
//     console.log("The linked list is not a palindrome.");
//   }
// }

// // Call the main function to start the program
// main();

//-----------------------OPtimal appraoch------------------//

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// // Function to reverse a linked list
// // using the recursive approach
// function reverseLinkedList(head) {
//   let temp = head;
//   let prev = null;
//   while (temp !== null) {
//     let front = temp.next;
//     temp.next = prev;
//     prev = temp;
//     temp = front;
//   }
//   return prev;
// }

// // Function to check if a linked list
// // is a palindrome
// function isPalindrome(head) {
//   // Check if the linked list is empty
//   // or has only one node
//   if (head === null || head.next === null) {
//     // It's a palindrome by definition
//     return true;
//   }

//   let slow = head;
//   let fast = head;
//   // Traverse the linked list to find
//   // the middle using slow and fast pointers
//   while (fast.next !== null && fast.next.next !== null) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   const newHead = reverseLinkedList(slow.next);
//   // Pointer to the first half
//   let first = head;

//   // Pointer to the reversed second half
//   let second = newHead;
//   while (second !== null) {
//     // Compare data values of nodes from both halves
//     if (first.data !== second.data) {
//       // Reverse the second half
//       // back to its original state
//       reverseLinkedList(newHead);
//       // Not a palindrome
//       return false;
//     }
//     // Move the first pointer
//     first = first.next;
//     // Move the second pointer
//     second = second.next; 
//   }
//   // Reverse the second half
//   // back to its original state
//   reverseLinkedList(newHead);

//   // The linked list is a palindrome
//   return true;
// }
// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//         console.log(temp.data + " ");
//         temp = temp.next;
//     }
//     console.log();
// }

// // Main function
// function main() {
//     // Create a linked list with values
//     // 1, 5, 2, 5, and 1 (15251, a palindrome)
//     const head = new Node(1);
//     head.next = new Node(5);
//     head.next.next = new Node(2);
//     head.next.next.next = new Node(5 );
//     head.next.next.next.next = new Node(1);

//     // Print the original linked list
//     console.log("Original Linked List: ");
//     printLinkedList(head);

//     // Check if the linked list is a palindrome
//     if (isPalindrome(head)) {
//         console.log("The linked list is a palindrome.");
//     } else {
//         console.log("The linked list is not a palindrome.");
//     }
// }

// // Call the main function to start the program
// main();

///------------------------Correct coec for the leetcode bcz second test case s not pass-----------------//
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // Function to reverse a linked list
  function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  
  // Function to check if a linked list is a palindrome
  function isPalindrome(head) {
    if (head === null || head.next === null) {
      return true;
    }
  
    // Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }
  
    // Reverse the second half of the linked list
    let secondHalf = reverseLinkedList(slow);
    let firstHalf = head;
  
    // Compare the first and second halves
    while (secondHalf !== null) {
      if (firstHalf.val !== secondHalf.val) {
        return false;
      }
      firstHalf = firstHalf.next;
      secondHalf = secondHalf.next;
    }
  
    return true;
  }
  
  // Function to print the linked list (for debugging)
  function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
      process.stdout.write(temp.val + ' ');
      temp = temp.next;
    }
    console.log();
  }
  
  // Main function to test the palindrome check
  function main() {
    // Create a linked list: 1 -> 2 -> 2 -> 1
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(2);
    head.next.next.next = new ListNode(1);
  
    // Print the original linked list
    process.stdout.write('Original Linked List: ');
    printLinkedList(head);
  
    // Check if the linked list is a palindrome
    const result = isPalindrome(head);
    console.log(`Is the linked list a palindrome? ${result}`);
  }
  
  // Call the main function to test
  main();
  