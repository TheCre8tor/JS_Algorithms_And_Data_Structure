function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var val = arr1_1[_i];
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var val = arr2_1[_a];
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (var key in frequencyCounter1) {
        var squaredKey = Math.pow(parseInt(key), 2);
        if (!(squaredKey in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
var result = same([1, 3, 1], [9, 1, 1]);
console.log(result);
