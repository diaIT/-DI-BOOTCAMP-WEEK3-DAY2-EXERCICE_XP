const paragraph = document.querySelector("p");
const table = document.getElementById( "tabl")
const img = document.querySelector("img");

function colorPara(){
paragraph.style.backgroundColor="yellow"

}
function return_normal(){   
    paragraph.style.backgroundColor="white"
}

function fontW(){
    table.style.fontWeight ="1000"
}

paragraph.addEventListener("mouseover", colorPara)
paragraph.addEventListener("mouseout", return_normal)
table.addEventListener("mouseover",fontW);