function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);

  let hours = (time / 3600) % 12;
  let minutes = (time / 60) % 60;
  let seconds = time % 60;

  let hourHand = document.querySelector("#hour");
  let minuteHand = document.querySelector("#minutes");
  let secondHand = document.querySelector("#seconds");

  let hourDegrees = hours * (360 / 12) + 180;
  let minuteDegrees = minutes * (360 / 60) + 180;
  let secondDegrees = seconds * (360 / 60) + 180;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}, 1000);
