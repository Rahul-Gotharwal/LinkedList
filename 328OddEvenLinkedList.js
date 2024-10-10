// //Brute force apparoch
// class ListNode {
//   constructor(val = 0, next = null) {
//     this.val = val;
//     this.next = next;
//   }
// }

// function oddEvenList(head) {
//   if (!head || !head.next) return head;
//   let temp = head;
//   let oddList = [];
//   let evenList = [];
//   // Collect odd indexed nodes
//   // condition is same as =>  temp!==null && temp.next!==null
//   while (temp && temp.next) {
//     oddList.push(temp.val);
//     temp = temp.next.next;
//   }
//   // if the temp is not null ,
//   if (temp) oddList.push(temp.val); // Check for the last odd element if it exists
//   temp  = head.next;
//   // // Collect even indexed nodes
//   while(temp && temp.next){
//     evenList.push(temp.val);
//     temp = temp.next.next;
//   }
//   if(temp) evenList.push(temp.val); // check for the last even element if it is exist
//   // Reconstruct the linked list with odd nodes followed by even nodes
//   temp = head;
//   let i = 0 ;
//   // Assign odd nodes' values
//   while(i<oddList.length){
//     temp.val = oddList[i]; // temp ki value ko oddList ki value se replace kar rhe he
//     temp = temp.next;
//     i++;
//   }
//   i = 0 ;
//   // Assign even nodes' values
//   while(i<evenList.length){
//     temp.val = evenList[i];
//     temp = temp.next;
//     i++
//   }
//   return head
 
// }

// // Helper function to create a linked list from an array
// function createLinkedList(arr){
//     let dummy = new ListNode();
//     //console.log(dummy)
//     let current = dummy;
//     for(let  val of arr){
//         current.next = new ListNode(val);
//         current = current.next
//     }
//     return dummy.next ; // it is same as returning the head bcz it first not assign the head like arr[0] like we do in the striver's code , it is use the for loop to entire array 

// }
// // Helper function to print the linked list
// function printLinkedList(head){
//     let result = [];
//     while(head){
//         result.push(head.val);
//         head = head.next
//     }
//     console.log(result.join(" -> "));
// }

// // Example usage
// let arr = [1, 2, 3, 4, 5];
// let head = createLinkedList(arr);
// printLinkedList(head); // Original list: 1 -> 2 -> 3 -> 4 -> 5
// head = oddEvenList(head);
// printLinkedList(head); // Modified list: 1 -> 3 -> 5 -> 2 -> 4



// -------------optimal solutoin -----------------------//
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head = null;
let tail = null;

// Function to print the LinkedList
function printList(head) {
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.val + "-->";
        curr = curr.next;
    }
    result += "null";
    console.log(result);
}

// Function for creating a LinkedList
function insertAtLast(value) {
    const newNode = new ListNode(value);
    if (head === null) {
        head = newNode;
        tail = newNode;
    } else {
        tail.next = newNode;
        tail = newNode;
    }
}

// Function to segregate odd and even indexed nodes in the LinkedList
function segregateToOddEven() {
    if (head === null) return null;

    let oddHead = head;
    let evenHead = head.next;
    let odd = oddHead; // taking two pointers odd and even
    let even = evenHead;

    while (even !== null && even.next !== null) {
        odd.next = odd.next.next;//even.next
        odd = odd.next;
        even.next = even.next.next;  //odd.next
        even = even.next; //even.next
    }

    /**
     * odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
     */
    odd.next = evenHead;
    return oddHead; // head
}

// Testing the functions
insertAtLast(1);
insertAtLast(2);
insertAtLast(3);
insertAtLast(4);
insertAtLast(5);
console.log("Initial LinkedList : ");
printList(head);
let newHead = segregateToOddEven();
console.log("LinkedList After Segregation ");
printList(newHead);
