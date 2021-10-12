function sunday() {
    var date = new Date('2021/10/12');
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var current_day = date.getDay();
    var nextSunday = date.getDate() + (7 - current_day);
    console.log('Ngày chủ nhật tiếp theo là '+ year + '/' + month + '/' + nextSunday);
}
sunday();