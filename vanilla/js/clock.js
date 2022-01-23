const clock = document.querySelector("#clock");
clock.innerText = "lalala";

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock, 1000); //set Inerval은 function , millisecond 를 받음. 해석하자면 1초에 한번씩 getClock function 호출
