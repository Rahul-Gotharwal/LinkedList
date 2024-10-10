class Node{
    constructor(data, next = null , prev){
        this.data = data;
        this.next = next;
        this.prev = prev;
        
    }
}

function DoubLinkedList(arr){
    let head = new Node(arr[0]);
    let prev = head;
    for(let i = 1 ; i<arr.length ; i++){
        let temp = new Node(arr[i], null , prev);
        prev.next = temp;
        prev = temp // prev = prev.next
    }
    return head
}

function printLinkedList(head){
    let current = head;
    while(current!=null){
        console.log(current.data);
        current= current.next
    }
}
// delete the head of the linked list
function deleteHead(head){
    if(head === null || head.next === null ) return null 
    let prev = head;
    head = head.next
    head.prev= null;
    prev.next = null; //The prev.next = null; line is unnecessary as the old head node will be garbage collected if there are no references to it.
    return head

}

// delete the tail of the linked list
function deleteTail(head){
    if(head === null || head.next === null ) return null 
   let tail = head;
   while(tail.next!==null){
     tail = tail.next;  
   }
   prev = tail.prev; 
   tail.prev = null;
   prev.next = null
   return head
}


// Delete the kth element of the doubly linked list
function DeleteTheKth(head , k ){
    if (head === null || k <= 0) return head;
    let temp = head;
    let count =0 ;
    while(temp!==null){
        count++
        if(count === k) break;
        temp= temp.next;
    }
    // when we reached at the temp node then we need the previous and front
    let prev = temp.prev; 
    let front = temp.next;
    if(temp.prev === null && temp.front === null){
      return null;
    }
    // // Handle deletion of the only node in the list
    // if (prev === null && front === null) {
    //     return null;
    // }
    else if(prev === null) {
         return deleteHead(head)
    }
    else if(front === null){
        return deleteTail(head)
    }
    prev.next = front;
    front.prev = prev;
    temp.next = null;
    temp.prev = null;
    return head
}

// Removing the given node 
// NOTE - we cannot delete the head
function removingTheGivenNode(node){
    if (node === null) return;
let prev = node.prev;
let next = node.next

if(next === null){
    prev.next = null;
    node.prev= null
    return 
}
prev.next = next;
next.prev = prev;
node.next = node.prev = null;

}


let arr = [5,8,7,6,3];
let head = DoubLinkedList(arr);
printLinkedList(head)
// console.log("After deleting the head");
// head= deleteHead(head)

// console.log("After deleting the tail");
// head= deleteTail(head)
// printLinkedList(head)
// console.log("After deleting the Kth element");
// head= DeleteTheKth(head , 3)
// printLinkedList(head)
console.log("After deleting the element");
removingTheGivenNode(head.next)
printLinkedList(head)