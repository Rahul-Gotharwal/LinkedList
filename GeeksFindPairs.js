// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }
// function findPairsWithGivenSum(head , sum){
//     let result = [];
//     let temp1 = head;
//     while(temp1!==null){
//         let temp2 = temp1.next;
//         while(temp2!==null){
//             if(temp1.data  + temp2.data === sum){
//                 result.push([temp1.data , temp2.data]);
//             }
//             temp2= temp2.next
//         }
//         temp1 = temp1.next
//     }
//     return result
// }
// // Helper function to create and link nodes
// function createDLL(arr) {
//     let head = new Node(arr[0]);
//     let current = head;
//     for (let i = 1; i < arr.length; i++) {
//         let newNode = new Node(arr[i]);
//         current.next = newNode;
//         newNode.prev = current;
//         current = newNode;
//     }
//     return head;
// }

// // Example usage
// let head = createDLL([1, 2, 3, 4, 9]);
// let sum = 5;
// console.log(findPairsWithGivenSum(head, sum));

//---------------Optimal Appraoch----------------//
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
function findPairsWithGivenSum(head, sum){
    let result= [];
    if(!head) return result;
    // find the tail node
    let tail = head;
    while(tail.next!==null){
        tail = tail.next
    }
    let left = head;
    let right = tail;
    while(left!==right && left.prev!==right){
        let currentSum = left.data + right.data;
        if(currentSum === sum){
            result.push([left.data , right.data]);
            left = left.next;
            right = right.prev;
        }else if(currentSum<sum){
            left = left.next
        }
        else{
            right = right.prev
        }
    }
    return result
}
function createDLL(arr) {
    let head = new Node(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        let newNode = new Node(arr[i]);
        current.next = newNode;
        newNode.prev = current;
        current = newNode;
    }
    return head;
}

// Example usage
let head = createDLL([1, 2, 3, 4, 9]);
let sum = 5;
console.log(findPairsWithGivenSum(head, sum)); 