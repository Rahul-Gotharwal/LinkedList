// //--------------------Brute Force Code(BY - Looping)---------------//
// class Node {
//     constructor(val) {
//       this.num = val;
//       this.next = null;
//     }
//   }

//   // Utility function to insert node at the end of the linked list
//   function insertNode(head, val) {
//     let newNode = new Node(val);
//     if (head === null) {
//       head = newNode;
//       return head;
//     }
//     let temp = head;
//     while (temp.next !== null) {
//       temp = temp.next;
//     }
//     temp.next = newNode;
//     return head;
//   }

//   // Utility function to check presence of intersection
//   function intersectionPresent(head1, head2) {
//     let temp2 = head2;
//     while (temp2 !== null) {
//       let temp1 = head1;
//       while (temp1 !== null) {
//         // if both nodes are the same
//         if (temp1 === temp2) {
//           return temp2; // we can return temp1 also
//         }
//         temp1 = temp1.next;
//       }
//       temp2 = temp2.next;
//     }
//     // Intersection is not present between the lists; return null
//     return null;
//   }

//   // Utility function to print linked list created
//   function printList(head) {
//     let result = [];
//     while (head !== null) {
//       result.push(head.num);
//       head = head.next;
//     }
//     console.log(result.join('->'));
//   }

// // Main function
// (function main() {
//     // Creation of both lists
//   //Note -> image for the visualization https://assets.leetcode.com/uploads/2021/03/05/160_example_2.png
//     // initially head is calling with null or with value 3 then result come and store in the   head = insertNode(head, 1); ,now 1 is insrted then head is again call with head = insertNode(head, 3); here head's value is 1 and 3 is the val , now the list is like 1->3
//     let head = null;
//     head = insertNode(head, 1); // 1
//     head = insertNode(head, 9); // 1 -> 3
//     head = insertNode(head, 1); // 1 -> 3 -> 1
//     head = insertNode(head, 2); // 1 -> 3 -> 1 -> 2
//     head = insertNode(head, 4); // 1 -> 3 -> 1 -> 2 -> 4
//     let head1 = head; // head1 points to 1 -> 3 -> 1 -> 2 -> 4
//     head = head.next.next.next; // Moves head to point to 2 -> 4
//     let headSec = null;
//     headSec = insertNode(headSec, 3); // 3
//     let head2 = headSec; // head2 points to 3
//     headSec.next = head; // 3 -> 2 -> 4
//     // head is updated with 2->4  // 3 ka next part humara 2->4 pe point krega like 3->2->4

//     // Printing of the lists
//     console.log("List1:");
//     printList(head1);
//     console.log("List2:");
//     printList(head2);

//     // Checking if intersection is present
//     let answerNode = intersectionPresent(head1, head2);
//     if (answerNode == null) {
//       console.log("No intersection");
//     } else {
//       console.log("The intersection point is " + answerNode.num);
//     }
// })();

//---------------------------Using Hashing-------------------------//
// class Node {
//   constructor(val) {
//     this.num = val;
//     this.next = null;
//   }
// }

// // Utility function to insert node at the end of the linked list
// function insertNode(head, val) {
//   let newNode = new Node(val);
//   if (head === null) {
//     head = newNode;
//     return head;
//   }
//   let temp = head;
//   while (temp.next !== null) {
//     temp = temp.next;
//   }
//   temp.next = newNode;
//   return head;
// }

// // Utility function to check presence of intersection
// //Hash Set for Intersection Detection:
// function intersectionPresent(head1, head2) {
//   let nodeSet = new Set();
//   let temp1 = head1;
//   // Add all nodes from the first list to the set
//   while(temp1!==null){
//     nodeSet.add(temp1);
//     temp1 = temp1.next;
//   }

//     // Check if any node from the second list is in the set
//    let temp2 = head2;
//    while(temp2!==null){
//     if(nodeSet.has(temp2)){
//         return temp2
//     }
//     temp2 = temp2.next
//    }
//    return null
// }
// // Utility function to print linked list
// function printList(head) {
//     let result = [];
//     let temp = head;
//     while (temp !== null) {
//       result.push(temp.num);
//       temp = temp.next;
//     }
//     console.log(result.join(' -> '));
//   }
  
//   // Main function
//   (function main() {
//     // Creation of both lists
//     let head = null;
//     head = insertNode(head, 1); // 1
//     head = insertNode(head, 3); // 1 -> 3
//     head = insertNode(head, 1); // 1 -> 3 -> 1
//     head = insertNode(head, 2); // 1 -> 3 -> 1 -> 2
//     head = insertNode(head, 4); // 1 -> 3 -> 1 -> 2 -> 4
//     let head1 = head; // head1 points to 1 -> 3 -> 1 -> 2 -> 4
  
//     // Set head to the node starting with value 2
//     head = head.next.next.next; // head points to 2 -> 4
  
//     let headSec = null;
//     headSec = insertNode(headSec, 3); // 3
//     let head2 = headSec; // head2 points to 3
//     headSec.next = head; // 3 -> 2 -> 4
  
//     // Printing of the lists
//     console.log("List1:");
//     printList(head1);
//     console.log("List2:");
//     printList(head2);
  
//     // Checking if intersection is present
//     let answerNode = intersectionPresent(head1, head2);
//     if (answerNode === null) {
//       console.log("No intersection");
//     } else {
//       console.log("The intersection point is " + answerNode.num);
//     }
//   })();


//-----------------By calculating the length----------------//
//   class Node {
//     constructor(val) {
//       this.num = val;
//       this.next = null;
//     }
//   }
  
//   // Utility function to insert node at the end of the linked list
//   function insertNode(head, val) {
//     let newNode = new Node(val);
//     if (head === null) {
//       head = newNode;
//       return head;
//     }
//     let temp = head;
//     while (temp.next !== null) {
//       temp = temp.next;
//     }
//     temp.next = newNode;
//     return head;
//   }

//   // Utility function to get the difference in lengths between two linked lists
// function getDifference(head1, head2) {
//     let len1 = 0, len2 = 0;
//     let temp1 = head1;
//     let temp2 = head2;
    
//     while (temp1 !== null || temp2 !== null) {
//       if (temp1 !== null) {
//         len1++;
//         temp1 = temp1.next;
//       }
//       if (temp2 !== null) {
//         len2++;
//         temp2 = temp2.next;
//       }
//     }
    
//     return len1 - len2;
//   }
  
// // Utility function to check presence of intersection
// function intersectionPresent(head1, head2){
//     let diff = getDifference(head1 ,head2);
//     if(diff<0){
//         while(diff++ !==0){
//             head2 = head2.next
//         }
//     }else{
//         while(diff-- !==0){
//             head1 = head1.next
//         }
//     }

//     while(head1!==null){
//           if(head1 === head2){
//             return head1
//           }
//           head1 = head1.next;
//           head2 = head2.next;
//     }
//     return null

// }
//   // Utility function to print linked list
// function printList(head) {
//     let result = [];
//     let temp = head;
//     while (temp !== null) {
//       result.push(temp.num);
//       temp = temp.next;
//     }
//     console.log(result.join(' -> '));
//   }
  
//   // Main function
//   (function main() {
//     // Creation of both lists
//     let head = null;
//     head = insertNode(head, 1); // 1
//     head = insertNode(head, 3); // 1 -> 3
//     head = insertNode(head, 1); // 1 -> 3 -> 1
//     head = insertNode(head, 2); // 1 -> 3 -> 1 -> 2
//     head = insertNode(head, 4); // 1 -> 3 -> 1 -> 2 -> 4
//     let head1 = head; // head1 points to 1 -> 3 -> 1 -> 2 -> 4
    
//     // Set head to the node starting with value 2
//     head = head.next.next.next; // head points to 2 -> 4
    
//     let headSec = null;
//     headSec = insertNode(headSec, 3); // 3
//     let head2 = headSec; // head2 points to 3
//     headSec.next = head; // 3 -> 2 -> 4
    
//     // Printing of the lists
//     console.log("List1:");
//     printList(head1);
//     console.log("List2:");
//     printList(head2);
    
//     // Checking if intersection is present
//     let answerNode = intersectionPresent(head1, head2);
//     if (answerNode === null) {
//       console.log("No intersection");
//     } else {
//       console.log("The intersection point is " + answerNode.num);
//     }
//   })();

  //--------------------Most Optimal apparaoch----------------//
  class Node {
    constructor(val) {
      this.num = val;
      this.next = null;
    }
  }
  
  // Utility function to insert node at the end of the linked list
  function insertNode(head, val) {
    let newNode = new Node(val);
    if (head === null) {
      head = newNode;
      return head;
    }
    let temp = head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = newNode;
    return head;
  }
  // Utility function to check presence of intersection
  function intersectionPresent(head1 , head2){
    let temp1 = head1;
    let temp2 = head2;
    while(temp1!==temp2){
        // temp1 agar null ho jata he to head2 pe point krega nhi to temp1.next pe move karta rhega
         temp1 = temp1===null ? head2:temp1.next;
         temp2 = temp2 === null? head1 : temp2.next
    }
    return temp1
  }
 // Utility function to print linked list
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.num);
    if (head.next !== null) {
      result.push('->');
    }
    head = head.next;
  }
  console.log(result.join(''));
}

// Main function
(function main() {
  // Creation of both lists
  let head = null;
  head = insertNode(head, 1); // 1
  head = insertNode(head, 3); // 1 -> 3
  head = insertNode(head, 1); // 1 -> 3 -> 1
  head = insertNode(head, 2); // 1 -> 3 -> 1 -> 2
  head = insertNode(head, 4); // 1 -> 3 -> 1 -> 2 -> 4
  let head1 = head; // head1 points to 1 -> 3 -> 1 -> 2 -> 4
  
  // Set head to the node starting with value 2
  head = head.next.next.next; // head points to 2 -> 4
  
  let headSec = null;
  headSec = insertNode(headSec, 3); // 3
  let head2 = headSec; // head2 points to 3
  headSec.next = head; // 3 -> 2 -> 4
  
  // Printing of the lists
  console.log("List1:");
  printList(head1);
  console.log("List2:");
  printList(head2);
  
  // Checking if intersection is present
  let answerNode = intersectionPresent(head1, head2);
  if (answerNode === null) {
    console.log("No intersection");
  } else {
    console.log("The intersection point is " + answerNode.num);
  }
})();