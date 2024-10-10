// //---------------Brute Force Approach------------------//
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// function mergeTwoLists(head1 , head2){
// let array = [];
// let temp1 = head1;
// let temp2 = head2;
// // Traverse the first list and add its elements to the array
// while(temp1!==null){
//     array.push(temp1.val);
//     temp1 = temp1.next
// }
//  // Traverse the second list and add its elements to the array
//  while (temp2 !== null) {
//     array.push(temp2.val);
//     temp2 = temp2.next;
// }
// array.sort((a,b)=>a-b);
// let dummyNode = new ListNode(-1);
// let temp= dummyNode;
// for(let val of array){
//     temp.next = new ListNode(val);
//     temp = temp.next
// }
// return dummyNode.next
// }
// // Helper function to create a linked list from an array
// function createLinkedList(arr){
//     if(arr.length === 0) return null;
//     let head = new ListNode(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         current.next = new ListNode(arr[i]);
//         current = current.next;
//     }
//    return head
// }
// // Helper function to print the linked list
// function printLinkedList(head) {
//     let current = head;
//     let result = [];
//     while (current !== null) {
//         result.push(current.val);
//         current = current.next;
//     }
//     console.log(result.join(" -> "));
// }

// // Example usage
// let l1 = createLinkedList([2, 4, 8, 10]);
// let l2 = createLinkedList([1, 3, 3, 6, 11, 14]);

// let mergedListInitial = mergeTwoLists(l1, l2); // let head = 
// printLinkedList(mergedListInitial); 

//----------------------OPtimal Appraoch ---------------------//
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(head1, head2) {
    let dummyNode = new ListNode(-1);
    let temp = dummyNode;

    let t1 = head1;
    let t2 = head2;

    while (t1 !== null && t2 !== null) {
        if (t1.val <= t2.val) {
            temp.next = t1;
            t1 = t1.next;
        } else {
            temp.next = t2;
            t2 = t2.next;
        }
        temp = temp.next;
    }

    if (t1 !== null) {
        temp.next = t1;
    } else {
        temp.next = t2;
    }

    return dummyNode.next;
}


function createLinkedList(arr){
    if(arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
   return head
}
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}
let l1 = createLinkedList([2, 4, 8, 10]);
let l2 = createLinkedList([1, 3, 3, 6, 11, 14]);
let mergedListOptimized = mergeTwoLists(l1, l2);
printLinkedList(mergedListOptimized); 