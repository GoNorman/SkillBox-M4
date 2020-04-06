function formatDate(date) {
    let day = date.getDate();
    if (day < 10) day = '0' + day;
    let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
    let dayWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    let year = date.getFullYear();
    return day + ' ' + month[date.getMonth()] + ' ' + year + ' года, ' + dayWeek[date.getDay()] + ', ';
}

function addZero(num) {
    if (num >= 0 && num <= 9) num = '0' + num;
    return num;
}

function printNumerator(num, array) {
    let result = num % 10;
    if (result == 1 && num != 11) {
        return num + ' ' + array[0];
    } else if (result == 2 && num == 12) {
        return num + ' ' + array[2];
    } else if ((result > 1 && result < 5) && (num > 12 && num < 15)) {
        return num + ' ' + array[2];
    } else if (result > 1 && result < 5) { 
        return num + ' ' + array[1];
    } else {
        return num + ' ' + array[2];
    }
}

function time(hh, mm, ss) {
    let hour = printNumerator(hh, ['час', 'часа', 'часов']);
    let minut = printNumerator(mm, ['минута', 'минуты', 'минут']);
    let second = printNumerator(ss, ['секунда', 'секунды', 'секунд']);
    return hour + ' ' + minut + ' ' + second;
}
setInterval(() => {
    let data = new Date();
    console.log(formatDate(data) + time(addZero(data.getHours()), addZero(data.getMinutes()), addZero(data.getSeconds())));
}, 1000);