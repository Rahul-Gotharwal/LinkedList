// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//         this.prev = null;
//     }
// }

// class Solution {
//     deleteAllOccurOfX(head, key) {
//         let temp = head;

//         while (temp !== null) {
//             if (temp.value === key) {
//                 if (temp === head) {
//                     head = head.next;
//                     if (head !== null) {
//                         head.prev = null;
//                     }
//                 } else {
//                     let nextNode = temp.next;
//                     let prevNode = temp.prev;

//                     if (nextNode !== null) {
//                         nextNode.prev = prevNode;
//                     }

//                     if (prevNode !== null) {
//                         prevNode.next = nextNode;
//                     }
//                 }

//                 // Move temp to the next node after deletion
//                 temp = temp.next;
//             } else {
//                 // Move temp to the next node if no deletion
//                 temp = temp.next;
//             }
//         }

//         return head;
//     }
// }

// // Helper functions for testing
// function printList(head) {
//     let result = [];
//     while (head !== null) {
//         result.push(head.value);
//         head = head.next;
//     }
//     console.log(result.join(" <-> "));
// }

// function createLinkedList(arr) {
//     if (arr.length === 0) return null;
//     let head = new Node(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         current.next = new Node(arr[i]);
//         current.next.prev = current;
//         current = current.next;
//     }
//     return head;
// }


// // Example usage:
// const inputArray = [2, 5, 2, 4, 8, 10, 2, 2];
// const keyToDelete = 2;
// let head = createLinkedList(inputArray);

// console.log("Original List:");
// printList(head);

// const solution = new Solution();
// head = solution.deleteAllOccurOfX(head, keyToDelete);

// console.log("Updated List:");
// printList(head);


// -----------------------Geeks Solution--------------------//
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    deleteAllOccurOfX(head, key) {
        let temp = head;
        while (temp !== null) {
            if (temp.data === key) {
                if (temp === head) {
                    head = temp.next;
                    if (head !== null) {
                        head.prev = null;
                    }
                } else {
                    let nextNode = temp.next;
                    let prevNode = temp.prev;
                    
                    if (nextNode !== null) {
                        nextNode.prev = prevNode;
                    }
                    if (prevNode !== null) {
                        prevNode.next = nextNode;
                    }
                }
            }
            temp = temp.next;
        }
        return head;
    }
}

// Helper function to print the doubly linked list
function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" <-> "));
}

// Helper function to create a doubly linked list from an array
function createLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current.next.prev = current;
        current = current.next;
    }
    return head;
}

// Example usage:
const inputArray1 = [2, 2, 10, 8, 4, 2, 5, 2];
const keyToDelete1 = 2;
let head1 = createLinkedList(inputArray1);

console.log("Original List:");
printList(head1);

const solution = new Solution();
head1 = solution.deleteAllOccurOfX(head1, keyToDelete1);

console.log("Updated List:");
printList(head1);

const inputArray2 = [9, 1, 3, 4, 5, 1, 8, 4];
const keyToDelete2 = 9;
let head2 = createLinkedList(inputArray2);

console.log("Original List:");
printList(head2);

head2 = solution.deleteAllOccurOfX(head2, keyToDelete2);

console.log("Updated List:");
printList(head2);
