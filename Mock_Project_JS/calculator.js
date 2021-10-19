$(document).ready(function () {
    var thisValue = 0;
    var valueOne = 0;
    var valueTwo = 0;
    /**Click number**/
    $('.key').click(function () {
        if ($('.key').hasClass('numberOne')) {
            thisValue = $(this).text();
            $('.valueOne').append(thisValue);
            valueOne = $('.valueOne').text();
        } else if ($('.key').hasClass('numberTwo')) {
            thisValue = $(this).text();
            $('.valueTwo').append(thisValue);
            valueTwo = $('.valueTwo').text();
        }
        $('span').each(function () {
            var newstr = $(this).text().substring(0, 9);
            $(this).text(newstr);
        });
    })
    /**Get symbol value**/
    $('.symbol').click(function () {
        if ($('.valueSymbol').length) {
            var symbol = $(this).html();
            $('.valueSymbol').text(symbol);
            symbol = $('.valueSymbol').text();
            $('.key').removeClass('numberOne').addClass('numberTwo');
        }
    })
    $('.return').click(function () { 
        ex = $('.math').val();
        $('.math').val(ex.substring(0, ex.length - 1));
    })
    
    /**Return result**/
    $('.equal').click(function () {
        if ((valueTwo == 0) && ($('.valueSymbol').text() == '÷')) {
            $('.result').text('Lỗi');
        } else {
            valueOne = parseFloat(valueOne);
            valueTwo = parseFloat(valueTwo);
            if ($('.valueSymbol').text() == '+') {
                valueOne += valueTwo;
            } else if ($('.valueSymbol').text() == '-') {
                valueOne = valueOne - valueTwo;
            } else if ($('.valueSymbol').text() == '×') {
                valueOne = valueOne * valueTwo;
            } else if ($('.valueSymbol').text() == '÷') {
                valueOne = valueOne / valueTwo;
            } else if ($('.valueSymbol').text() == '%') {
                $('.result').text(valueOne = valueOne / 100);
            } else if ($('.valueSymbol').text() == '±') {
                valueOne = valueOne * (-1);
            }
            if (Number.isInteger(valueOne)) {
                $('.result').text(valueOne);
            } else {
                $('.result').text(valueOne.toFixed(5));
            }
        }
    })
    /**Clear result**/
    $('.clear').click(function () {
        valueOne = 0
        $('.result').text(valueOne);
        $('.valueOne').text('');
        $('.valueSymbol').text('');
        $('.valueTwo').text('');
        $('.key').removeClass('numberTwo').addClass('numberOne');
    })
});
