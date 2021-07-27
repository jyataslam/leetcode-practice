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
