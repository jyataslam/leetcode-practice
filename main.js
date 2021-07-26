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
        console.log("answer", answer);
    }
    return answer;
};
romanToInt("XIX");
