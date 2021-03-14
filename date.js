
module.exports = getDate;

function getDate() {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day =  today.toLocaleDateString("en-US", options);

    return day;
// let currentDay = today.getDay();
// let day = "";
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// day = currentDay === 6 || currentDay === 0 ? dayNames[currentDay] : dayNames[currentDay];
}