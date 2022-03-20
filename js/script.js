const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNum = document.querySelector('.hours'),
    secondsNum = document.querySelector('.seconds'),
    millisecondsNum = document.querySelector('.milliseconds'),
    minutesNum = document.querySelector('.minutes');

function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6, // 0 -> 360
        minutes = time.getMinutes() * 6, // 0 -> 360
        hours = time.getHours() * 30; // 0 -> 720

    sec.style = `transform: rotate(${seconds}deg)`
    min.style = `transform: rotate(${minutes}deg)`
    hour.style = `transform: rotate(${hours}deg)`

    hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    // secondsNum.innerHTML = time.getSeconds() < 10 ? '0' + time.getSeconds() : time.getSeconds()
    // if(time.getMilliseconds() < 10 ){
    //     millisecondsNum.innerHTML = '00' + time.getMilliseconds()
    // }else if(time.getMilliseconds() < 100){
    //     millisecondsNum.innerHTML = '0' + time.getMilliseconds()
    // } else if(time.getMilliseconds() > 100){
    //     millisecondsNum.innerHTML =time.getMilliseconds();
    // }
    minutesNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    // setTimeout(функция, миллисекунды) - делает задержку вызова функции
    setTimeout(() => clock(), 10)
}

clock()


const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault()
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active')
        }
        tab(this, tabs[i])
    })
}
function tab(el, arr) {
    el.classList.add('active')
    arr.classList.add('active')
}


// Секундомер
const secStop = document.querySelector('.stopwatch__seconds'),
    mlsecStop = document.querySelector('.stopwatch__mlscds'),
    minStop = document.querySelector('.stopwatch__minutes'),
    hourStop = document.querySelector('.stopwatch__hours'),
    btn = document.querySelector('.stopwatch__btn'),
    stopb = document.querySelector('.stop__btn'),
    pause = document.querySelector('.pausewatch__btn'),
    ind = document.querySelector('.tabsLink__span');;
let milliseconds = 0,
    scnds = 0,
    m = 0,
    h = 0;
    let p;

btn.addEventListener('click', function () {
    clearInterval(p);
    p = setInterval(() => {
        ind.classList.remove('active_clear');
        ind.classList.add('active');
        milliseconds++;
        mlsecStop.innerHTML = milliseconds < 10 ? '0' + milliseconds : milliseconds
        if (milliseconds == 100) {
            scnds++;
            secStop.innerHTML = scnds < 10 ? '0' +scnds : scnds;
            milliseconds = 0;
        } else if (scnds == 60) {
            m++;
            minStop.innerHTML = m < 10 ? '0' + m : m;
            secStop.innerHTML = scnds == 60 ? '00' : scnds;
            scnds = 0;
        } else if (m == 60) {
            h++;
            hourStop.innerHTML = h < 10 ? '0' + h : h;
            minStop.innerHTML = m == 60 ? '00'  : m;
            m = 0;
        }
    }, 10);
})
pause.addEventListener('click', function(){
    clearInterval(p);
    ind.classList.remove('active');
    ind.classList.add('active_clear');
})
stopb.addEventListener('click', function(){
    clearInterval(p);
    ind.classList.remove('active_clear');
    ind.classList.remove('active');
    milliseconds = 0;
    scnds = 0;
    m = 0;
    h = 0;
    mlsecStop.innerHTML = milliseconds;
    secStop.innerHTML = scnds;
    minStop.innerHTML = m;
    hourStop.innerHTML = h;

})

