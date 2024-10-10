// //Traversal in the linked list
//  class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// // this funtion will create the linked list
// function arrayToLinkedList(arr){
//     if(arr.length === 0){
//         return null
//     }
//     let head = new Node(arr[0]) // creating the head of the linked list
//     let current = head;
//     for(let i = 1 ; i<arr.length;i++){
//         current.next = new Node(arr[i]);// here we call the counstructor
//         current = current.next // now it is pointing to the next node and become the current
//     }
//     return head // this head is stores in the variable head = arrayToLinkedList(arr); and head is the refrence of the first node
// }
// // this fuction is use for the traversal in the linked list 
// function traverseLinkedList(head){
//     let current = head;
//     while(current!=null){
//         console.log(current.data);
//         current = current.next
//     }
// }

// const arr = [2,4,6,8,10];
// const head = arrayToLinkedList(arr);// `head` now stores the reference to the first node of the linked list
// traverseLinkedList(head)
/**
 * For the array [2, 4, 6, 8, 10]:

Head Node Creation:

head points to: [2] -> null
First Iteration (i = 1):

current.next = new Node(4);
current = current.next;
Linked list: [2] -> [4] -> null
Second Iteration (i = 2):

current.next = new Node(6);
current = current.next;
Linked list: [2] -> [4] -> [6] -> null
Third Iteration (i = 3):

current.next = new Node(8);
current = current.next;
Linked list: [2] -> [4] -> [6] -> [8] -> null
Fourth Iteration (i = 4):

current.next = new Node(10);
current = current.next;
Linked list: [2] -> [4] -> [6] -> [8] -> [10] -> null
Summary
Class and Constructor:

The Node class encapsulates the properties and behaviors of a node.
The constructor initializes the data and next properties.
 */

// function Node(data){
//     this.data = data;
//     this.next = null;
// }

// function arrayToLinkedList(arr){
//     if(arr.length === 0) return null;
//     let head = new Node(arr[0]);
//     let current = head
//     for(let i =1 ; i<arr.length; i++){
//         current.next = new Node(arr[i]);
//         current = current.next
//     }
//     return head // head stores the value as an refrence
// }
//  function traverseLinkedList(head){
//     let count = 0 
//     let current = head ;
//     while(current!=null){
//         count++
//         console.log(current.data);
//         current = current.next
//     }
//     return count
//  }

// let arr = [2,3,4,5,6];
// let head = arrayToLinkedList(arr);
// let resCount = traverseLinkedList(head);
// console.log(`length of the linked list is ${resCount}`)

//----------------Search the element in the linked list----------------///
class Node{
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}
// Function to check if a given element is present in the linked list
function checkIfPresent(head , desiredElement){
    let temp = head 
     while(temp !=null){
        if(temp.data === desiredElement){
            return true
        }
        temp=temp.next
     }
     return false
}

function arrayToLinkedList(arr){
    if(arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head
    for(let i =1 ; i<arr.length; i++){
        current.next = new Node(arr[i]);
        current = current.next
    }
    return head // head stores the value as an refrence
}
let arr = [2,3,4,5,6];
let head = arrayToLinkedList(arr);
let res = checkIfPresent(head , 4)
console.log(`value is present => ${res}`)

