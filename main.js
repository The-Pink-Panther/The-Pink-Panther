const localTime = setInterval(getTime, 1000);
function getTime(){
  const time = new Date();
  document.getElementById("clock").innerHTML = time.toLocaleTimeString();
}

function enlargedImg(x) {
  x.style.width = "1024px";
}

function normalImg(x) {
  x.style.width = "512px";
}