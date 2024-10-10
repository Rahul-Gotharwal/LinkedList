                            
// // Node class represents a
// // node in a linked list
// class Node {
//     constructor(data, next = null) {
//         // Data stored in the node
//         this.data = data;
//         // Pointer to the next node in the list
//         this.next = next;
//     }
// }

// // Function to sort a linked list
// // using Brute Force approach
// function sortLL(head) {
//     // Create an array to
//     // store node values
//     let arr = [];
    
//     // Temporary pointer to
//     // traverse the linked list
//     let temp = head;
    
//     // Traverse the linked list and
//     // store node values in the array
//     while (temp !== null) {
//         arr.push(temp.data);
//         temp = temp.next;
//     }
    
//     // Sort the array
//     // containing node values
//     arr.sort((a, b) => a - b);
    
//     // Reassign sorted values to
//     // the linked list nodes
//     temp = head;
//     for (let i = 0; i < arr.length; i++) {
//         // Update the node's data
//         // with the sorted values
//         temp.data = arr[i]; 
//         // Move to the next node
//         temp = temp.next; 
//     }
    
//     // Return the head of the
//     // sorted linked list
//     return head; 
// }

// // Function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//         // Print the data of the current node
//         console.log(temp.data + " "); 
//         // Move to the next node
//         temp = temp.next; 
//     }
//     console.log();
// }

// // Linked List: 3 2 5 4 1
// let head = new Node(3);
// head.next = new Node(2);
// head.next.next = new Node(5);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(1);

// console.log("Original Linked List: ");
// printLinkedList(head);

// // Sort the linked list
// head = sortLL(head);

// console.log("Sorted Linked List: ");
// printLinkedList(head);


// -----------------Optimal Appraoch ------------------//
class Node {
    constructor(data, nextNode = null) {
        this.data = data;
        this.next = nextNode;
    }
}
function mergeTwoSortedLinkedLists(list1 , list2){
    let dummyNode = new Node(-1);
    let temp = dummyNode;
    while(list1!==null && list2!==null){
        if(list1.data<=list2.data){
            temp.next = list1;
            list1 = list1.next
        }
        else{
            temp.next = list2;
            list2 = list2.next
        }
        temp = temp.next
    }
    if(list1!==null){
        temp.next = list1;
    }
    else{
        temp.next = list2
    }
    return dummyNode.next;
}
function findMiddle(head){
    if(head !==null || head.next === null) return head;
    let slow = head;
    let fast = head.next 
    while(fast!==null && fast.next!==null){
        slow = slow.next;
        fast = fast.next.next
    }
    return slow
}

function sortLL(head){
    if(head === null || head.next === null) return head;
    let middle = findMiddle(head);
    let right = middle.next;
    middle.next = null;
    let left = head;
    left = sortLL(left);
    right = sortLL(right);
    return mergeTwoSortedLinkedLists(left , right)
}
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        // Print the data of the current node
        console.log(temp.data + " ");
        // Move to the next node
        temp = temp.next;
    }
    console.log("\n");
}

// Creating and sorting the linked list in JavaScript
let head = new Node(3);
head.next = new Node(2);
head.next.next = new Node(5);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(1);

console.log("Original Linked List: ");
printLinkedList(head);

// Sort the linked list
head = sortLL(head);

console.log("Sorted Linked List: ");
printLinkedList(head);