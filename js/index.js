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
  console.log(eval(result.textContent))
}

let equal = document.querySelector(".equal")
equal.addEventListener("click", rslt)