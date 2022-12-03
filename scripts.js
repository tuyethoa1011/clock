
function show_clock()
{   
    const today =  new Date();
    const clock = {
        second: today.getSeconds(),
        minute: checkTime(today.getMinutes()),
        hour: function()
        {
            var checkhour = checkTime(today.getHours());
            if(checkhour>12)
            {
                checkhour = checkhour - 12;
            }
            else checkhour = checkhour;
            return checkhour;
        },

        ampm: function()
        {
            if(today.getHours()<12)
            {
                return "AM";
            }
            else return "PM";
        }

    }

    document.getElementById("time").innerHTML = (clock.hour() + ":" + clock.minute + ":" + clock.second + " " + clock.ampm());
    setTimeout(show_clock, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }