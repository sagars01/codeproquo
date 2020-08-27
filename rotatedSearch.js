/**
 * @description https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/
 */

let r_array = [5, 6, 7, 8, 9, 10, 1, 2, 3];
let key = 3; // To Find

function name(collection, key, low, high) {
    if (collection.length || !collection) {
        return -1;
    }
    if (collection.length === 1) {
        if (collection[0] === key) {
            return 0;
        } else {
            return -1;
        }
    }
    let mid = Math.floor((collection.length) / 2);
    let low, high;
    if (collection[mid] < collection[0]) {

    }
}

function iterateOverArray(collection) {

}