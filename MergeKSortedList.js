// // Brute Force approach 
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function mergeKListBrute(lists){
//     let array = [];
//     for(let i = 0 ; i<lists.length ; i++){
//         let temp = lists[i];
//         while(temp!==null){
//             array.push(temp.val);
//             temp = temp.next
//         }
//     }
//     array.sort((a,b)=> a-b);
//     let dummy = new ListNode(0);
//     let temp = dummy;
//     for(let val of array){
//         temp.next = new ListNode(val);
//         temp = temp.next
//     }
//     return dummy.next
// }
// // Helper function to create a linked list from an array
// function createLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// // Helper function to print the linked list
// function printLinkedList(node) {
//     let result = [];
//     while (node !== null) {
//         result.push(node.val);
//         node = node.next;
//     }
//     console.log(result.join(" -> "));
// }

// // Example input
// let lists = [
//     createLinkedList([1, 4, 5]),
//     createLinkedList([1, 3, 4]),
//     createLinkedList([2, 6])
// ];

// console.log("Brute Force:");
// printLinkedList(mergeKListBrute(lists));

// -------------------Optimized appraoch -----------------//
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// function mergeTwoLists(l1 , l2){
//     let dummy = new ListNode(0);
//     let current = dummy;
//     // same code as mergeTwoLists
//     while(l1!==null && l2!==null){
//         if(l1.val < l2.val){
//             current.next = l1;
//             l1 = l1.next
//         }
//         else{
//             current.next = l2 ;
//             l2 = l2.next 
//         }
//         current = current.next
//     }
//     current.next = l1 !== null ? l1 : l2;
//     return dummy.next
// }

// function mergeKLists(lists){
//     if(lists.length === 0 ) return null;
//     let head = lists[0];
//     //console.log(lists[0]) // 1->4->5
//     for(let i = 1 ; i<lists.length ; i++){
//        // console.log(lists.length) = > 3 
//         head = mergeTwoLists(head , lists[i])
//     }
//     return head
// }
// function createLinkedList(arr) {
//     let dummy = new ListNode(0);
//     let current = dummy;
//     for (let val of arr) {
//         current.next = new ListNode(val);
//         current = current.next;
//     }
//     return dummy.next;
// }

// // Helper function to print the linked list
// function printLinkedList(node) {
//     let result = [];
//     while (node !== null) {
//         result.push(node.val);
//         node = node.next;
//     }
//     console.log(result.join(" -> "));
// }

// let lists = [
//     createLinkedList([1, 4, 5]),
//     createLinkedList([1, 3, 4]),
//     createLinkedList([2, 6])
// ];
// printLinkedList(mergeKLists(lists));

// ----------Most Optiaml appraoch --------------//

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}
class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(node) {
        this.heap.push(node);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        const min = this.heap[0];
        const end = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = end;
            this._sinkDown(0);
        }

        return min;
    }

    _bubbleUp(index) {
        const element = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (element.val >= parent.val) break;

            this.heap[parentIndex] = element;
            this.heap[index] = parent;
            index = parentIndex;
        }
    }

    _sinkDown(index) {
        const length = this.heap.length;
        const element = this.heap[index];

        while (true) {
            let leftChildIdx = 2 * index + 1;
            let rightChildIdx = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.heap[leftChildIdx];
                if (leftChild.val < element.val) {
                    swap = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.heap[rightChildIdx];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIdx;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

function mergeKListsMinHeap(lists) {
    let minHeap = new MinHeap();

    for (let list of lists) {
        if (list !== null) {
            minHeap.push(list);
        }
    }

    let dummy = new ListNode(0);
    let current = dummy;

    while (!minHeap.isEmpty()) {
        let minNode = minHeap.pop();
        current.next = minNode;
        current = current.next;
        if (minNode.next !== null) {
            minHeap.push(minNode.next);
        }
    }

    return dummy.next;
}
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print the linked list
function printLinkedList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(" -> "));
}

// Example input
let lists = [
    createLinkedList([1, 4, 5]),
    createLinkedList([1, 3, 4]),
    createLinkedList([2, 6])
];
console.log("Min Heap:");
printLinkedList(mergeKListsMinHeap(lists));