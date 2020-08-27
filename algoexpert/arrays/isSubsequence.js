/**
 * Validate if an array is a subsequence of the another array
 */

function isSubsequence(sequence, subsequence) {
    let temp = [];
    sequence.forEach(element => {
        if (subsequence.indexOf(element) > -1) {
            temp.push(element);
        }
    });

    let i = 0;
    let isTrue = true;
    while (i < subsequence.length) {
        if (subsequence[i] !== temp[i]) {
            isTrue = false;
        }
        i++;
    }
    console.log(isTrue);
    return isTrue;
}
const i1 = [5, 1, 22, 25, 6, -1, 8, 10];
const i2 = [1, 6, 10 , -1];
isSubsequence(i1, i2);