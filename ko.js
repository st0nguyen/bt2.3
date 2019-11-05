let d = document.getElementById('c');
function do1() {
    let x = parseFloat(document.getElementById(1).value);
    let y = parseFloat(document.getElementById(2).value);
    let z = x+y;
    d.innerHTML = ('result addition:'+ z);
}
function do2() {
    let x = parseFloat(document.getElementById(1).value);
    let y = parseFloat(document.getElementById(2).value);
    let z = x-y;
    d.innerHTML = 'result subtraction:'+ z;
}
function do3() {
    let x = parseFloat(document.getElementById(1).value);
    let y = parseFloat(document.getElementById(2).value);
    let z = x*y;
    d.innerHTML = 'result multiplication:'+ z;
}
function do4() {
    let x = parseFloat(document.getElementById(1).value);
    let y = parseFloat(document.getElementById(2).value);
    let z = x/y;
    d.innerHTML = 'result divison:'+ z;
}