//Write a JavaScript program to calculate the volume of a sphere. Use the code below as a base:

 let form = document.getElementById('my-form');
 let radius = document.getElementById("radius");
 let volume = document.getElementById("volume");
 let submit = document.getElementById("submit")


document.getElementById("submit").addEventListener("click",function(event){
    const r = document.getElementById("radius").value //*r est le rayon de la sphere
    const vol = (4/3) * Math.PI * r **3;
    if(isNaN(r)){
        return alert('Not a number')
    }else{
        document.getElementById("volume").innerHTML= vol
        console.log("volume sphere:",vol)
        event.preventDefault();

        
    }
    
    })
    