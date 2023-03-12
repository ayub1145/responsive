// Happy Clients 
var count =0;
var happy = setInterval(happy,100);

function happy(){
    count++;
   document.querySelector("#num1").innerHTML=count; 
    if(count==65){
        clearInterval(happy)
    }
}

// Projects
var count2 =0;
var project = setInterval(project,100);

function project(){
    count2++;
   document.querySelector("#num2").innerHTML=count2; 
    if(count2==85){
        clearInterval(project)
    }
}

// Years of experience
var count3 =0;
var years = setInterval(years,150);

function years(){
    count3++;
   document.querySelector("#num3").innerHTML=count3; 
    if(count3==18){
        clearInterval(years)
    }
}

// Awards
var count4 =0;
var award = setInterval(award,150);

function award(){
    count4++;
   document.querySelector("#num4").innerHTML=count4; 
    if(count4==15){
        clearInterval(award)
    }
}



// Contact js










// AOS customize js
AOS.init(
    {
        duration:1200
    }
);



