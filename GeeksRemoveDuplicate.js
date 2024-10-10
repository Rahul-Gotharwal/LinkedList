//--------------------ChatGpt logic--------------------//
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// function removeDuplicates(head) {
//     let temp = head;

//     while (temp !== null) {
//         // Check if the current element is the same as the previous element
//         if (temp.prev !== null && temp.prev.val === temp.val) {
//             // Remove the current element
//             temp.prev.next = temp.next;
            
//             // Handle the tail of the linked list
//             if (temp.next !== null) {
//                 temp.next.prev = temp.prev;
//             }
//         }
//         temp = temp.next;
//     }

//     return head;
// }

// // Utility function to print the list (for testing purposes)
// function printList(head) {
//     let temp = head;
//     while (temp) {
//         process.stdout.write(temp.val + " ");
//         temp = temp.next;
//     }
//     console.log();
// }

// // Example usage
// let head = new ListNode(1);
// head.next = new ListNode(1);
// head.next.prev = head;
// head.next.next = new ListNode(1);
// head.next.next.prev = head.next;
// head.next.next.next = new ListNode(2);
// head.next.next.next.prev = head.next.next;
// head.next.next.next.next = new ListNode(3);
// head.next.next.next.next.prev = head.next.next.next;
// head.next.next.next.next.next = new ListNode(4);
// head.next.next.next.next.next.prev = head.next.next.next.next;

// console.log("Original list:");
// printList(head);

// head = removeDuplicates(head);

// console.log("List after removing duplicates:");
// printList(head);
//-------------------Another Way To solve --------------//
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

function removeDuplicates(head) {
    if (!head) return null;

    let temp = head;

    while (temp) {
        let nextNode = temp.next;

        // Skip all nodes with the same value
        while (nextNode && nextNode.val === temp.val) {
            nextNode = nextNode.next;
        }

        // Update the links
        temp.next = nextNode; // it reaches at the point where it was skipped all the same nodes and loop break out where it not find the same node
        if (nextNode) {
            nextNode.prev = temp;
        }

        // Move to the next unique node
        temp = temp.next;
    }

    return head;
}

// Utility function to print the list (for testing purposes)
function printList(head) {
    let temp = head;
    while (temp) {
        process.stdout.write(temp.val + " ");
        temp = temp.next;
    }
    console.log();
}

// Example usage
let head = new ListNode(1);
head.next = new ListNode(1);
head.next.prev = head;
head.next.next = new ListNode(1);
head.next.next.prev = head.next;
head.next.next.next = new ListNode(2);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new ListNode(3);
head.next.next.next.next.prev = head.next.next.next;
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.prev = head.next.next.next.next;

console.log("Original list:");
printList(head);

head = removeDuplicates(head);

console.log("List after removing duplicates:");
printList(head);


//---------------GeeksSolution ------------------//
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Solution {
    removeDuplicates(head) {
        let temp = head;

        while (temp !== null) {
            // Check if the current element is the same as the previous element
            if (temp.prev !== null && temp.prev.data === temp.data) {
                // Remove the current element
                temp.prev.next = temp.next;

                // Handle the tail of the linked list
                if (temp.next !== null) {
                    temp.next.prev = temp.prev;
                }

                // Move temp to the next node after removing the duplicate
                temp = temp.next;
            } else {
                // Move to the next node only if no duplicate was found
                temp = temp.next;
            }
        }

        return head;
    }
}

// Utility function to print the list (for testing purposes)
function printList(head) {
    let temp = head;
    let result = [];
    while (temp) {
        result.push(temp.data);
        temp = temp.next;
    }
    console.log(result.join(' '));
}

// Example usage
let head = new Node(1);
head.next = new Node(1);
head.next.prev = head;
head.next.next = new Node(1);
head.next.next.prev = head.next;
head.next.next.next = new Node(2);
head.next.next.next.prev = head.next.next;
head.next.next.next.next = new Node(3);
head.next.next.next.next.prev = head.next.next.next;
head.next.next.next.next.next = new Node(4);
head.next.next.next.next.next.prev = head.next.next.next.next;

console.log("Original list:");
printList(head);

let solution = new Solution();
head = solution.removeDuplicates(head);

console.log("List after removing duplicates:");
printList(head);
