function getList(input) {
    var index = input.indexOf('cherries, limes, oranges, apples.');
    var bridge = input.slice(index, input.length - 1);
    return output = bridge.split(', ');
}
console.log(getList('This is a list of items: cherries, limes, oranges, apples.'));