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

let arr = [5,8,7,6,3];
let head = DoubLinkedList(arr);
printLinkedList(head)