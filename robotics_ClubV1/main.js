function animia(){
    var  x =1;
    var anima =  document.getElementById("image");
    setInterval(function() {
        if(x===1){
            anima.src= "Club_Image.jpg"
            x=0;
        }else if(x===0){
            anima.src = "pie-chart.png"
            x=1;
        }
    }, 3000)
}