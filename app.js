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
let binaryHoursP4 = '';
let binaryHoursP3 = '';
let binaryHoursP2 = '';
let binaryHoursP1 = '';
let binaryHoursP0 = '';
let binaryMinutesP5 = '';
let binaryMinutesP4 = '';
let binaryMinutesP3 = '';
let binaryMinutesP2 = '';
let binaryMinutesP1 = '';
let binaryMinutesP0 = '';
let binarySecondsP5 = '';
let binarySecondsP4 = '';
let binarySecondsP3 = '';
let binarySecondsP2 = '';
let binarySecondsP1 = '';
let binarySecondsP0 = '';

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
let GetBinaryHours = (hours) => {
  let hoursRemaining = hours;
  if (hoursRemaining >= 16){
    binaryHoursP4 = '1';
    hoursRemaining -= 16;
  }
  else {
    binaryHoursP4 = '0';
  }
  if (hoursRemaining >= 8) {
    binaryHoursP3 = '1';
    hoursRemaining -= 8;
  }
  else {
    binaryHoursP3 = '0';
  }
  if (hoursRemaining >= 4) {
    binaryHoursP2 = '1';
    hoursRemaining -= 8;
  }
  else {
    binaryHoursP2 = '0';
  }
  if (hoursRemaining >= 2) {
    binaryHoursP1 = '1';
    hoursRemaining -= 8;
  }
  else {
    binaryHoursP1 = '0';
  }
  if (hoursRemaining >= 1) {
    binaryHoursP0 = '1';
    hoursRemaining -= 8;
  }
  else {
    binaryHoursP0 = '0';
  }
  return (`${binaryHoursP4}${binaryHoursP3}${binaryHoursP2}${binaryHoursP1}${binaryHoursP0}`)
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
//
let GetBinaryMinutes = (minutes) => {
  let minutesRemaining = minutes;
  if (minutesRemaining >= 32){
    binaryMinutesP5 = '1'
    minutesRemaining = (minutesRemaining - 32)
  }
  else {
    binaryMinutesP5 = '0'
  }
  if (minutesRemaining >= 16){
    binaryMinutesP4 = '1'
    minutesRemaining = (minutesRemaining - 16)
  }
  else {
    binaryMinutesP4 = '0'
  }
  if (minutesRemaining >= 8){
    binaryMinutesP3 = '1'
    minutesRemaining = (minutesRemaining - 8)
  }
  else {
    binaryMinutesP3 = '0'
  }
  if (minutesRemaining >= 4){
    binaryMinutesP2 = '1'
    minutesRemaining = (minutesRemaining - 4)
  }
  else {
    binaryMinutesP2 = '0'
  }
  if (minutesRemaining >= 2){
    binaryMinutesP1 = '1'
    minutesRemaining = (minutesRemaining - 2)
  }
  else {
    binaryMinutesP1 = '0'
  }
  if (minutesRemaining >= 1){
    binaryMinutesP0 = '1'
    minutesRemaining = (minutesRemaining - 1)
  }
  else {
    binaryMinutesP0 = '0'
  }
  return (`${binaryMinutesP5}${binaryMinutesP4}${binaryMinutesP3}${binaryMinutesP2}${binaryMinutesP1}${binaryMinutesP0}`)
}
//

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
let GetBinarySeconds = (seconds) => {
  let secondsRemaining = seconds;
  if (secondsRemaining >= 32){
    binarySecondsP5 = '1'
    secondsRemaining = (secondsRemaining - 32)
  }
  else {
    binarySecondsP5 = '0'
  }
  if (secondsRemaining >= 16){
    binarySecondsP4 = '1'
    secondsRemaining = (secondsRemaining - 16)
  }
  else {
    binarySecondsP4 = '0'
  }
  if (secondsRemaining >= 8){
    binarySecondsP3 = '1'
    secondsRemaining = (secondsRemaining - 8)
  }
  else {
    binarySecondsP3 = '0'
  }
  if (secondsRemaining >= 4){
    binarySecondsP2 = '1'
    secondsRemaining = (secondsRemaining - 4)
  }
  else {
    binarySecondsP2 = '0'
  }
  if (secondsRemaining >= 2){
    binarySecondsP1 = '1'
    secondsRemaining = (secondsRemaining - 2)
  }
  else {
    binarySecondsP1 = '0'
  }
  if (secondsRemaining >= 1){
    binarySecondsP0 = '1'
    secondsRemaining = (secondsRemaining - 1)
  }
  else {
    binarySecondsP0 = '0'
  }
  return (`${binarySecondsP5}${binarySecondsP4}${binarySecondsP3}${binarySecondsP2}${binarySecondsP1}${binarySecondsP0}`)
}
//console.log(`Ternary Clock: ${GetTernaryHours(getHours())}:${GetTernaryMinutes(getMinutes())}:${GetTernarySeconds(getSeconds())}`);
selectedClockHours = getHours();
selectedClockMinutes = getMinutes();
selectedClockSeconds = getSeconds();

window.addEventListener('load', (event) => {
  document.getElementById('clock-hours-0').innerHTML = getHours()[0]
  document.getElementById('clock-hours-1').innerHTML = getHours()[1]
  document.getElementById('clock-minutes-0').innerHTML = getMinutes()[0]
  document.getElementById('clock-minutes-1').innerHTML = getMinutes()[1]
  document.getElementById('clock-seconds-0').innerHTML = getSeconds()[0]
  document.getElementById('clock-seconds-1').innerHTML = getSeconds()[1]
  setInterval(() => {
    document.getElementById('clock-hours-1').innerHTML = getHours()[1]
    document.getElementById('clock-hours-0').innerHTML = getHours()[0]
    document.getElementById('clock-minutes-1').innerHTML = getMinutes()[1]
    document.getElementById('clock-minutes-0').innerHTML = getMinutes()[0]
    document.getElementById('clock-seconds-1').innerHTML = getSeconds()[1]
    document.getElementById('clock-seconds-0').innerHTML = getSeconds()[0]
    document.getElementById('binary-clock-hours-4').innerHTML = GetBinaryHours(getHours())[4]
    document.getElementById('binary-clock-hours-3').innerHTML = GetBinaryHours(getHours())[3]
    document.getElementById('binary-clock-hours-2').innerHTML = GetBinaryHours(getHours())[2]
    document.getElementById('binary-clock-hours-1').innerHTML = GetBinaryHours(getHours())[1]
    document.getElementById('binary-clock-hours-0').innerHTML = GetBinaryHours(getHours())[0]
    document.getElementById('binary-clock-minutes-5').innerHTML = GetBinaryMinutes(getMinutes())[5]
    document.getElementById('binary-clock-minutes-4').innerHTML = GetBinaryMinutes(getMinutes())[4]
    document.getElementById('binary-clock-minutes-3').innerHTML = GetBinaryMinutes(getMinutes())[3]
    document.getElementById('binary-clock-minutes-2').innerHTML = GetBinaryMinutes(getMinutes())[2]
    document.getElementById('binary-clock-minutes-1').innerHTML = GetBinaryMinutes(getMinutes())[1]
    document.getElementById('binary-clock-minutes-0').innerHTML = GetBinaryMinutes(getMinutes())[0]
    document.getElementById('binary-clock-seconds-5').innerHTML = GetBinarySeconds(getSeconds())[5]
    document.getElementById('binary-clock-seconds-4').innerHTML = GetBinarySeconds(getSeconds())[4]
    document.getElementById('binary-clock-seconds-3').innerHTML = GetBinarySeconds(getSeconds())[3]
    document.getElementById('binary-clock-seconds-2').innerHTML = GetBinarySeconds(getSeconds())[2]
    document.getElementById('binary-clock-seconds-1').innerHTML = GetBinarySeconds(getSeconds())[1]
    document.getElementById('binary-clock-seconds-0').innerHTML = GetBinarySeconds(getSeconds())[0]
    document.getElementById('ternary-clock-hours-2').innerHTML = GetTernaryHours(getHours())[2]
    document.getElementById('ternary-clock-hours-1').innerHTML = GetTernaryHours(getHours())[1]
    document.getElementById('ternary-clock-hours-0').innerHTML = GetTernaryHours(getHours())[0]
    document.getElementById('ternary-clock-minutes-3').innerHTML = GetTernaryMinutes(getMinutes())[3]
    document.getElementById('ternary-clock-minutes-2').innerHTML = GetTernaryMinutes(getMinutes())[2]
    document.getElementById('ternary-clock-minutes-1').innerHTML = GetTernaryMinutes(getMinutes())[1]
    document.getElementById('ternary-clock-minutes-0').innerHTML = GetTernaryMinutes(getMinutes())[0]
    document.getElementById('ternary-clock-seconds-3').innerHTML = GetTernarySeconds(getSeconds())[3]
    document.getElementById('ternary-clock-seconds-2').innerHTML = GetTernarySeconds(getSeconds())[2]
    document.getElementById('ternary-clock-seconds-1').innerHTML = GetTernarySeconds(getSeconds())[1]
    document.getElementById('ternary-clock-seconds-0').innerHTML = GetTernarySeconds(getSeconds())[0]
  }, "1000")
  document.getElementById('binary-div').style.display="none";
  document.getElementById('ternary-div').style.display="none";

  const clockradbase10 = document.querySelector('#base10-rad');
  clockradbase10.addEventListener('change', function(e){
    document.getElementById('binary-div').style.display = "none";
    document.getElementById('ternary-div').style.display = "none";
    document.getElementById('base10-div').style.display = "block";
  });
  const clockradbinary = document.querySelector('#binary-rad');
  clockradbinary.addEventListener('change', function(e){
    document.getElementById('base10-div').style.display = "none";
    document.getElementById('binary-div').style.display = "block";
    document.getElementById('ternary-div').style.display = "none";
  });
  const clockradternary = document.querySelector('#ternary-rad');
  clockradternary.addEventListener('change', function(e){
    document.getElementById('base10-div').style.display = "none";
    document.getElementById('binary-div').style.display = "none";
    document.getElementById('ternary-div').style.display = "block";
  });
});

/*
const clocksel = document.querySelector('#clock-select');
clocksel.addEventListener('change', function(e){
  const base10div = document.getElementById('base10-div');
  const binarydiv = document.getElementById('binary-div');
  const ternarydiv = document.getElementById('ternary-div');
  let selection = e.target.value;
  //console.log(`${selection}`)
  if (selection === "base10"){
    document.getElementById('base10-div').style.display = "block";
    document.getElementById('binary-div').style.display = "none";
    document.getElementById('ternary-div').style.display = "none";
  } else if(selection === "binary"){
    document.getElementById('base10-div').style.display = "none";
    document.getElementById('binary-div').style.display = "block";
    document.getElementById('ternary-div').style.display = "none";

  } else if (selection === "ternary"){
    base10div.style.display = "none";
    binarydiv.style.display = "none";
    ternarydiv.style.display = "block";
  }
  else {
    console.log('selection error')
  }
});
*/
