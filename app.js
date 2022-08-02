let ternaryHoursP2 = '';
let ternaryHoursP1 = '';
let ternaryHoursP0 = '';
let ternaryMinutesP3 = '';
let ternaryMinutesP2 = '';
let ternaryMinutesP1 = '';
let ternaryMinutesP0 = '';
let ternarySecondsP3 = '';
let ternarySecondsP2 = '';
let ternarySecondsP1 = '';
let ternarySecondsP0 = '';

let getClock = () => {
  let time = Date().split(' ')
  return time[4];
}

let getHours = () => {
  let hours = Date().split(' ')[4].split(':')[0];
  return hours;
}

let getMinutes = () => {
  let minutes = Date().split(' ')[4].split(':')[1];
  return minutes;
}

let getSeconds = () => {
  let seconds = Date().split(' ')[4].split(':')[2];
  return seconds;
}
//console.log('Time '+getClock())
let GetTernaryHours = (hours) => {
  let hoursRemaining = hours;
  if (hoursRemaining >= 18){
    ternaryHoursP2 = '2';
    hoursRemaining -= 18;
  }
  else if (hoursRemaining >= 9) {
    ternaryHoursP2 = '1';
    hoursRemaining -= 9;
  }
  else {
    ternaryHoursP2 = '0';
  }
  if (hoursRemaining >= 6){
    ternaryHoursP1 = '2';
    hoursRemaining = (hoursRemaining - 6)
  }
  else if (hoursRemaining >= 3){
    ternaryHoursP1 = '1';
    hoursRemaining = (hoursRemaining - 3)
  }
  else {
    ternaryHoursP1 = '0';
  }
  if (hoursRemaining >= 2){
    ternaryHoursP0 = '2';
    hoursRemaining = (hoursRemaining - 2)
  } else if (hoursRemaining >= 1) {
    ternaryHoursP0 = '1';
    hoursRemaining = (hoursRemaining - 1)
  } else {
    ternaryHoursP0 = '0';
  }
  return (`${ternaryHoursP2}${ternaryHoursP1}${ternaryHoursP0}`)
}

let GetTernaryMinutes = (minutes) => {
  let minutesRemaining = minutes;
  if (minutesRemaining >= 54){
    ternaryMinutesP3 = '2'
    minutesRemaining = (minutesRemaining - 54)
  }
  else if (minutesRemaining >= 27){
    ternaryMinutesP3 = '1'
    minutesRemaining = (minutesRemaining - 27)
  }
  else {
    ternaryMinutesP3 = '0'
  }
  if (minutesRemaining >= 18){
    ternaryMinutesP2 = '2';
    minutesRemaining -= 18;
  }
  else if (minutesRemaining >= 9) {
    ternaryMinutesP2 = '1';
    minutesRemaining -= 9;
  }
  else {
    ternaryMinutesP2 = '0';
  }
  if (minutesRemaining >= 6){
    ternaryMinutesP1 = '2';
    minutesRemaining -= 6;
  }
  else if (minutesRemaining >= 3){
    ternaryMinutesP1 = '1';
    minutesRemaining -= 3;
  }
  else {
    ternaryMinutesP1 = '0';
  }
  if (minutesRemaining >= 2){
    ternaryMinutesP0 = '2';
    minutesRemaining -= 2;
  } else if (minutesRemaining >= 1) {
    ternaryMinutesP0 = '1';
    minutesRemaining -= 1
  } else {
    ternaryMinutesP0 = '0';
  }
  return (`${ternaryMinutesP3}${ternaryMinutesP2}${ternaryMinutesP1}${ternaryMinutesP0}`)
}

let GetTernarySeconds = (seconds) => {
  let secondsRemaining = seconds;
  if (secondsRemaining >= 54){
    ternarySecondsP3 = '2'
    secondsRemaining -= 54;
  }
  else if (secondsRemaining >= 27){
    ternarySecondsP3 = '1'
    secondsRemaining -= 27;
  }
  else {
    ternarySecondsP3 = '0'
  }
  if (secondsRemaining >= 18){
    ternarySecondsP2 = '2';
    secondsRemaining -= 18;
  }
  else if (secondsRemaining >= 9) {
    ternarySecondsP2 = '1';
    secondsRemaining -= 9;
  }
  else {
    ternarySecondsP2 = '0';
  }
  if (secondsRemaining >= 6){
    ternarySecondsP1 = '2';
    secondsRemaining -= 6;
  }
  else if (secondsRemaining >= 3){
    ternarySecondsP1 = '1';
    secondsRemaining -= 3;
  }
  else {
    ternarySecondsP1 = '0';
  }
  if (secondsRemaining >= 2){
    ternarySecondsP0 = '2';
    secondsRemaining -= 2;
  } else if (secondsRemaining >= 1) {
    ternarySecondsP0 = '1';
    secondsRemaining -= 1
  } else {
    ternarySecondsP0 = '0';
  }
  return (`${ternarySecondsP3}${ternarySecondsP2}${ternarySecondsP1}${ternarySecondsP0}`)
}
//console.log(`Ternary Clock: ${GetTernaryHours(getHours())}:${GetTernaryMinutes(getMinutes())}:${GetTernarySeconds(getSeconds())}`);
window.addEventListener('load', (event) => {
  document.getElementById('clock-hours').innerHTML = GetTernaryHours(getHours())
  document.getElementById('clock-minutes').innerHTML = GetTernaryMinutes(getMinutes())
  document.getElementById('clock-seconds').innerHTML = GetTernarySeconds(getSeconds())
  setInterval(() => {
    document.getElementById('clock-hours').innerHTML = GetTernaryHours(getHours())
    document.getElementById('clock-minutes').innerHTML = GetTernaryMinutes(getMinutes())
    document.getElementById('clock-seconds').innerHTML = GetTernarySeconds(getSeconds())
  }, "1000")

});
