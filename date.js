
exports.getDate = function () {
    const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", options);

// let currentDay = today.getDay();
// let day = "";
// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//
// day = currentDay === 6 || currentDay === 0 ? dayNames[currentDay] : dayNames[currentDay];
}

exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: "long"
    }
    return today.toLocaleDateString("en-US", options);
}