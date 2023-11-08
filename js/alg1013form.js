function verify() {
    console.log("x, y, z")
    let x = parseInt(elementX.value);
    let y = parseInt(elementY.value);
    let z = parseInt(elementZ.value);
    console.log(x, y, z)

 let result='None';
    if (x < y) {
        result = Math.log(x+y)
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;

    }
    else {
        result = x*y
        document.getElementById("result").innerText = messageText + result;
        document.getElementsByName('result')[0].value = result;


    }

}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;


const elementX = document.getElementById("x");
elementX.addEventListener('input', verify);

const elementY = document.getElementById("y");
elementY.addEventListener('input', verify);

const elementZ = document.getElementById("result");
elementZ.addEventListener('',verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', verify_send)