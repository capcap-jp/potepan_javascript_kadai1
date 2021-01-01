let timer = document.getElementById("timer");
let start_stop = document.getElementById("start_stop");
let reset = document.getElementById("reset");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

let newMinutes = 0;
let newSeconds = 0;
let newMilliseconds = 0;

let status = "stop";    // 最初のステータスはstopとする
let interval;


function countUp() {
  milliseconds++;
  if(milliseconds/100 == 1){
    seconds++;
    milliseconds = 0;
  }

  if(seconds/60 == 1){
    minutes++;
    seconds = 0;
  }

  // 10分未満のときは、前に0をつけて二桁にする
  if (minutes<10){
    newMinutes = "0" + minutes;
  }else{
    newMinutes = minutes;
  }

  // 10秒未満のときは、前に0をつけて二桁にする
  if (seconds<10){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds;
  }

  // 100ミリ秒未満のときは、前に0をつけて二桁にする
  if (milliseconds<10){
    newMilliseconds = "0" + seconds;
  }else{
    newMilliseconds = milliseconds;
  }

  // 表示時間の更新
  timer.innerHTML =newMinutes + " : " + newSeconds + " : " + newMilliseconds;
}

// スタート・ストップボタンを押したとき
start_stop.addEventListener('click', () => {
  if(status == "stop"){
    interval = setInterval(countUp, 10);
    start_stop.innerHTML = "ストップ"
    status = "start";
  }else {
    clearInterval(interval);
    start_stop.innerHTML = "スタート"
    status = "stop";
  }
});

// リセットボタンを押したとき
reset.addEventListener('click', () => {
  clearInterval(interval);
  start_stop.innerHTML = "スタート"
  status = "stop";
  timer.innerHTML = "00 : 00 : 00"
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
});
