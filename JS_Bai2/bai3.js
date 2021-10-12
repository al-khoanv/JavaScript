function compare(date1, date2) {
    if (Date.parse(date1) - Date.parse(date2) > 0) {
        console.log('date1 lớn hơn date2');
    } else if (Date.parse(date1) - Date.parse(date2) < 0) {
        console.log('date1 bé hơn date2');
    } else {
        console.log('date1 bằng date2');
    }
}
compare(new Date(2021,10,01,10,00,00),new Date(2020,09,09,11,00,00))