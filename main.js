function startTime(){
    let today = new Date();
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    let time = setTimeout(()=>{
        startTime()
    }, 500);

    function checkTime(i){
        if(i<10){
            i = "0" + i;
        }
        return i
    }
}