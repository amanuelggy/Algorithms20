//Recursion:
// A function that returns the sum using recursion
function iSum(num) {
    if (num == 1) {
        return num;
    }
    else {
        return iSum(num - 1) + num;
    }
}
console.log(iSum(5));