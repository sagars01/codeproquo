function isValidSubsequence(array, sequence) {
    // Write your code here.
    let temp = [];
    array.forEach(element => {
        if (sequence.indexOf(element) > -1) {
            temp.push(element);
        }
    });

    let i = 0;
    let isTrue = true;
    while (i < sequence.length) {
        if (sequence[i] !== temp[i]) {
            isTrue = false;
        }
        i++;
    }
    console.log(isTrue);
    return isTrue;
}

const i1 = [5, 1, 22, 25, 6, -1, 8, 10];
const i2  = [1, 6, -1, 10];
isSubsequence(i1 , i2);
