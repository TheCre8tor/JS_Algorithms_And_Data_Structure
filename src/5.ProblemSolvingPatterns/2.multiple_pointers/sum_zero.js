function sumZero(arr) {
    var left = 0;
    var right = arr.length - 1;
    var result = [];
    while (left < right) {
        var sum = arr[left] + arr[right];
        if (sum === 0) {
            result.push(arr[left], arr[right]);
            break;
        }
        else if (sum > 0) {
            console.log(left);
            console.log(right);
            console.log(sum);
            right--;
        }
        else {
            left++;
        }
    }
    return result;
}
var results = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
console.log(results);
