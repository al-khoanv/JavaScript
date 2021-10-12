function outside(a) {
    function inside(b) {
        return a + b;
    }
    return inside;
}
console.log(outside(1)(4));