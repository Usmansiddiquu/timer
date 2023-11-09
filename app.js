// function abc() {
//     console.log(arguments[0])
//     console.log(xyz)
//     console.log(b)
// }

// abc('ghous',757,true)

// function abc(a) {
 
//     console.log("ghous")
// }

// function xyz() {
//     console.log("ahmed")
// }
// xyz()
// abc(xyz)


// function foo(){

// }


// console.log(foo())



var min = 2;
var sec = 5;
var timer;
var source = "beep-01a.mp3"

function abc(){
    var beep = document.getElementById("beep");
    beep.autoplay = true;
    beep.load()
    beep.addEventListener("load", function() {
        console.log("jhgghg")
        beep.play();
    }, true);
    beep.src = source;

    console.log(min + ":" + sec--);
    if(sec < 1){
        sec = 5;
        min--
    }
    if(min < 1){
        clearInterval(timer)
        console.log("time over")
        beep.play()
    }
}
timer = setInterval(abc,1000)

function resetTimer(){
    clearInterval(timer);
    min = 5;
    sec = 10
    console.log(min + ":" + sec);
}

// function foo(){
//     console.log("hh")
// }

// setTimeout(foo,3000)