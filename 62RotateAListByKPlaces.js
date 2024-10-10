class Node {
  constructor(num) {
    this.num = num;
    this.next = null;
  }
}

// Utility function to insert node at the end of the list
function insertNode(head, val) {
  let newNode = new Node(val);
  if (head === null) {
    return newNode;
  }
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = newNode;
  return head;
}

// Utility function to rotate list by k times
function rotateRight(head, k) {
  if (head === null || head.next === null || k === 0) {
    return head;
  }

  // Calculating length
  let temp = head;
  let length = 1;
  while (temp.next !== null) {
    length++;
    temp = temp.next;
  }

  // Link last node to first node
  temp.next = head;
  k = k % length; // When k is more than length of list
  let end = length - k; // To get end of the list

  while (end--) { // when end get to the zero // means it becomes zero or falsy
    temp = temp.next;
  }

  // Breaking last node link and pointing to null
  head = temp.next;
  temp.next = null;

  return head;
}

// Utility function to print list
function printList(head) {
  let result = "";
  while (head.next !== null) {
    result += head.num + " -> ";
    head = head.next;
  }
  result += head.num;
  console.log(result);
}

// Main function
let head = null;

// Inserting Node
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);
head = insertNode(head, 5);

console.log("Original list:");
printList(head);

let k = 2;
let newHead = rotateRight(head, k); // Calling function for rotating right of the nodes by k times

console.log(`After ${k} iterations:`);
printList(newHead); // List after rotating nodes
