let operand = 0;
let numStr = "";
// let numStr2 = "";

window.onerror = function () {
    alert("Invalid operation.");
 }

function getNumber(num) {
    // document.getElementById("input").value += num;
    document.getElementById("output").value += num;
}

function getVal() {
    // document.getElementById("input").value += document.getElementById("dot").innerHTML;
    document.getElementById("output").value += document.getElementById("dot").innerHTML;
}

function getPar(par){
    // document.getElementById("input").value += par;
    document.getElementById("output").value += par;
}

function getOperator(op) {
    document.getElementById("input").value += document.getElementById("output").value;
    document.getElementById("output").value = "";
    document.getElementById("input").value += op;

}

function getAns() {

    document.getElementById("input").value += document.getElementById("output").value;
    numStr = document.getElementById("input").value;
    let test = numStr;
  
    if (test.includes('+') == false & test.includes('-') == false & test.includes('*') == false & test.includes('/') == false){
        alert("Invalid Operation.");
    }
    else if(test.startsWith('+') == true || test.startsWith('-') == true){
        alert("Invalid Operation.");
    }



    // alert(numStr);
    ans = Number.parseFloat(eval(numStr));
    document.getElementById("output").value = ans.toLocaleString('en-US');
}

function clr(){
    document.getElementById("output").value = "";
    document.getElementById("input").value = "";
}

// function back(){
//   document.getElementById("output").value = numStr2;
//   numStr2.slice(0, -1) = numStr;

//   document.getElementById("output").innerHTML += numStr; 
// }

