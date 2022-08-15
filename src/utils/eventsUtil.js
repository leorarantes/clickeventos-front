export function getDateTime(timestamp) {
    const months = {0: "Janeiro", 1: "Feveireiro", 2: "Março", 3: "Abril", 4: "Maio", 5: "Junho", 6: "Julho", 7: "Agosto", 8: "Setembro", 9: "Outubro", 10: "Novembro", 11: "Dezembro"};

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