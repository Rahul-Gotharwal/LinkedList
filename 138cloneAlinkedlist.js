// class Node {
//     constructor(data) {
//         this.data = data;   
//         this.next = null;
//         this.random = null;
//     }
// }

// function cloneLL(head){
//     // copying the node
//     if (!head) return null;
//     let temp = head;
//     let mpp= new Map();
//     while(temp!==null){
//         let newNode = new Node(temp.data);
//         mpp.set(temp , newNode);
//         temp = temp.next
//     }
//     temp = head
//     // Step 2: Connect the next and random
//     // pointers of the copied nodes using the map
//     while(temp!==null){
//         let copyNode = mpp.get(temp) // it will give the value which is assositated with the temp so that is the newNode 
//         copyNode.next = mpp.get(temp.next) || null; // we create the link between the copy list now 7 ->13(it is the copy list remember)
//         copyNode.random = mpp.get(temp.random) || null;
//         temp = temp.next   
//     }
//     return mpp.get(head) // we are returning the new head of mpp 
// }
// function printClonedLinkedList(head) {
//     while (head !== null) {
//         console.log(`Data: ${head.data}` + (head.random !== null ? `, Random: ${head.random.data}` : `, Random: null`));
//         head = head.next;
//     }
// }
// function main() {
//     // Example linked list: 7 -> 14 -> 21 -> 28
//     let head = new Node(7);
//     head.next = new Node(14);
//     head.next.next = new Node(21);
//     head.next.next.next = new Node(28);

//     // Assigning random pointers
//     head.random = head.next.next;
//     head.next.random = head;
//     head.next.next.random = head.next.next.next;
//     head.next.next.next.random = null;

//     console.log("Original Linked List with Random Pointers:");
//     printClonedLinkedList(head);

//     // Clone the linked list
//     let clonedList = cloneLL(head);

//     console.log("\nCloned Linked List with Random Pointers:");
//     printClonedLinkedList(clonedList);
// }

// // Calling the main function to execute the code
// main();

//----------------------Optimal Appraoch -------------------//
class Node {
    constructor(data) {
        this.data = data;   
        this.next = null;
        this.random = null;
    }
}

function insertCopyInBetween(head){
    let temp = head // according to the Notebook // first we are at 7 
    while(temp!==null){
        let nextElement = temp.next;  // we store the 13 
        let copy = new Node(temp.data);// creating the new node with temp  that is the 7
        copy.next = nextElement; // 7 points to the 13
        temp.next = copy;
        temp = nextElement // temp.next.next

    }
}

function connectRandomPointers(head){
    // we are again come to the head
    let temp = head;
    while(temp!==null){
        //access the copy node
        let copyNode = temp.next;
        if(temp.random){
            // agar temp ka random khi point kar rha he to (original list) hmko copyNode k random ko bhi usi random part pe point krwana he
            // check the video if dont understand at 27:02
            copyNode.random = temp.random.next
        }else{
            copyNode.random = null
        }
        temp = temp.next.next 
    }
}
function connectNextPointer(head){
    let temp = head;
    let dummyNode = new Node(-1);
    let res = dummyNode;
    while(temp!==null){
        // connecting the res
        res.next = temp.next; // -1 (dummyNode ) points to the temp ka next part that is 7 (copy list)
        res = res.next // move to the next
      // disconnct the original from the duplicate
      temp.next = temp.next.next; // breaking the link from copy list and points to the original
      temp = temp.next // move to the next
    }
    return dummyNode.next
}

function cloneLL(head){
    if(!head) return null;
    insertCopyInBetween(head);
    connectRandomPointers(head);
    return connectNextPointer(head)
}
function printClonedLinkedList(head) {
    while (head !== null) {
        console.log(`Data: ${head.data}${head.random ? `, Random: ${head.random.data}` : ', Random: nullptr'}`);
        // Move to the next node
        head = head.next;
    }
}

// Main function
function main() {
    // Example linked list: 7 -> 14 -> 21 -> 28
    let head = new Node(7);
    head.next = new Node(14);
    head.next.next = new Node(21);
    head.next.next.next = new Node(28);

    // Assigning random pointers
    head.random = head.next.next;
    head.next.random = head;
    head.next.next.random = head.next.next.next;
    head.next.next.next.random = head.next;

    console.log("Original Linked List with Random Pointers:");
    printClonedLinkedList(head);

    // Clone the linked list
    let clonedList = cloneLL(head);

    console.log("\nCloned Linked List with Random Pointers:");
    printClonedLinkedList(clonedList);
}

main();