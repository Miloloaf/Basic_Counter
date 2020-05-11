document.addEventListener("mouseup", mouseUpInc)
var foo;

function increaseCount() {
    let currentValue = parseInt(document.getElementById("counter").innerHTML) + 1
    if (currentValue >= 0){
        document.getElementById("counter").style.color = "green";
    }
    document.getElementById("counter").innerHTML = currentValue
}


function mouseDownInc(func) {
    foo = setInterval(func, 100);
}

function mouseUpInc() {
    clearInterval(foo);
}


function decreaseCount() {
    let currentValue = parseInt(document.getElementById("counter").innerHTML) - 1
    if (currentValue < 0){
        document.getElementById("counter").style.color = "red";
    }
    document.getElementById("counter").innerHTML = currentValue


}

