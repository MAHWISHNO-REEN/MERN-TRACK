//variables 

const startbtn = document.querySelector('#startStopBtn');
const resetbtn = document.querySelector('#resetBtn');

//varible for time values

let seconds =0;
let minutes = 0;
let hours = 0;

// variable for leading 0

let leadingseconds =0;
let leadingminutes = 0;
let leadinghours = 0;

// variable for set interval & timerstatus

let timerinterval = null;
let timerstatus = "stopped";

//stop watch function 

function StopWatch() {

  seconds++

  if (seconds /60 ===1) {
    seconds = 0 ;
    minutes++;

    if (minutes /60 ===1) {
      minutes = 0 ;
      hours++;
    }
  }

  if (seconds<10) {
    leadingseconds = "0" + seconds.toString();
  
  }else {
    leadingseconds = seconds;
  }
  if (minutes<10) {
    leadingminutes = "0" + minutes.toString();
  
  }else {
    leadingminutes = minutes;
  }
  if (hours<10) {
    leadinghours = "0" + hours.toString();
  
  }else {
    leadinghours = hours;
  }

  let displaytimer = document.getElementById('timer').innerText= leadinghours + ":" + leadingminutes + ":" + leadingseconds;
}

//window.setInterval(StopWatch,1)

startbtn.addEventListener('click', function() {
   if (timerstatus === " stopped") {
    timerinterval = window.setInterval(StopWatch, 1000);
    document.getElementById('startbtn').innerHTML = '<i class = "fa-solid fa-pause" id= "pause"></i>';
    timerstatus = "started";

   }else {
    window.clearInterval(timerinterval);
    document.getElementById('startbtn').innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timerstatus= "stopped";
   }
});

resetbtn.addEventListener('click',function() {

  window.clearInterval(timerinterval);
  seconds = 0;
  minutes = 0;
  hoours = 0;

  document.getElementById('timer').innerHTML = "00:00:00";
});