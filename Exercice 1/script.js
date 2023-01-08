//Using a DOM property, retrieve the h1 and console.log it.
const h1= document.querySelector("h1")
console.log("h1:",h1)

//Using DOM methods, remove the last paragraph in the <article> tag.
const removeP = document.querySelector("article").lastElementChild
removeP.remove()

//Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2")

h2.onclick= function(){
    h2.style.backgroundColor = "red";
}

//Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector("h3")
h3.onclick = function(){
    h3.style.display = "none"
}

//Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const button = document.createElement("button")
const textBtn = document.createTextNode(' Font weight');
button.appendChild(textBtn)
const article = document.querySelector("article")
article.appendChild(button)
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs);
button.onclick = function(){
    paragraphs.forEach(element => {

        element.style.fontWeight="900"
    });
}


