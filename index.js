let d1 = document.getElementById(`display1`);
let d2 = document.getElementById(`display2`);

let count = 0;
let count2 = 0;

function addOne() {
    count += 1
    d1.textContent = count
}
function addTwo() {
    count += 2
    d1.textContent = count
}
function addThree() {
    count += 3
    d1.textContent = count
}


function AddOne() {
    count2 += 1
    d2.textContent = count2
}
function AddTwo() {
    count2 += 2
    d2.textContent = count2
}
function AddThree() {
    count2 += 3
    d2.textContent = count2
}

function res() {
    count = 0
    count2 = 0
    d1.textContent = count
    d2.textContent = count
}