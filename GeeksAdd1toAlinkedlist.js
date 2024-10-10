//----------------Brute Appraoch----------------------//
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function reverse(head){
//     let prev = null;
//     let current = head;
//     while(current){
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode
//     }
//     return prev;
// }
// // Main function to add one to the linked list
// function addOne(head){
//     head = reverse(head);
//     let carry = 1;
//     let temp  = head;
//     let prev = null;
//     while(temp){
//         let sum = temp.val+carry;
//         carry = Math.floor(sum/10);
//         temp.val = sum%10;
//         temp = temp.next
//     }
//     if(carry>0){
//         prev.next = new ListNode(carry)
//     }
//     return reverse(head)
// }
// let head = new ListNode(1, new ListNode(5, new ListNode(9)));
// head = addOne(head);

// // Print result
// let result = [];
// while (head) {
//     result.push(head.val);
//     head = head.next;
// }
// console.log(result); // Output: [1, 6, 0]

//--------------------------Recursive Appraoch--------------------------//
// Node class definition
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
// Recursive helper function
function addOne(node) {
  if (!node) return 1;
  let carry = addOne(node.next);// it will return at the last 1 , when it is go throuh the all the lists
  let sum = node.val + carry;
  node.val = sum%10;
  return Math.floor(sum/10) // puri calculation krne k baad recursion ki ye last me zero return kar dega jisko niche wala function as as carry ad kar dega as a newnode 
}
// Main function to add one to the linked list
function addOneRecursive(head){
    let carry = addOne(head);
    // hum extra node tbhi create krenge jab carry>0 ho otherwise hum direcly bhi return head kar skte he
    if(carry>0){
        let newNode = new ListNode(carry);
        newNode.next = head;
        head  = newNode
    }
    return head //yha se hum head ko return krenge agar carry bda hoga 0 se to carry ki node create krje nhi to vese hi mtlb simple list
}
// Example usage
let headRecursive = new ListNode(1, new ListNode(5, new ListNode(9)));
headRecursive = addOneRecursive(headRecursive);

// Print result
let resultRecursive = [];
while (headRecursive) {
    resultRecursive.push(headRecursive.val);
    headRecursive = headRecursive.next;
}
console.log(resultRecursive); // Output: [1, 6, 0]