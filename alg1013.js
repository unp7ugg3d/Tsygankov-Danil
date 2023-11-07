function verify() {
    console.log("x, y, z")
    let x = parseInt(elementX.innerText);
    let y = parseInt(elementY.innerText);
    let z = parseInt(elementZ.innerText);
    console.log(x, y, z)

    let result='None';
    if (x < y) {
        result = Math.log(x+y)
    }
    else {
        result = x*y
    }
    document.getElementById("result").innerText =  result;


}

const elementX = document.getElementById("x");
const elementY = document.getElementById("y");
const elementZ = document.getElementById("result");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);