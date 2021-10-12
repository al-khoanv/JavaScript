function sumArray(value) {
    var sum = 0;
    for(var i = 0; i < value.length; i++) {
        sum += value[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4]));