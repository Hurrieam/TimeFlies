function getNewDateAndTime() {
    var today = new Date();

    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();

    var hour = today.getHours();
    var minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + today.getMinutes();
    }
    var second = today.getSeconds();
    if (second < 10) {
        second = "0" + today.getSeconds();
    }
    var millisecond = today.getMilliseconds();
    if (millisecond < 10 && millisecond >= 0) {
        millisecond = "00" + today.getMilliseconds();
    }
    if (millisecond < 100 && millisecond >= 10) {
        millisecond = "0" + today.getMilliseconds();
    }

    var weekday = today.getDay();

    switch (weekday) {
        case 0:
            weekday = "星期天";
            break;
        case 1:
            weekday = "星期一";
            break;
        case 2:
            weekday = "星期二";
            break;
        case 3:
            weekday = "星期三";
            break;
        case 4:
            weekday = "星期四";
            break;
        case 5:
            weekday = "星期五";
            break;
        case 6:
            weekday = "星期六";
            break;
    }

    document.getElementById("date").innerHTML = year + "年" + month + "月" + day + "日";
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second;
    document.getElementById("milliseconds").innerHTML = millisecond;
    document.getElementById("weekday").innerHTML = weekday;
}

setInterval(getNewDateAndTime, 1);