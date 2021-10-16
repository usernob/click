var output = document.getElementById("output");
var button = document.getElementById("click")
var n = 0;
function clicker() {
    n++
    if (n == 100) {
        button.innerHTML = "click terus ngab";
    }
    else if (n == 1000){
        button.innerHTML = "teruskan ngab";
    }
    else if (n == 1000000) {
        button.innerHTML = "udah ngab";
    }
    //console.log(n);
    output.innerHTML = n;
}