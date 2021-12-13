//問題１
const array = [2, 4, 7, 5, 4, 3, 8];

const indexOfJS = array.indexOf(3);
console.log(indexOfJS); 
console.log(array[indexOfJS]);

const result = array.filter(function (item) {
  return item % 2 === 1;
});
console.log(result);

//問題2-1
const LeapYear = year => {
	 if (year % 4 == 0) {
		if (year % 100 == 0) {
			if (year % 400 == 0) {
				return true;
			}else{
				return false;
			}
		}else{
			return true;
		}
	 }else{
		return false;
	 }
}
console.log(LeapYear(2020));
console.log(LeapYear(2021));


//問題2-2
function Leapyear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

let lastyear = 2020;
if(Leapyear(lastyear)){
  console.log(lastyear + '年はうるう年です');
}else{
  console.log(lastyear + '年はうるう年ではありません');
}
let thisyear = 2021;
if(Leapyear(thisyear)){
  console.log(thisyear + '年はうるう年です');
}else{
  console.log(thisyear + '年はうるう年ではありません');
}



