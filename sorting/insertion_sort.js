/**
 * Algorithm -
 * 1 Visit every element once
 * 2 Check if previous element of the current element is lesser than the current element
 * 3 If true () { swap places} and again step 2
 * 4 Else move forward
 * 
 * Best Time : O(n) - sorted array
 * Worst Time: O(n^2) - reverse sorted array.
 */

const sortInput = [21, 7 , 7];
// Insertion Sort Approach

function insertionSort(input) {
    if (input.length === 1) {
        return input;
    }
    let swapContainer;

    for (let i = 1; i < input.length; i++) {
        if (input[i - 1] > input[i]) {
            while (input[i - 1] > input[i] && i > 0) {
                swapContainer = input[i - 1];
                input[i - 1] = input[i];
                input[i] = swapContainer;
            }
        }
    }

    return input;
}

insertionSort(sortInput);