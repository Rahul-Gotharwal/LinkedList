// Node class represents a node
// in a linked list
// class Node {
//     constructor(data, next = null) {
//         // Data stored in the node
//         this.data = data;   
//         // Pointer to the next node in the list
//         this.next = next;    
//     }
// }
// // Function to find the middle
// // node of a linked list
// function findMiddle(head){
//     if(head === null || head.next === null){
//         return head
//     }
//     let temp = head;
//     let count = 0 ;
//     while(temp!==null){
//         count++;
//         temp = temp.next
//     }
//     let  mid = Math.floor(count/2) +1 ;
//     temp = head
//     while(temp!==null){
//         // everytime mid wiil minus and reach to the 0
//         mid--;
//         if(mid === 0){
//             break
//         }
//         temp = temp.next
//     }
//     return temp;
// }
// // Creating a sample linked list: 
// const head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// // Find the middle node
// const middleNode = findMiddle(head); // this is return third node only

// // Display the value of the middle node
// console.log("The middle node value is: " + middleNode.data);


//------------------Optimal Appraoch-------------------//
class Node {
    constructor(data, next) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}
function findMiddle(head){
    let slow = head;
    let fast = head;
    while(fast && fast.next && slow){
        fast = fast.next.next;
        slow = slow.next
    }
    return slow
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Find the middle node
const middleNode = findMiddle(head); // this is return third node only

// Display the value of the middle node
console.log("The middle node value is: " + middleNode.data);