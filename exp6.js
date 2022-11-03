var clockInterval;

function q1() {
clockInterval = setInterval(Clock, 1000);
}

function Clock() {
let d = new Date();
var time = d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();
document.getElementById("clock").innerHTML = time;
document.getElementById("stop").innerHTML = "<button class=\"btn btn-danger mt-3\"onclick=\"q1Stop()\">Stop</button>";

}

function q1Stop() {
clearInterval(clockInterval);
}

//Q2

var bgc = null;

function q2() {
bgc = setInterval(bg, 500);
}

function bg() {
var div = document.getElementById('bg');

if (div.style.backgroundColor === 'black')
div.style.backgroundColor = 'red';
else
div.style.backgroundColor = 'blue';

}

function q2Stop() {
clearInterval(bgc);
}

//Q3
function inc() {
var div = document.getElementById('font');
document.getElementById('font').style = "font-size:40px";
}

function dec() {
var div = document.getElementById('font');
document.getElementById('font').style = "font-size:29px";

}

var interval;

function q4Start() {
car = document.getElementById("car");

interval = setInterval(q4Move, 30);

}

function q4Stop() {
clearInterval(interval);
}

function q4Move() {

car.style.left = parseInt(car.style.left) + 2 + "px";
console.log(parseInt(car.style.left) > parseInt(screen.width))
if (parseInt(car.style.left) > parseInt(screen.width)) {
car.style.left = "0px";
}
}

function q5() {
document.getElementById("bfr").innerHTML = "Born Before 2001";
document.getElementById("aft").innerHTML = "Born After 2001";
let student = [{ name: "John", regNo: "URK20CS2100", dob: "12/Mar/1999" },
{ name: "Salvin", regNo: "URK20CS2095", dob: "25/April/2003" },
{ name: "Jim", regNo: "URK20CS2010", dob: "03/May/2002" },
{ name: "Steven", regNo: "URK20CS3166", dob: "20/Nov/2001" },
{ name: "Nitish", regNo: "URK20CS2999", dob: "22/Mar/1990" },
]
for (let i = 0; i < student.length; i++) {
if (parseInt(student[i].dob.split("/")[2]) < 2000) {
document.getElementById("before").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>";

} else
document.getElementById("after").innerHTML += student[i].name + "\'s " + "Register Number is " + student[i].regNo + " and the DOB is " + student[i].dob + "<br><br>";

}
}