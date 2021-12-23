let myName = prompt("Lütfen Adidizi Giriniz:  ");

Name = document.querySelector("#myName");

Name.innerHTML = `${Name.innerHTML} <small style="color:#388902"> ${myName}</small>`;

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDay();

  switch (d) {
    case 0:
      d = "Pazar";
      break;
    case 1:
      d = "Pazartesi";
      break;
    case 2:
      d = "Salı";
      break;
    case 3:
      d = "Çarşamba";
      break;
    case 4:
      d = "Perşembe";
      break;
    case 5:
      d = "Cuma";
      break;
    case 6:
      d = "Cumartesi";
      break;
  }
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("myClock").innerHTML =
    h + ":" + m + ":" + s + " " + d;
  t = setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

startTime();