/* -------------- DATE FORMAT START -------------- */
/*
    t => date --- 09, 21 etc
    d => days in small --- Sun, Mon etc
    D => days in big --- Sunday, Monday etc
    v => month -- 01,02,03
    m => months in small --- Jan, Feb etc
    M => months in big --- January, February etc
    y => years in small --- 19, 18 etc
    Y => years in big --- 2019, 2018 etc
    h => hours in 12 hrs format --- 01 - 12
    H => hours in 24 hrs format --- 09, 19 etc
    i => minutes --- 22, 03
    s => seconds --- 22, 03
    a => am/pm in small --- am, pm
    A => AM/PM in small --- AM, PM

*/
/* -------------- DATE FORMAT END -------------- */

export const monthsFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const daysFull = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const isLeapYr = (year) => (year || new Date().getFullYear()) % 4 === 0;
export const noOfDays = (year) => [31, (isLeapYr(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const monthDates = (month, year) => noOfDays(year)[month];
export const prefixZero = (val) => (val + "").length === 1 ? "0" + val : val;

export const getDaysInMonth = (month, year, param = 0) => {
    const days = [];
    const firstDay = new Date(year, month, 1).getDay() + param;
    for (let i = 0; i < firstDay; i++) {
        days.push(false);
    }
    const totalDays = monthDates(month, year);
    for (let i = 1; i <= totalDays; i++) {
        days.push(i);
    }
    return days;
}

export const getFormat = (date, format) => {
    date = new Date(date);
    if (!date) {
        return "Invalid date format";
    }
    let returnDate = "";
    format = format.split("");
    format.forEach(el => {
        returnDate += getFormatHelper(el, date);
    });
    return returnDate;
}

export const getFormatHelper = (param, date) => {
    const day = date.getDay();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    switch (param) {
        case "d":
            return days[day];
        case "D":
            return daysFull[day];
        case "m":
            return months[month];
        case "M":
            return monthsFull[month];
        case "v":
            return  prefixZero(month);
        case "y":
            return (year + "").substring(2, 4);
        case "Y":
            return year;
        case "h":
            return (hours > 12 ? prefixZero(hours - 12) : (hours === 0 ? 12 : prefixZero(hours)));
        case "H":
            return prefixZero(hours);
        case "i":
            const min = date.getMinutes();
            return prefixZero(min);
        case "s":
            const sec = date.getSeconds();
            return prefixZero(sec);
        case "a":
            return (hours >= 12 ? "pm" : "am");
        case "A":
            return (hours >= 12 ? "PM" : "AM");
        case "t":
            const dt = date.getDate();
            return prefixZero(dt);
        default:
            return param;
    }
}

export const getDateStringFromDMY = (day, month, year) => `${ year }-${ prefixZero(month + 1) }-${ prefixZero(day) }`; // YYYY-MM-DD

export const getDateStringFromDate = (date) => getDateStringFromDMY(date.getDate(), date.getMonth(), date.getFullYear()); // YYYY-MM-DD

export const getIosFormattedDate = (datestr) => {
    if (datestr.indexOf("T") === -1) {
        datestr = datestr.split(" ").join("T");
    }
    datestr = datestr.split(/[^0-9]/);
    return new Date (datestr[0],datestr[1]-1,datestr[2],datestr[3],datestr[4],datestr[5] );
}

export const getOtherDate = (date, param) => new Date(date.setDate(date.getDate() + param))

export const getRevDate = (date) => date.split("-").reverse().join("-");

export const getValByKey = (obj, key) => {
    let returnValue = obj;
    const indexes = key.split('.');
    if (indexes.length === 1) {
        return obj[key] || 0;
    }
    for (const keys of indexes) {
        returnValue = returnValue[keys] || 0;
    }

    return returnValue;
}

export const  getStringToTS = (val) => {
    return val.split(" ").join("T");
}