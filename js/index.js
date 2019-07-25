let btn = document.getElementsByClassName("btn");
let result = document.querySelector(".result");

function displayText()
{
 result.textContent += this.value;
}

for (let i=0; i<btn.length; i++) {

    btn[i].addEventListener("click", displayText);
}

function rslt()
{
  result.textContent = (eval(result.textContent))
}

let equal = document.querySelector(".equal")
equal.addEventListener("click", rslt)

let clear = document.getElementById("clear")
clear.addEventListener("click", clean)

let back = document.getElementById("return")
back.addEventListener("click", retrn)

function clean()
{
    result.textContent = "";
}

function retrn()
{
    result.textContent = result.textContent.slice(0, -1);
}