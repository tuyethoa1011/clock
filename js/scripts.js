
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
    if (i < 10) {i = "0" + i};  
    return i;
}

function change_page()
{
    window.location.href = "count_down.html";
}



const countdown = 
{
    h: null,
    s: null,
    m: null,
    timeout: null
}


function start()
{   
    if(countdown.h == null)
        {
            countdown.h = parseInt(document.getElementById("gio").value);
            countdown.m = parseInt(document.getElementById("phut").value);
            countdown.s = parseInt(document.getElementById("giay").value);
        }

        if(countdown.s === -1){
            countdown.m = countdown.m - 1;
            countdown.s = 59;
        }

        if(countdown.m === -1){
            countdown.h = countdown.h - 1;
            countdown.m = 59;
        }

        if(countdown.h === -1){
            clearTimeout(countdown.timeout);
            window.alert("Hết giờ")
            return false;
        }

        //Display time
        document.getElementById("h").innerText = checkTime(countdown.h.toString());
        document.getElementById("m").innerText = checkTime(countdown.m.toString());
        document.getElementById("s").innerText = checkTime(countdown.s.toString());

        //decre secs then call function again after 1 sec
        countdown.timeout = setTimeout( function(){
            countdown.s--;
            start();
        },1000);
}

function stop()
{
    clearTimeout(countdown.timeout);
}


