

setInterval(() => {

    let time = new Date();
    let hour = document.getElementById('hour')
    let min = document.getElementById('min')
    let sec = document.getElementById('sec')
    let am_pm = document.getElementById('am-pm')

    if(time.getHours() > 12 && time.getHours()<24){
        am_pm.innerText = 'PM'
        hour.innerText = time.getHours()-12;
    }
    else{
        hour.innerText = time.getHours();
        am_pm.innerText = 'AM'
    }

    min.innerText = time.getMinutes();
    sec.innerText = time.getSeconds();



}, 1000);