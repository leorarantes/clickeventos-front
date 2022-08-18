export function getDateTime(timestamp) {
    const months = {0: "JAN", 1: "FEV", 2: "MAR", 3: "ABR", 4: "MAI", 5: "JUN", 6: "JUL", 7: "AGO", 8: "SET", 9: "OUT", 10: "NOV", 11: "DEZ"};

    const minute = timestamp.getMinutes();
    const hour = timestamp.getHours();
    const day = timestamp.getDate();
    const month = months[timestamp.getMonth()];
    const year = timestamp.getFullYear();

    return {
        minute,
        hour,
        day,
        month,
        year
    };
}

export function getTimestamp(dateTimeObj) {
    let dateTime = new Date();

    // set date
    dateTime.setDate(dateTimeObj.day);
    dateTime.setMonth(dateTimeObj.month);
    dateTime.setFullYear(dateTimeObj.year);
    
    // set time
    dateTime.setHours(dateTimeObj.hour);
    dateTime.setMinutes(dateTimeObj.minute);
    dateTime.setSeconds(0);

    return dateTime;
}