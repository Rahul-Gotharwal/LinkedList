class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null;
  }
  let head = new Node(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

function traverseLinkedList(head) {
  let current = head;
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}
// insert at the first
function insertHead(head, val) {
  let temp = new Node(val, head);
  // this is like val => is the data part according to the counstrutor class
  // or the head is the next part so now temp become the new head
  return temp;
}
// insert at the last
function InsertLast(head, val) {
  if (head === null) {
    return new Node(val);
  }
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  // let newNode = new Node(val , null)
  let newNode = new Node(val);
  temp.next = newNode;
  return head;
}

// insert at the given kth element
function InsertAtKthPosition(head, el, k) {
  if (head === null) {
    if (k == 1) {
      return new Node(el);
    } else {
      throw new console.error("can't create the node");
    }
  }
  if (k == 1) {
    return new Node(el, head);
  }
  let count = 0;
  let temp = head;
  while (temp !== null) {
    count++;
    if (count ===( k - 1 )) {
      let x = new Node(el, temp.next);
      //x.next = temp.next
      // ab bew bond temp.next ka x k sath bn gya he
      temp.next = x;
      break;
    }
    temp = temp.next;
  }
  return head;
}
// insert  the element before the value x

function insertBeforeTheValue(head , el , val){
if(head === null){
    return null
}
if(head.data === val){
    return new Node(el , head)
}
let temp = head;
while(temp.next!==null){
    if(temp.next.data === val){
        let x = new Node(el, temp.next);
        temp.next = x;
        break
    }
    temp = temp.next
}
return head
}

const arr = [2, 4, 6, 8, 10];
let head = arrayToLinkedList(arr); // `head` now stores the reference to the first node of the linked list
traverseLinkedList(head);
// console.log("After Inserting The Head")
// head = insertHead(head, 100); // Insert 100 at the head of the linked list
// traverseLinkedList(head); // Traverse the updated linked list
// console.log("After Inserting The Tail")
// head = InsertLast(head , 50);
// traverseLinkedList(head)
// console.log("Element After Inseting At The Kth Position");
// head = InsertAtKthPosition(head, 87, 3);
// traverseLinkedList(head); 
console.log("Element After Inseting At The Kth Position"); 
insertBeforeTheValue(head ,45 , 8);
traverseLinkedList(head)