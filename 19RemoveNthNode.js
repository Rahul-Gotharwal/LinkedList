//---------------------Brute Force Solution-----------------------//
// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = next;
//   }
// }

// // Function to print the linked list
// function printLL(head) {
//   let temp = head;
//   while (temp != null) {
//     console.log(temp.data + "");
//     temp = temp.next;
//   }
// }

// // Function to delete the Nth node from the end of the linked list
// function DeleteNthNodefromEnd(head, n) {
//   if (head === null) return null;
//   let cnt = 0;
//   let temp = head;
//   // count the number of the node in the linlked list
//   while (temp != null) {
//     cnt++;
//     temp = temp.next;
//   }
//   // If N equals the total number of nodes, delete the head
//   // because the we do the deletion from the last so head will delete
//   if (cnt === n) {
//     let newHead = head.next;
//     head = null;
//     return newHead;
//   }
//   // Calculate the position of the node to delete (res)
//   let res = cnt - n;
//   temp = head;

//   // Traverse to the node just before the one to delete
//   while (temp != null) {
//     res--;
//     if(res === 0 ) break;
//     temp = temp.next
//   }
//   // Delete the Nth node from the end
//   let delNode = temp.next;
//   temp.next = temp.next.next;
//   delNode = null;
//   return head;
// }
// const arr = [1, 2, 3, 4, 5];
// const N = 3;
// let head = new Node(arr[0]);
// head.next = new Node(arr[1]);
// head.next.next = new Node(arr[2]);
// head.next.next.next = new Node(arr[3]);
// head.next.next.next.next = new Node(arr[4]);
// // Delete the Nth node from the end and print the modified linked list
// head = DeleteNthNodefromEnd(head, N);
// printLL(head);


// ---------------optimal solution -----------------------//

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Function to print the linked list
function printLL(head) {
    while (head !== null) {
        console.log(head.data + ' ');
        head = head.next;
    }
}

// Function to delete the Nth node from the end of the linked list
function DeleteNthNodefromEnd(head, N) {
    // Create two pointers, fastp and slowp
    let fastp = head;
    let slowp = head;

    // Move the fastp pointer N nodes ahead
    for (let i = 0; i < N; i++) {
        if (fastp === null) {
            console.error("N is greater than the length of the linked list");
            return head;
        }
        fastp = fastp.next;
    }

    // If fastp becomes null, the Nth node from the end is the head
    if (fastp === null) {
        return head.next;
    }

    // Move both pointers until fastp reaches the end
    while (fastp.next !== null) {
        fastp = fastp.next;
        slowp = slowp.next;
    }

    // Delete the Nth node from the end
    let delNode = slowp.next;
    slowp.next = slowp.next.next;
    delNode = null;
    return head;
}

// Create a linked list
const arr = [1, 2, 3, 4, 5];
const N = 3;
let head = new Node(arr[0]);
let current = head;
for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
}

// Delete the Nth node from the end and print the modified linked list
head = DeleteNthNodefromEnd(head, N);
printLL(head);


