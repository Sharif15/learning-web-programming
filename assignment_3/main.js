let baseNumber = 1;

setInterval(function(){
		document.getElementById("num").innerHTML=baseNumber;		
		for (var j = 1;j<=10;j++){
			document.getElementById(j).innerText=(baseNumber+"x"+j+"="+(baseNumber*j));
		}
		baseNumber++;
},3000);
