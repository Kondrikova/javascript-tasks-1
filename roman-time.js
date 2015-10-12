var hours = process.argv[2];
var minutes = process.argv[3];

var units = ['','I','II','III','IV','V','VI','VII','VIII','IX'];
var tens = ['','X','XX','XXX','XL','L'];

function getUnits(time) {
  var unit = time%10;
  return units[unit];
}

function getTens(time) {
  var ten = Math.floor(time/10);
  return tens[ten];
}

function toRoman(hours, minutes) {
  var result ='';9
  result = getTens(hours) + getUnits(hours) +' : '+getTens(minutes)+getUnits(minutes);
  return result;
}

if ((hours>=0) && (hours<=23) && (minutes>=0) && (minutes<=59)){
  console.log(toRoman(hours,minutes));
}
else {
  console.log('Время указано неверно');
}
