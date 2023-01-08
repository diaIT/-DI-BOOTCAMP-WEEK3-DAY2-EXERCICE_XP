//Declare a global variable named allBoldItems.
let allBoldItems;
let paragraph= document.querySelector("p")
//Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBold_items(){
   allBoldItems = document.getElementsByTagName("strong");
    
}
//Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    //TextBlod.style.fontWeight='bold'
    getBold_items()
    for(items of allBoldItems){
        items.style.color="blue"
    }
     }
//Create a function called return_normal() that changes the color of all the bold text back to bla
function return_normal(){
    getBold_items
   //TextBlod.style.fontWeight='blod'
   for(items of allBoldItems){
    items.style.color="black"
}
}
//Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
paragraph.addEventListener("mouseover",highlight);
paragraph.addEventListener("mouseout", return_normal)
