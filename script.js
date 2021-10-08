var currentTime = document.querySelector(".time");

var time1 = document.querySelector("time1")

var plans1 = document.querySelector(".plans1");
var plans2 = document.querySelector(".plans2");
var plans3 = document.querySelector(".plans3");
var plans4 = document.querySelector(".plans4");
var plans5 = document.querySelector(".plans5");
var plans6 = document.querySelector(".plans6");
var plans7 = document.querySelector(".plans7");
var plans8 = document.querySelector(".plans8");
var plans9 = document.querySelector(".plans9");

var saveMe1 = document.querySelector(".saveme1");
var saveMe2 = document.querySelector(".saveme2");
var saveMe3 = document.querySelector(".saveme3");
var saveMe4 = document.querySelector(".saveme4");
var saveMe5 = document.querySelector(".saveme5");
var saveMe6 = document.querySelector(".saveme6");
var saveMe7 = document.querySelector(".saveme7");
var saveMe8 = document.querySelector(".saveme8");
var saveMe9 = document.querySelector(".saveme9");

var dateAndTime = moment().format("dddd, MMMM Do YYYY");
currentTime.textContent = (dateAndTime);
currentTime.setAttribute("style", "text-align: center");

plans1.value = localStorage.getItem("plans1");
plans2.value = localStorage.getItem("plans2");
plans3.value = localStorage.getItem("plans3");
plans4.value = localStorage.getItem("plans4");
plans5.value = localStorage.getItem("plans5");
plans6.value = localStorage.getItem("plans6");
plans7.value = localStorage.getItem("plans7");
plans8.value = localStorage.getItem("plans8");
plans9.value = localStorage.getItem("plans9");

var time1 = document.querySelector("time1")
time1 =  9
var time1Current = moment().format("HH")

console.log(time1Current)

if (time1 < time1Current) {
    plans1.setAttribute("style", "background-color: #BFBFBF")
} else if (time1 > time1Current) {
    plans1.setAttribute("style", "background-color: #61FF5A")
} else if (time1 = time1Current) {
    plans1.setAttribute("style", "background-color: #FF6746")
}

var time2 = document.querySelector("time2")
time2 =  10
var time2Current = moment().format("HH")

if (time2 < time2Current) {
    plans2.setAttribute("style", "background-color: #BFBFBF")
} else if (time2 > time2Current) {
    plans2.setAttribute("style", "background-color: #61FF5A")
} else if (time2 = time2Current) {
    plans2.setAttribute("style", "background-color: #FF6746")
}

var time3 = document.querySelector("time3")
time3 =  11
var time3Current = moment().format("HH")

if (time3 < time3Current) {
    plans3.setAttribute("style", "background-color: #BFBFBF")
} else if (time3 > time3Current) {
    plans3.setAttribute("style", "background-color: #61FF5A")
} else if (time3 = time3Current) {
    plans3.setAttribute("style", "background-color: #FF6746")
}

var time4 = document.querySelector("time4")
time4 =  12
var time4Current = moment().format("HH")

if (time4 < time4Current) {
    plans4.setAttribute("style", "background-color: #BFBFBF")
} else if (time4 > time4Current) {
    plans4.setAttribute("style", "background-color: #61FF5A")
} else if (time4 = time4Current) {
    plans4.setAttribute("style", "background-color: #FF6746")
}

var time5 = document.querySelector("time5")
time5 =  13
var time5Current = moment().format("HH")

if (time5 < time5Current) {
    plans5.setAttribute("style", "background-color: #BFBFBF")
} else if (time5 > time5Current) {
    plans5.setAttribute("style", "background-color: #61FF5A")
} else if (time5 = time5Current) {
    plans5.setAttribute("style", "background-color: #FF6746")
}

var time6 = document.querySelector("time6")
time6 =  14
var time6Current = moment().format("HH")


if (time6 < time6Current) {
    plans6.setAttribute("style", "background-color: #BFBFBF")
} else if (time6 > time6Current) {
    plans6.setAttribute("style", "background-color: #61FF5A")
} else if (time6 = time6Current) {
    plans6.setAttribute("style", "background-color: #FF6746")
}

var time7 = document.querySelector("time7")
time7 =  15
var time7Current = moment().format("HH")


if (time7 < time7Current) {
    plans7.setAttribute("style", "background-color: #BFBFBF")
} else if (time7 > time7Current) {
    plans7.setAttribute("style", "background-color: #61FF5A")
} else if (time7 = time7Current) {
    plans7.setAttribute("style", "background-color: #FF6746")
}

var time8 = document.querySelector("time8")
time8 =  16
var time8Current = moment().format("HH")


if (time8 < time8Current) {
    plans8.setAttribute("style", "background-color: #BFBFBF")
} else if (time8 > time8Current) {
    plans8.setAttribute("style", "background-color: #61FF5A")
} else if (time8 = time8Current) {
    plans8.setAttribute("style", "background-color: #FF6746")
}
var time9 = document.querySelector("time9")
time9 =  17
var time9Current = moment().format("HH")


if (time9 < time9Current) {
    plans9.setAttribute("style", "background-color: #BFBFBF")
} else if (time9 > time9Current) {
    plans9.setAttribute("style", "background-color: #61FF5A")
} else if (time9 = time9Current) {
    plans9.setAttribute("style", "background-color: #FF6746")
}

function savePlans1() {
    var plansItem1 = plans1.value
    localStorage.setItem("plans1", plansItem1)
}

function savePlans2() {
    var plansItem2 = plans2.value
    localStorage.setItem("plans2", plansItem2)
}


function savePlans3() {
    var plansItem3 = plans3.value
    localStorage.setItem("plans3", plansItem3)
}


function savePlans4() {
    var plansItem4 = plans4.value
    localStorage.setItem("plans4", plansItem4)
}


function savePlans5() {
    var plansItem5 = plans5.value
    localStorage.setItem("plans5", plansItem5)
}


function savePlans6() {
    var plansItem6 = plans6.value
    localStorage.setItem("plans6", plansItem6)
}


function savePlans7() {
    var plansItem7 = plans7.value
    localStorage.setItem("plans7", plansItem7)
}


function savePlans8() {
    var plansItem8 = plans8.value
    localStorage.setItem("plans8", plansItem8)
}


function savePlans9() {
    var plansItem9 = plans9.value
    localStorage.setItem("plans9", plansItem9)
}

saveMe1.addEventListener("click", savePlans1);
saveMe2.addEventListener("click", savePlans2);
saveMe3.addEventListener("click", savePlans3);
saveMe4.addEventListener("click", savePlans4);
saveMe5.addEventListener("click", savePlans5);
saveMe6.addEventListener("click", savePlans6);
saveMe7.addEventListener("click", savePlans7);
saveMe8.addEventListener("click", savePlans8);
saveMe9.addEventListener("click", savePlans9);









