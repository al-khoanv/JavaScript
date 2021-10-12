function checkVariable(a) {
    if ((typeof a) == 'string') {
        console.log('Biến đã cho là string!');
    }else {
        console.log('Biến đã cho không phải là string!');
    }
}
checkVariable('Khoa');
