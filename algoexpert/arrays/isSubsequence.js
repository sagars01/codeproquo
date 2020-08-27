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
