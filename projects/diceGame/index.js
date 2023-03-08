var random1=Math.floor(Math.random()*6)+1;
var randomimage1="dice"+random1+".png";
var imageSRC="images/"+randomimage1;
var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",imageSRC);

var random2=Math.floor(Math.random()*6)+1;
randomSRC2="images/dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomSRC2);


if(random1>random2){
    document.querySelector("h1").innerHTML="🎉 Player 1 Wins 🎉";
   
    
}
else if(random1<random2){
    document.querySelector("h1").innerHTML="🎉 Player 2 wins 🎉";
    

}
else{
    document.querySelector("h1").innerHTML="Tie :-)";
    
}
document.querySelector("h1").style.fontSize="4rem";