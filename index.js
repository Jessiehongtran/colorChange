const color = document.getElementsByClassName("color")[0]


let curRed = document.getElementById("red")
let curGreen = document.getElementById("green")
let curBlue = document.getElementById("blue")

color.style.backgroundColor = `rgb(${curRed.value},${curGreen.value},${curBlue.value})`

function updateColor(){
    color.style.backgroundColor = `rgb(${curRed.value},${curGreen.value},${curBlue.value})`
}

function bolden(){
   if (curRed.value >= 5 && curRed.value <= 255){
        curRed.value -= 5 //decrease will make it bolder while increase will make it lighter
   }
   if (curGreen.value >= 5 && curGreen.value <= 255){
        curGreen.value -= 5
   }
   if (curBlue.value >= 5 && curBlue.value <= 255){
        curBlue.value -= 5
   }
   color.style.backgroundColor = `rgb(${curRed.value},${curGreen.value},${curBlue.value})`
}


// function lighten(){
   
//     if (curRed.value >= 0 && curRed.value <= 250){
//         curRed.value += 5 //decrease will make it bolder while increase will make it lighter
//     }
//     if (curGreen.value >= 0 && curGreen.value <= 250){
//         curGreen.value += 5
//     }
//     if (curBlue.value >= 0 && curBlue.value <= 250){
//         curBlue.value += 5
//     }
//     color.style.backgroundColor = `rgb(${curRed.value},${curGreen.value},${curBlue.value})`
//  }
 
