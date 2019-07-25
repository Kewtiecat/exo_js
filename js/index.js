let btn = document.getElementsByClassName("btn");
console.log(btn)
let result = document.querySelector("result");

function displayText()
{   
    console.log(this.textContent)
}

for (let i=0; i=btn.length; i++) {

    btn[i].addEventListener("click", displayText)
}


