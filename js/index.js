let btn = document.getElementsByClassName("btn");
let result = document.querySelector(".result");

function displayText()
{   
    result.textContent = this.textContent+result.textContent;
}

for (let i=0; i<btn.length; i++) {

    btn[i].addEventListener("click", displayText)
}


