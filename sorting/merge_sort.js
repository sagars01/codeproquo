/***
 * Sort an array using merge sort
 * array - [ 5 , 3, 7 , 10, 21, 13 , 17]
 */

function mergeSort(left, right) {

}

function singleValueSort(left, right) {
    let temp;
    if (left[0] > right[0]) {
        temp = left[0];
        left[0] = right[0];
        right[0] = temp;
    }
    const returnValue = mergeArray(left, right);
    return returnValue;
}

function mergeArray(left, right) {
    return left.concat(right);
}