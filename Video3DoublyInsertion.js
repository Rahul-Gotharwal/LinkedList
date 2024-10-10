// Insertion if nodes
// Insertion before the node
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

function printLinkedList(head ){
    let current = head;
    while(current!=null){
        console.log(current.data);
        current= current.next
    }
}

// Insertion before the head
function InsertTheBeforeHead(head , val){
    let newNode = new Node(val , head , null);
    head.prev = newNode
    return newNode
}

// Insertion Befoire the tail of the linkedlist
function InsertbeforetheTail(head , val){
    // for the single node
    if(head.next===null){
        return InsertTheBeforeHead(head , val)
    }
    let tail = head;
    while(tail.next!==null){
        tail = tail.next;
    }
    let prev = tail.prev;
    let newNode = new Node(val , tail  , prev);
    prev.next = newNode;
    tail.prev = newNode;
    return head

}

// insert before the kth of the linkedlist
function insertBeforetheKth(head, k , val){
if(k===1){
    return InsertTheBeforeHead(head,val)
}
let temp = head;
let count = 0 ;
while(temp!==null){
    count++
    if(count === k ) break;
    temp= temp.next
}
let prev = temp.prev;
let newNode = new Node(val , temp , prev);
prev.next =  newNode;
temp.prev = newNode
return head

}

// Insert to the given node 
function insertBeforetheNode(node , val){
    let prev = node.prev;
    let newNode = new Node(val , node , prev);
    prev.next = newNode;
    node.prev = newNode;
    return head
}

let arr = [5,8,7,6,3];
let head = DoubLinkedList(arr);
printLinkedList(head)
// console.log('after inseting the newnode to the head');
// head = InsertTheBeforeHead(head , 36);
// printLinkedList(head)
// console.log('after inseting the newnode before the tail of the linkedlist');
// head =InsertbeforetheTail(head ,55);
// printLinkedList(head)
// console.log('after inseting the newnode before the kth element in  linkedlist');
// head =insertBeforetheKth(head ,3, 25);
// printLinkedList(head)
console.log('after inseting the before the given node');
insertBeforetheNode(head.next.next , 55);
printLinkedList(head)