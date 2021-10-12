function deleteDupplicates(value) {
    var uniqueSet = new Set(value);
    return [...uniqueSet];
}
console.log(deleteDupplicates([2, 42, 5, 42, 304, 1, 13, 2, 13]));