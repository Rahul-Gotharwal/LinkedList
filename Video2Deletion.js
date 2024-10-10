
// //Removing the head
// class Node {
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
// // Function to delete the head node
// function deleteHead(head){
//     if(!head) return null;
//     let temp = head;
//     head = head.next;
//     // In JavaScript, garbage collection handles memory deallocation
//     temp = null;
//     return head;
// }
// const arr = [2,4,6,8,10];
// const head = arrayToLinkedList(arr);
// console.log("Original Linked List:");// `head` now stores the reference to the first node of the linked list
// traverseLinkedList(head);

// let newList = deleteHead(head)
// console.log("Linked List after deleting the head:");
// traverseLinkedList(newList); // Traversing the new list

// if (newList) {
//     console.log("New head value:", newList.data);
// } else {
//     console.log("The list is now empty.");
// }

//-------------------Removing tail of the linkedlist-------------------//
// class Node {
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
// // Function to delete the tail node
// function deleteTail(head){
//     if(!head || head.next === null) return null;
//     let temp = head;
//      while(temp.next.next!=null){
//         temp=temp.next
//      }
//      temp.next = null ; // removing the tail
//      return head
// }
// const arr = [2,4,6,8,10];
// const head = arrayToLinkedList(arr);
// console.log("Original Linked List:");// `head` now stores the reference to the first node of the linked list
// traverseLinkedList(head);

// let newList = deleteTail(head)
// console.log("Linked List after deleting the Tail:");
// traverseLinkedList(newList); // Traversing the new list

//-------------------delete kth element of the linked list------------------//
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
// this funtion will create the linked list
function arrayToLinkedList(arr){
    if(arr.length === 0){
        return null
    }
    let head = new Node(arr[0]) // creating the head of the linked list
    let current = head;
    for(let i = 1 ; i<arr.length;i++){
        current.next = new Node(arr[i]);// here we call the counstructor
        current = current.next // now it is pointing to the next node and become the current
    }
    return head // this head is stores in the variable head = arrayToLinkedList(arr); and head is the refrence of the first node
}
// this fuction is use for the traversal in the linked list 
function traverseLinkedList(head){
    let current = head;
    while(current!=null){
        console.log(current.data);
        current = current.next
    }
}

 // Function to delete the head node

    function deleteHead(head){
        if(!head) return null;
        let temp = head;
        head = head.next;
        // In JavaScript, garbage collection handles memory deallocation
        temp = null;
        return head;
    }

// Function to delete the tail node

    function deleteTail(head){
        if(!head || head.next === null) return null;
        let temp = head;
         while(temp.next.next!=null){
            temp=temp.next
         }
         temp.next = null ; // removing the tail
         return head
    }
// deleting the node in the middle of linkedlist or at specific position
function deleteSpecificK(head , k){
    if(head===null) return null
    if(k==1){
        deleteHead(head)
    }
    else{
        let temp = head
        let count = 0 
        let prev = null
        while(temp!==null){
           count++;
           if(count===k){
            prev.next = prev.next.next
            break;
           }
           prev = temp;
           temp= temp.next
        }
        return head
    }
}
const arr = [2, 4, 6, 8, 10];
let head = arrayToLinkedList(arr); // Create a linked list from the array
console.log("Original Linked List:");
traverseLinkedList(head); // Print the original list

head = deleteTail(head); // Delete the tail node
console.log("Linked List after deleting the Tail:");
traverseLinkedList(head); // Print the list after deletion of the tail

head = deleteSpecificK(head, 3); // Delete node at position 3
console.log("Linked List after deleting node at position 3:");
traverseLinkedList(head); // Print the list after deletion at specific position


//--------------------------Delete With Specific Value-------------------//

// class Node {
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
// function removeEl(head ,el){
//     if(head===null){
//         return head
//     }
//     // same code as deleteHead
//     if(head.data === el){
//         let temp = head;
//         head=head.next
//         return head
//     }
//     else{
//         let temp = head;
//         let prev = null;
//         while(temp!==null){
//            if(temp.data === el){
//             prev.next = prev.next.next
//             break
//            }
//            prev = temp
//            temp= temp.next 
//         }
//         return head
//     }
// }

// const arr = [2,4,6,8,10];
// const head = arrayToLinkedList(arr);
// console.log("Original Linked List:");// `head` now stores the reference to the first node of the linked list
// traverseLinkedList(head);
// console.log("list after removing the elemnt with sprecific value")
// removeEl(head,4);
// traverseLinkedList(head)