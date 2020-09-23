/**
 * find the kth smallest element in the array of integers
 * 
 */

let stream = [7, 10, 4, 3, 20, 15];
let k = 10;

function kth(a, k) {
    let sortedArray = mergeSort(a);
    console.log(sortedArray);
    return k > a.length || k === 0 ? sortedArray[0] : sortedArray[k - 1];
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let part1 = arr.slice(0, mid);
    let part2 = arr.slice(mid);

    return merge(mergeSort(part1), mergeSort(part2));

}
/**
 * 
 * @param {*} a1 is a sorted array
 * @param {*} a2 is a sorted array
 */

function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let resultantArray = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultantArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultantArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Because there will be 1 item left
    return resultantArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

}

console.log(kth(stream, k));