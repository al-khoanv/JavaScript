function checkVarriable(value, array) {
    var index = array.indexOf(value);
    if ( index < 0 ) {
        return ('Không tìm thấy giá trị');
    } else {
        array.splice(index, 1);
        return [...array];
    }
}
console.log(checkVarriable(2, [2, 6, 8, 4]));
console.log(checkVarriable(3, [2, 6, 8, 4]));