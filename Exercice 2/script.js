//Retrieve the form and console.log it.
const forms = document.forms[0]
//console.log(forms)
//Retrieve the inputs by their id and console.log them.
const fname = forms.elements.fname
const lname = forms.elements.lname
const submit = forms.elements.submit
console.log(fname,lname,submit)

//Retrieve the inputs by their name attribute and console.log them.
const firstname = forms.elements.fname.value;
const lastname = forms.elements.lname.value;

//When the user submits the form (ie. submit event listener)
//use event.preventDefault(), why ?
const ul = document.querySelector(".usersAnswer")
const firtLi = document.createElement("li");
const secondLi = document.createElement("li");
ul.appendChild(firtLi);
ul.appendChild(secondLi)

//get the values of the input tags,
//make sure that they are not empty,
//create an li per input value,
//then append them to a the <ul class="usersAnswer"></ul>, below the form
document.getElementById("submit").addEventListener("click",function(event){
    document.querySelector(".usersAnswer").firstElementChild.innerHTML = forms.elements.fname.value;
    document.querySelector(".usersAnswer").lastElementChild.innerHTML = forms.elements.lname.value;
    
    event.preventDefault();
    
    })