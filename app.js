 var secondHand = document.querySelector('.second-hand');
 var minuteHand = document.querySelector('.min-hand');
 var hourHand = document.querySelector('.hour-hand');

 function setDate(){
  var now = new Date();

  var seconds = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  console.log(seconds);

  var mins = now.getMinutes();
  var minsDegrees = ((mins / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
  console.log(mins +'minutes');

  var hours = now.getHours();
  var hoursDegrees = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hours +'hours');



}

setInterval(setDate, 1000);
