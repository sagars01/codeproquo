/**
 *
 * This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?
 *
 */

// Two Pass Solution

/* 
Algorithm
 1. Create a set of the inputs
 2. Iterate through the inputs and check 
    a. if inputs[currentIndex] - target exists in the map break return true else false.

Time Complexity

1 loop to convert the array to a set. O(n + 1)
2 Run the algorithm with one loop.  O(n + 1)

Total = O(n + 1) + O(n + 1) = 2O(n) + 2O(1)
Ignoring the constants - O(n)

Space Complexity 


Question to ask : Can the input array contain duplicates.
 
*/
function twoNumberSum1(inputs, target) {
    let isPossible = false;
    if (inputs.length < 1 || !Array.isArray(inputs) || target < 1) {
        return isPossible;
    }

    let set = new Set(inputs);
    for (let index = 0; index < inputs.length; index++) {
        const diff = target - input[index];
        if (set.has(diff)) {
            isPossible = true;
            break;
        }
    }
    return isPossible;
}

// One Pass solution
/**
 * Algorithm
 *  - I will iterate through the array and I will remember which numbers I have passed
 *  - Algorithm of previous solution : Step 2.a
 */
function twoNumberSum2(inputs, target) {
    let isPossible = false;
    if (inputs.length < 1 || !Array.isArray(inputs) || target < 1) {
        return isPossible;
    }
    let set = new Set();
    for (let index = 0; index < input.length; index++) {
        const diff = target - input[index];
        if (set.has(diff)) {
            isPossible = true;
            break;
        } else {
            set.add(input[index]);
        }

    }

    return isPossible;
}

const input = [21];
const target = 1;

console.log(twoNumberSum2(input, target));
console.log(twoNumberSum1(input, target));
