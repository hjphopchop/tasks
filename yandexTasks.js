/*
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 
module.exports = function (hours, minutes, interval) {
    if (hours <0 || hours >23)
    {
        return false;
    }
    if (minutes <0 || minutes >59)
    {
        return false;
    }
    var counthours = 0;
    minutes = minutes + interval;
    while (minutes>59)
    {
    counthours++;
    minutes = minutes - 60;
    }
    hours = hours + counthours;
    while(hours>23)
    {
    hours = hours -24;
    }
    return ((hours/10>1)? hours: "0" + hours) + ":" + ((minutes/10>1)? minutes: "0"+ minutes);
    };
    */