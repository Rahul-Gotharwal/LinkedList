// the error is showing because we do not give the next = null in the counstructor 
// the error message is 
/**    console.log(temp.data + " ");
                         ^

TypeError: Cannot read properties of undefined (reading 'data')
    at printLL */
// this is the updated code of take you forward
class Node {
    constructor(data, next = null) {
        // Data stored in the node
        this.data = data;   
        // Pointer to the next node in the list
        this.next = next;    
    }
}
function deleteMiddle(head){
    let temp = head;
    let n = 0 ;
    while(temp!==null){
        n++;
        temp = temp.next
    }
    let res = Math.floor(n/2);
    temp = head;
    while(temp!==null){
        res--;
        if(res===0){
            let middle = temp.next;
            temp.next = temp.next.next;
            break;
        }
        temp = temp.next
    }
    return head
}

function printLL(head) {
    let temp = head;
    while (temp !== null) {
        console.log(temp.data + " ");
        temp = temp.next;
    }
    console.log("\n");
}

// Creating a sample linked list
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Display the original linked list
console.log("Original Linked List: ");
printLL(head);

// Deleting the middle node
head  =deleteMiddle(head);

// Displaying the updated linked list
console.log("Updated Linked List: ");
printLL(head);


// this code we written bcz we find error in above code , but now it is OK
// class Node {
//     constructor(data, next = null) {
//         this.data = data;   
//         this.next = next;    
//     }
// }

// function deleteMiddle(head) {
//     let temp = head;
//     let n = 0;

//     // Count the number of nodes in the linked list
//     while (temp !== null) {
//         n++;
//         temp = temp.next;
//     }

//     // If the list is empty or has only one node, return null
//     if (n === 0 || n === 1) {
//         return null;
//     }

//     // Find the middle index
//     let middleIndex = Math.floor(n / 2);

//     // Traverse to the node just before the middle node
//     temp = head;
//     for (let i = 1; i < middleIndex ; i++) {
//         temp = temp.next;
//     }

//     // Remove the middle node
//     temp.next = temp.next.next;

//     return head;
// }

// function printLL(head) {
//     let temp = head;
//     while (temp !== null) {
//         process.stdout.write(temp.data + " ");
//         temp = temp.next;
//     }
//     console.log();
// }

// // Creating a sample linked list
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// // Display the original linked list
// console.log("Original Linked List: ");
// printLL(head);

// // Deleting the middle node
// head = deleteMiddle(head);

// // Displaying the updated linked list
// console.log("Updated Linked List: ");
// printLL(head);


//------------------Tortoise and Hare algorithm ---------------------//
// class Node {
//     constructor(data, next = null) {
//         // Data stored in the node
//         this.data = data;   
//         // Pointer to the next node in the list
//         this.next = next;    
//     }
// }
// function deleteMiddle(head){
//     if (head === null || head.next === null) {
//         return null;
//     }
//     let slow = head;
//     let fast = head;
//     fast = head.next.next;
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     slow.next = slow.next.next;
//     return head
// }
// function printLL(head) {
//     let temp = head;
//     while (temp !== null) {
//         process.stdout.write(temp.data + " ");
//         temp = temp.next;
//     }
//     console.log("\n");
// }

// // Creating a sample linked list
// let head = new Node(1);
// head.next = new Node(2);
// head.next.next = new Node(3);
// head.next.next.next = new Node(4);
// head.next.next.next.next = new Node(5);

// // Display the original linked list
// console.log("Original Linked List: ");
// printLL(head);

// // Deleting the middle node
// head = deleteMiddle(head);

// // Displaying the updated linked list
// console.log("Updated Linked List: ");
// printLL(head);