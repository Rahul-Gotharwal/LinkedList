class ListNode{
    constructor(val = 0 , next = null){
        this.val = val;
        this.next = next
    }
}

function addTwoLists(head1 , head2){
    let t1 = head1 ;
    let t2 = head2;
    let dummyNode = new ListNode(-1);
    let curr = dummyNode;
    let carry = 0;
    while(t1!==null || t2!==null){
        let sum = carry;
        if(t1!==null){
            sum+=t1.val;
            t1 = t1.next
        } if (t2 !== null) {
            sum += t2.val;
            t2 = t2.next;
        }
        let newNode = new ListNode(sum%10);
        carry = Math.floor(sum/10);
        curr.next = newNode;
        curr = curr.next

    }
    if(carry>0){
        curr.next = new ListNode(carry);
    }

    return dummyNode.next
}
// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummyNode = new ListNode(-1);
    let current = dummyNode;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummyNode.next;
}

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(' -> '));
}
let l1 = createLinkedList([3, 4, 2]); // Represents the number 243
let l2 = createLinkedList([4, 6, 5]); // Represents the number 564

let result =addTwoLists(l1, l2);
printLinkedList(result); // Should print 7 -> 0 -> 8, representing the number 807

/**
 * Sure, let's do a detailed dry run of the JavaScript code with the example linked lists:

1. **Example input:**
   - `l1`: 2 -> 4 -> 3 (represents the number 342)
   - `l2`: 5 -> 6 -> 4 (represents the number 465)

2. **Initial Setup:**
   ```javascript
   let t1 = head1; // t1 points to the head of l1 (2 -> 4 -> 3)
   let t2 = head2; // t2 points to the head of l2 (5 -> 6 -> 4)
   let dummyNode = new ListNode(-1); // dummyNode is a placeholder node (-1)
   let cur = dummyNode; // cur points to dummyNode
   let carry = 0; // carry is initialized to 0
   ```

3. **First Iteration:**
   ```javascript
   let sum = carry; // sum = 0
   if (t1 !== null) {
       sum += t1.val; // sum = 0 + 2 = 2
       t1 = t1.next; // t1 moves to the next node (4 -> 3)
   }
   if (t2 !== null) {
       sum += t2.val; // sum = 2 + 5 = 7
       t2 = t2.next; // t2 moves to the next node (6 -> 4)
   }
   let newNode = new ListNode(sum % 10); // newNode = new ListNode(7)
   carry = Math.floor(sum / 10); // carry = 0
   cur.next = newNode; // dummyNode -> 7
   cur = cur.next; // cur moves to the newNode (7)
   ```

4. **Second Iteration:**
   ```javascript
   let sum = carry; // sum = 0
   if (t1 !== null) {
       sum += t1.val; // sum = 0 + 4 = 4
       t1 = t1.next; // t1 moves to the next node (3)
   }
   if (t2 !== null) {
       sum += t2.val; // sum = 4 + 6 = 10
       t2 = t2.next; // t2 moves to the next node (4)
   }
   let newNode = new ListNode(sum % 10); // newNode = new ListNode(0)
   carry = Math.floor(sum / 10); // carry = 1
   cur.next = newNode; // dummyNode -> 7 -> 0
   cur = cur.next; // cur moves to the newNode (0)
   ```

5. **Third Iteration:**
   ```javascript
   let sum = carry; // sum = 1
   if (t1 !== null) {
       sum += t1.val; // sum = 1 + 3 = 4
       t1 = t1.next; // t1 moves to the next node (null)
   }
   if (t2 !== null) {
       sum += t2.val; // sum = 4 + 4 = 8
       t2 = t2.next; // t2 moves to the next node (null)
   }
   let newNode = new ListNode(sum % 10); // newNode = new ListNode(8)
   carry = Math.floor(sum / 10); // carry = 0
   cur.next = newNode; // dummyNode -> 7 -> 0 -> 8
   cur = cur.next; // cur moves to the newNode (8)
   ```

6. **Final Check:**
   ```javascript
   if (carry > 0) {
       cur.next = new ListNode(carry); // Not executed since carry = 0
   }
   return dummyNode.next; // Returns the head of the result list (7 -> 0 -> 8)
   ```

 */