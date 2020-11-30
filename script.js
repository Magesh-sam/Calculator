//function for displaying values
function display(val) {
    document.getElementById("answer").value += val;
}
//function for evaluation
function solve() {
    let x = document.getElementById("answer").value;
    let y = eval(x);
    document.getElementById("answer").value = y;
}