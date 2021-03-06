// biuld array
var buildArray = function (nums) {
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        res.push(nums[nums[i]]);
    }

    return res;
};
buildArray([0, 2, 1, 5, 3, 4]);

//concatenate two arrays of numbers
var getConcatenation = function (nums) {
    const answer = [...nums, ...nums];
    return answer;
};
getConcatenation([1, 2, 1]);

// running sum
var runningSum = function (nums) {
    const answerArray = [];
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            answerArray.push(nums[i]);
        } else if (i !== 0) {
            const ans = answerArray[i - 1] + nums[i];
            answerArray.push(ans);
        }
    }
    return answerArray;
};
runningSum([1, 2, 3, 4]);

// 1108 Defanging an IP Address
var defangIPaddr = function (address) {
    // const ans = address.split(".");
    // const ans2 = ans.join("[.]");
    // console.log(ans2);
    return address.split(".").join("[.]");
};
defangIPaddr("255.100.50.0");

// 9 Palindrome Number
var isPalindrome = function (x) {
    const reverseX = x.toString().split("").reverse().join("");
    return x === parseInt(reverseX) ? true : false;
};
isPalindrome(131);

const stringPalindrome = str => {
    const revStr = str.split("").reverse().join("");
    return str === revStr ? true : false;
};
stringPalindrome("jason");

// 13 Roman to Integer
var romanToInt = function (s) {
    const romans = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let answer = 0;
    for (let i = 0; i < s.length; i++) {
        if (romans[s[i + 1]] > romans[s[i]]) {
            answer = answer - romans[s[i]];
        } else {
            answer = answer + romans[s[i]];
        }
        // console.log("answer", answer);
    }
    return answer;
};
romanToInt("XIX");

// 7 Reverse Integer
var reverse = function (x) {
    const xStr = x.toString().split("");
    for (let i = 0; i < xStr.length; i++) {
        if (xStr[xStr.length - 1] === "0") {
            xStr.pop();
        }
    }
    const reversed = xStr.reverse();
    if (reversed[reversed.length - 1] === "-") {
        reversed.pop();
        reversed.unshift("-");
    }
    const answer = reversed.join("");
    if (Math.pow(-2, 31) <= answer && answer <= Math.pow(2, 31) - 1) {
        return answer;
    } else {
        return 0;
    }
};
reverse(-302033049300);

// 2 Add Two Numbers
const addTwoNumbers = (l1, l2) => {
    // ANSWER FOR ARRAYS
    // reverse both arrays and transform into int
    // const firstArrRev = parseInt(l1.reverse().join(""));
    // const secondArrRev = parseInt(l2.reverse().join(""));

    // add both numbers together
    // const added = firstArrRev + secondArrRev;

    // convert sum back to array and reverse
    // return added.toString().split("").reverse();

    // ANSWER FOR LINKED LISTS
    let prev1 = null;
    let curr1 = l1;
    let nextTemp1 = null;

    while (curr1 != null) {
        nextTemp1 = curr1.next;
        curr1.next = prev1;
        prev1 = curr1;
        curr1 = nextTemp1;
    }
    let ans1 = prev1;

    let prev2 = null;
    let curr2 = l2;
    let nextTemp2 = null;

    while (curr2 != null) {
        nextTemp2 = curr2.next;
        curr2.next = prev2;
        prev2 = curr2;
        curr2 = nextTemp2;
    }
    let ans2 = prev2;
};
addTwoNumbers([2, 4, 8], [3, 1, 1]);

// 14 Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string ""
const longestCommonPrefix = strs => {
    let lengthStr1 = strs[0].length;

    let answer = "";

    for (let i = 1; i <= lengthStr1; i++) {
        let temp = strs[0].substring(0, i);
        // .every returns true if conditions are met
        // in this case, if the new substring equals our temp variable
        if (!strs.every(str => str.substring(0, i) == temp)) break;
        answer = temp;
    }
    return answer;
};
longestCommonPrefix(["flower", "flow", "light"]);

// 20 Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
const isValid = s => {
    let ansArr = [],
        brackets = {
            ")": "(",
            "}": "{",
            "]": "[",
        };
    if (s.length % 2 === 1) {
        ansArr.push("false");
    } else {
        for (let index of s) {
            if (index === "(" || index === "[" || index === "{") {
                ansArr.push(index);
            } else {
                if (ansArr.pop() !== brackets[index]) {
                    return false;
                }
            }
        }
    }
    // console.log(ansArr.length > 0 ? false : true);
    return ansArr.length > 0 ? false : true;
};
isValid("()[]{[}]");

// ---------------------- //
// CREATING A LINKED LIST //
// ---------------------- //
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Insert at last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // If empty, then make head
        if (!this.head) {
            this.head = node;
        } else {
            //set current to the start of the list
            current = this.head;

            // traverse thru the list while a node has a next property
            while (current.next) {
                // set current variable to the next node
                current = current.next;
            }
            // after getting to the end of the list, set the next property on last list item to the new node data
            current.next = node;
        }

        this.size++;
    }

    // Insert at index
    insertAt(data, index) {
        // if index is out of range, return
        if (index > 0 && index > this.size) {
            return;
        }

        // If first index, set to head
        if (index === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        const node = new Node(data);
        let current, previous;

        // Set current to first
        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // Node before the index we wanna insert at
            count++;
            current = current.next; // Node after the index we wanna insert at
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    // Get at index
    getAt(index) {
        let current = this.head;
        let count = 0;

        // loop through list while a next node exists
        while (current) {
            // if count, which is current index of ll, is equal to desired index, console.log the data
            if (count === index) {
                console.log("get at", current.data);
                return;
            }
            // increase counter
            count++;
            // set current node to next node and repeat while loop
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index) {
        if (index > 0 && index > this.size) {
            console.log("cannot remove index because it does not exist");
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        // If it's first index...
        if (index === 0) {
            this.head = current.next;
        } else {
            while (count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }

        this.size--;
    }

    // Clear the list
    clearList() {
        this.head = null;
        this.size = 0;
    }

    // Print the list data
    printListData() {
        let current = this.head;

        while (current) {
            console.log("print list data", current);
            current = current.next;
        }
    }

    reverseLinkList2(start, end) {
        let current = this.head;
        if (current == null) {
            return null;
        }

        let prev = null;

        while (start > 1) {
            prev = current;
            current = current.next;
            start--;
            end--;
        }

        let connection = prev;
        let tail = current;

        while (end > 0) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
            end--;
        }

        if (connection != null) {
            connection.next = prev;
        } else {
            current = prev;
        }

        tail.next = current;
        console.log("head", this.head);

        return this.head;
    }
}

const ll = new LinkedList();

ll.insertFirst(5);
ll.insertFirst(4);
ll.insertFirst(3);
ll.insertFirst(2);
ll.insertFirst(1);
// ll.insertAt(500, 2);

// ll.getAt(4);
// ll.removeAt(4);

// ll.clearList();

ll.printListData();
ll.reverseLinkList2(2, 4);
// ---------------------------- //
// REVERSE A SINGLY LINKED LIST //
// ---------------------------- //
const reverseLinkedList = head => {
    let current = head;
    let previousNode = null;
    let nextNode = null;

    // nextNode: null
    // current.next: 4;
    // previousNode: 5;
    // current: null

    while (current) {
        nextNode = current.next;
        current.next = previousNode;
        previousNode = current;
        current = nextNode;
    }

    return previousNode;
};

// ---------------------------- //
// REVERSE A SINGLY LINKED LIST 2 (MEDIUM) //
// ---------------------------- //
