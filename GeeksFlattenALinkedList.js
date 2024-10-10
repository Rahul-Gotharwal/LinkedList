// class Node {
//   constructor(x = null, nextNode = null, childNode = null) {
//     this.data = x;
//     this.next = nextNode;
//     this.child = childNode;
//   }
// }
// /**
//  *  the convertArrToLinkedList function, we use temp.child instead of temp.next because the linked list structure we are dealing with has nodes connected through the child pointer rather than the next pointer. 
//  * This matches the structure of the linked list we are working with, where each node's child nodes are linked via the child pointer.
//  */
// // we are going to move to the childNode not to the nextnode
// function convertArrToLinkedList(arr) {
//   let dummyNode = new Node(-1);
//   let temp = dummyNode;
//   for (let val of arr) {
//     temp.child = new Node(val);
//     temp = temp.child;
//   }
//   return dummyNode.child;
// }

// function flattenLinkedList(head) {
//   let arr = [];
//   while (head) {
//     // Traverse through the child
//     // nodes of each head node
//     let t2 = head;
//     while (t2) {
//       arr.push(t2.data);
//       t2 = t2.child;
//     }
//     head = head.next;
//   }
//   arr.sort((a, b) => a - b);
//   return convertArrToLinkedList(arr);
// }
// function printLinkedList(head) {
//   while (head) {
//     console.log(head.data + " ");
//     head = head.child;
//   }
// }

// // Create a linked list with child pointers
// // hmesha ek new node create kar rhe he or head k sath child node ko attach kar rhe he
// let head = new Node(5);
// head.child = new Node(14);

// head.next = new Node(10); // next wala head is 10 or uska child node he 4
// head.next.child = new Node(4);

// head.next.next = new Node(12);
// head.next.next.child = new Node(20);
// head.next.next.child.child = new Node(13);

// head.next.next.next = new Node(7);
// head.next.next.next.child = new Node(17);
// // Flatten the linked list
// // and print the flattened list
// let flattened = flattenLinkedList(head);
// /**
//  * this will inside the head when the function calls 
//  * 5 -> 10 -> 12 -> 7
//    |    |     |
//    14    4    20
//               |
//               13
//               |
//              17

//  */
// console.log("\nFlattened linked list: ");
// printLinkedList(flattened);


//----------------Optimal Appraoch--------------------//
class Node {
  constructor(x = null, nextNode = null, childNode = null) {
    this.data = x;
    this.next = nextNode;
    this.child = childNode;
  }
}

function merge(list1 , list2){
  let dummyNode = new Node(-1);
  let res  = dummyNode;
  while (list1 !== null && list2 !== null) {
    if (list1.data < list2.data) {
      res.child = list1;
      res = list1;
      list1 = list1.child;
    } else {
      res.child = list2;
      res = list2;
      list2 = list2.child;
    }
  }

  // Attach the remaining part of the list that is not null
  if (list1 !== null) {
    res.child = list1;
  } else {
    res.child = list2;
  }

  return dummyNode.child;
}


function flattenLinkedList(head){
  if(head === null || head.next === null) return head; // base case
  let mergeHead = flattenLinkedList(head.next);
  head.next = null
  head = merge(head , mergeHead);
  return head
}
function printLinkedList(head) {
  while (head !== null) {
      console.log(head.data + " ");
      head = head.child;
  }
  console.log();
}

let head = new Node(5);
head.child = new Node(14);
head.next = new Node(10);
head.next.child = new Node(4);
head.next.next = new Node(12);
head.next.next.child = new Node(20);
head.next.next.child.child = new Node(13);
head.next.next.next = new Node(7);
head.next.next.next.child = new Node(17);


// Flatten the linked list
// and print the flattened list
let flattened = flattenLinkedList(head);
console.log("\nFlattened linked list: ");
printLinkedList(flattened);