var n1= Math.floor(Math.random()*6)+1;
var n2= Math.floor(Math.random()*6)+1;
  
    var im1="images/dice"+n1+".png"; 
    var i1=document.querySelectorAll("img")[0];
    i1.setAttribute("src",im1); 

    var im2="images/dice"+n2+".png";
    var i2=document.querySelectorAll("img")[1];
    i2.setAttribute("src",im2);

    if(n1>n2){
        document.querySelector("h1").innerHTML = "Player 1 wins!"; 
    }
    else if(n1<n2){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML ="Draw";
    }