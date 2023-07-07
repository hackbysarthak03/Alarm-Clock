var alarm = new Audio('Assets/alarm.mp3');

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

    if((Number.parseInt(hour.innerText) == Number.parseInt(h.innerText) && Number.parseInt(min.innerText) == Number.parseInt(m.innerText)) &&
    (Number.parseInt(sec.innerText) == Number.parseInt(s.innerText) && am_pm.innerText == t.innerText))
    {
        alarm.play();
        $('#del-btn').css("background-color","green").text('STOP');
    }
    


}, 1000);

$(".btn").click(function(){
    var h = $('#inp-hour').val();
    var m = $('#inp-min').val();
    var s = $('#inp-sec').val();
    var t = $('#inp-time').val()
    
    if((h<0 || h>12) || (m < 0 || m >60) || (s < 0 || s >60)){
    alert("Enter Correct Time !")
    
    }else{
        $('#h').text(h);
        $('#m').text(m)
        $('#s').text(s)
        $('#t').text(t);

    }
})

$('#del-btn').click(function(){

    if($(this).text() == 'STOP'){
    alarm.pause();
    alarm.load();
    $(this).css("background-color","rgb(193, 6, 6)").text('DEL');
    }


    $('#h').text('');
    $('#m').text('')
    $('#s').text('')
    $('#t').text('');
})