// //-------------Solution of the problem --------------------//

class Node {
  constructor(val, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}
// this will initialize the list
// phle value blank hi rhgegi like hphle hum variables initialize hi krenge then hum methods k through value add krenge
var MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node(val, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  const newNode = new Node(val, current, current.prev);
  current.prev.next = newNode;
  current.prev = newNode;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) {
    return;
  }
  let current = this.head;
  if (index === 0) {
    this.head = current.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
  } else if (index === this.size - 1) {
    current = this.tail;
    this.tail = current.prev;
    this.tail.next = null;
  } else {
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
  this.size--;

};
// for printing the list 
MyLinkedList.prototype.printList= function() {
      let current = this.head;
      while (current !== null) {
        console.log(current.val);
        current = current.next;
      }
    }

// Your MyLinkedList object will be instantiated and called as such:
var obj = new MyLinkedList();
obj.addAtHead(3);
obj.addAtHead(4)
obj.addAtTail(5);
obj.printList()
console.log(obj.get(1));
obj.deleteAtIndex(1);
obj.printList();


// NOTE NOTE -> below method is same as => https://w3schools.com/Js/js_classes.asp
/**
 * Class Methods
Class methods are created with the same syntax as object methods.

Use the keyword class to create a class.

Always add a constructor() method.

Then add any number of methods.

Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}
 */

// example 
/**
 * class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
 */

//-------------------------Code in the Diffrent way------------------------//
// class Node {
//   constructor(data, next = null, prev = null) {
//     this.data = data;
//     this.next = next;
//     this.prev = prev;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   get(index) {
//     let current = this.head;
//     let count = 0;
//     while (current !== null) {
//       if (count === index) return current.data;
//       count++;
//       current = current.next;
//     }
//     return -1; // If the index is invalid
//   }

//   addAtHead(val) {
//     const newNode = new Node(val, this.head, null);
//     if (this.head !== null) {
//       this.head.prev = newNode;
//     } else {
//       this.tail = newNode;
//     }
//     this.head = newNode;
//   }

//   addAtTail(val) {
//     const newNode = new Node(val, null, this.tail);
//     if (this.tail !== null) {
//       this.tail.next = newNode;
//     } else {
//       this.head = newNode;
//     }
//     this.tail = newNode;
//   }

//   addAtIndex(index, val) {
//     if (index === 0) {
//       this.addAtHead(val);
//       return;
//     }
//     let current = this.head;
//     let count = 0;
//     while (current !== null && count < index) {
//       current = current.next;
//       count++;
//     }
//     if (current === null && count === index) {
//       this.addAtTail(val);
//     } else if (current !== null) {
//       const newNode = new Node(val, current, current.prev);
//       current.prev.next = newNode;
//       current.prev = newNode;
//     }
//   }

//   deleteAtIndex(index) {
//     if (index === 0 && this.head !== null) {
//       this.head = this.head.next;
//       if (this.head !== null) {
//         this.head.prev = null;
//       } else {
//         this.tail = null;
//       }
//       return;
//     }
//     let current = this.head;
//     let count = 0;
//     while (current !== null && count < index) {
//       current = current.next;
//       count++;
//     }
//     if (current !== null) {
//       if (current.next !== null) {
//         current.next.prev = current.prev;
//       } else {
//         this.tail = current.prev;
//       }
//       if (current.prev !== null) {
//         current.prev.next = current.next;
//       }
//     }
//   }

//   printList() {
//     let current = this.head;
//     while (current !== null) {
//       console.log(current.data);
//       current = current.next;
//     }
//   }
// }
// let myList = new DoublyLinkedList();
// myList.addAtHead(1);
// myList.addAtTail(3);
// myList.addAtIndex(1, 2); // Linked list becomes 1->2->3
// myList.printList(); // Output: 1 2 3
// console.log(myList.get(1)); // Output: 2
// myList.deleteAtIndex(1); // Now the linked list is 1->3
// myList.printList(); // Output: 1 3
