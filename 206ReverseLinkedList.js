// Reverse Doubly linked list 
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

function revereseDll(head){
    if(head === null || head.next === null){
        return head
    }
    let prev = null ;
    let current = head;
    while(current!==null){
        prev = current.prev;
        current.prev = current.next;
        current.next = prev;
        current = current.prev
    }
    return prev.prev // means back , like 3 becomes the head now
}

let arr = [5,8,7,6,3];
let head = DoubLinkedList(arr);
printLinkedList(head)
console.log("after the linked list is reverse")
// we storing the new head value in the head like by the funtion call revrseDll() .\head = revereseDll(head); and then we going to print it with new values
head = revereseDll(head);
printLinkedList(head)



//---------------------206 problem solution , reverse the singly linked list---------//
var reverseList = function(head) {
    let node = null;

    while (head) {
        const temp = head.next;
        head.next = node;
        node = head;
        head = temp;
    }

    return node;    
};