// --------Brute force solution --------------------//
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null
//     }
// }
// function sortLinkedList(head){
//     if(!head || !head.next) return head;
//     let count0 = 0 , count1= 0 , count2 =0 ;
//     let temp= head;
//     // Count the number of 0s, 1s, and 2s
//     while(temp!==null){
//         if(temp.value === 0 )count0++
//         else if(temp.value ===1) count1++;
//         else count2++
//         temp = temp.next
//     }

//     // Replace values in the linked list based on counts
//     temp = head;
//     while(temp!==null){
//         if(count0>0){
//             temp.value = 0;
//             count0--
//         }
//         else if(count1>0){
//             temp.value = 1;
//             count1--
//         }
//         else{
//             temp.value = 2 ;
//             count2--
//         }
//         temp = temp.next
//     }
//     return head
// }

// // Helper function to print the linked list
// function printLinkedList(head) {
//     let temp = head;
//     while (temp !== null) {
//         process.stdout.write(temp.value + " -> ");
//         temp = temp.next;
//     }
//     console.log("null");
// }

// // Create linked list: 0 -> 1 -> 2 -> 1 -> 2 -> 0 -> 1
// let head = new Node(0);
// head.next = new Node(1);
// head.next.next = new Node(2);
// head.next.next.next = new Node(1);
// head.next.next.next.next = new Node(2);
// head.next.next.next.next.next = new Node(0);
// head.next.next.next.next.next.next = new Node(1);

// console.log("Original Linked List:");
// printLinkedList(head);

// // Sort using brute force approach
// let sortedHeadBruteForce = sortLinkedList(head);
// console.log("Sorted Linked List (Brute Force):");
// printLinkedList(sortedHeadBruteForce);


//-------------------optimal approach----------------//
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
function sortLinkedList(head){
    if (!head || !head.next) {
        return head;
    }
    let zeroDummy = new Node(-1) , oneDummy = new Node(-1) , twoDummy = new Node(-1);
    let zero = zeroDummy , one = oneDummy , two = twoDummy;
    let temp = head;
    //  // Traverse and segregate nodes
    while(temp!==null){
        if(temp.value === 0){
            zero.next = temp;
            zero = zero.next
        }
        else if (temp.value ===1){
            one.next = temp;
            one = one.next
        }
        else{
            two.next = temp;
            two = two.next
        }
        temp = temp.next
    }
    // Connect the three lists
    zero.next = (oneDummy.next!==null)?oneDummy.next:twoDummy.next;
    one.next = twoDummy.next;
    two.next = null;
    return zeroDummy.next
}
// Helper function to print the linked list
function printLinkedList(head) {
    let temp = head;
    while (temp !== null) {
        process.stdout.write(temp.value + " -> ");
        temp = temp.next;
    }
    console.log("null");
}
// Create the same linked list again for the optimized approach
head = new Node(0);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(1);
head.next.next.next.next = new Node(2);
head.next.next.next.next.next = new Node(0);
head.next.next.next.next.next.next = new Node(1);

// Sort using optimized approach
let sortedHeadOptimized = sortLinkedList(head);
console.log("Sorted Linked List (Optimized):");
printLinkedList(sortedHeadOptimized);