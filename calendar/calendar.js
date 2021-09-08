//오늘 날짜 받기
today = new Date();
//이번 달의 첫번째 날짜와 요일 받기
//이번달 : 1월부터0으로 나온다.
year = new Date().getFullYear();
month = new Date().getMonth();
first_day = new Date(year, month, 1).getDay();
first_date = new Date(year, month, 1).getDate();
last_date = new Date(year, month + 1, 0).getDate();
// 연월표시
var YM = document.getElementById("ym");
YM.innerHTML = year + "년" + (month + 1) + "월";

//1일 시작 전까지의 칸은 공란으로 채우기
//행과 열 생성
//공란 만들기
var calendar = document.getElementById("calendar");
var row = calendar.insertRow();
for (i = 0; i < first_day; i++) {
  var cell = row.insertCell();
  cell.innerHTML = "x";
}

for (i = 0; i < last_date; i++) {
  if (first_day != 7) {
    var cell = row.insertCell();
    cell.setAttribute("id", [i]);
    //cell에 i로 id부여
    cell.innerHTML = [i];
    first_day += 1;

    //이게 중요하네....first_day에 맞춰 첫번째 날짜1일을 넣으니까, firstday를 +1해 firstday기준으로 숫자를 계속 채워넣는 것이다.
  } else {
    row = calendar.insertRow();
    cell.setAttribute("id", [i]);
    cell = row.insertCell();
    cell.innerHTML = [i];
    first_day = first_day - 6;
  }
}

window.onload = function () {
  today_date = today.getDate();
  for (i = 0; i <= last_date; i++) {
    setid = document.getElementById([i]);
    if (today_date == setid.getAttribute("id")) {
      setid.bgcolor = "red";
    }
  }
};
// if(today_date==)

console.log(today);
console.log("올해: " + year + "년");
console.log("이번달: " + (month + 1) + "월");
// console.log(first_day);
console.log("이번달 1일: " + (first_day + 1) + "번째부터 시작");
console.log(first_date, last_date);
console.log(today_date);

// if(today==)
