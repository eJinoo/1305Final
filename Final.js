
// stack constructor code from notes
class Stack {
    constructor() {
        this.items = [];
    }

    push(...element) {
        this.items.push(...element);
    }

    pop() {
        this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty';
        }
        return this.items[this.items.length - 1 ]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }

    printStack() {
        return this.items.join('');
    }
}

// Question1: Reverse an Integer (5 MARKS)
// Given an integer x, return the integer obtained by reversing the digits
// of x.
// If its a negative number , the sign should preserve

// number to array
// add numbers to stack
// print numbers from stack top to bottom
// if theres a negative sign, keep it.

function reverseInt(x){
    stringified = x.toString();
    console.log(stringified);

    const splitArray = stringified.split("");
    console.log(splitArray);
    
    let reverseStack = new Stack();
    let isNeg = false;
    let reversedNum = '';

    for (let c of splitArray){
        if (c === "-"){
            isNeg = true;
            continue;
        }
        reverseStack.push(c);
    }
    
    console.log(reverseStack.printStack());

    while (!reverseStack.isEmpty()){
        reversedNum += reverseStack.pop();
    }

    console.log(reversedNum);

    if (isNeg){
        return "-" + reversedNum;
    } else {
        return reversedNum;
    }
}

// idk i keep getting undefined or NaN ._.



// Test Case 1: Positive Number
// ● Input: x = 123
// ● Expected Output: 321
// ● Explanation: The digits of 123 are reversed to 321.

// Test Case 2: Negative Number
// ● Input: x = -456
// ● Expected Output: -654
// ● Explanation: The digits of -456 are reversed to -654, with the
// negative sign preserved.


// Question 2: Given a sorted array of distinct integers and a target
// value, return the index if the target is found. If not, return the index
// where it would be if it were inserted in order.( 5 MARKS)

function findIndex(arr, target){
    if (arr.indexOf(target) === -1){
        // if its not here
        arr.push(target)
        // push target to array
        arr.sort();
        // sort it again
        return arr.indexOf(target);
        // get index
    }

    return arr.indexOf(target);
}

let testArr = [1,3,5,6];

// Test Case 1: Target is in the array
// ● Input: nums = [1, 3, 5, 6], target = 5
// ● Expected Output: 2
// ● Explanation: The target 5 is found at index 2.

// Test Case 2: Target is not in the array (insert position in
// between)
// ● Input: nums = [1, 3, 5, 6], target = 2
// ● Expected Output: 1
// ● Explanation: The target 2 is not found, but it would be inserted
// at index 1.


// Question3: Delete Node in a Linked List (5 MARKS)
// Write a function to delete a node (except the tail) in a singly
// linked list, given only access to that node.

// node contrstuctor
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function deleteFromLinked(givenNode, target){
    let foundTarget = false;
    let currentNode = givenNode;

    if (givenNode === target){ // head case... ??? technically should just change the node to the next one in the list and then you have two of the same node pointint to the next so techinically it's deleted
            givenNode = givenNode.next;
            return
        }
        
    while(!foundTarget){
        if (currentNode.next === target){
            foundTarget = true;
            currentNode.next = currentNode.next.next
            break;
        }
        if (currentNode.next === null){ // reached the end
            break;
        }
            currentNode = currentNode.next;
    }
}

let node1 = new Node(4);
let node2 = new Node(5);
let node3 = new Node(1)
let node4 = new Node(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;

deleteFromLinked(node1, node2);

// Test Case 1: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 5
// ● Output:
// ○ Linked List: 4, where linked list should become 4 -> 1 -> 9

// Test Case 2: Basic Deletion
// ● Input:
// ○ Linked List Node: 4 , where linked list is 4 -> 5 -> 1 -> 9
// ○ Node to delete: 4
// ● Output:
// ○ Linked List: 5, where linked list should become 5 -> 1 -> 9


// Question4: Find all the duplicates in an array and return which
// is the smallest one. (5 MARKS)


//add everything to object
function smallestDuplicate(arr){
    let map = {
    }
    let highestCount = 0;
    let lowestNum = 0;
    for (num of arr){
        if (num in map){
            map[num]++
        } else {
            map[num] = 1;
        }
    }
    for (key in map){
        if (map[key] > highestCount){
            highestCount = map[key]
            lowestNum = key
        }
        if (map[key] === highestCount){
            if (key < lowestNum){
                lowestNum = key;
            }
        }
    }
    return lowestNum;
}

let testArr2 = [4, 10, 5, 1, 11, 5, 1, 4, 1];
let testArr3 = [1, 10, 1, -1, 10, -1];

// Test Case 1:
// Input:
// ○ Given array: [4, 10, 5, 1, 11, 5, 1, 4, 1]
// ● Output:
// ○ 1

// Test Case 2:
// Input:
// ○ Given array: [1, 10, 1, -1, 10, -1]
// ● Output:
// ○ -1


// MULTIPLE CHOICE QUESTIONS (Each 2 Marks)
// Which type of search is efficient on a sorted array?

// ● A) Linear Search
// ● B) Binary Search -----------------------------------------------
// ● C) Hash Search
// ● D) Exponential Search
// Your answer: B 


// What is the time complexity of inserting a new node at the
// beginning of a singly linked list?

// ● A) O(1) --------------------------------------------------------
// ● B) O(n)
// ● C) O(log n)
// ● D) O(n log n)
// Your answer: A


// In a binary search tree (BST), the left child of a node is always:

// ● A) Greater than the node
// ● B) Smaller than the node ---------------------------------------
// ● C) Equal to the node
// ● D) Random compared to the node
// ANSWER: B

// Which traversal of a BST visits nodes in ascending order?

// ● A) Pre-order
// ● B) Post-order
// ● C) In-order ----------------------------------------------------
// ● D) Level-order
// ANSWER: C

// In a doubly linked list, what does the prev pointer in the first
// node point to?

// ● A) The last node
// ● B) Null --------------------------------------------------------
// ● C) The second node
// ● D) The middle node
// ANSWER: B