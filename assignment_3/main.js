let baseNumber = 1;

setInterval(function(){
		$("#num").html(baseNumber);		
		for (var j = 1;j<=10;j++){
			var ids = j.toString();
			$('#'+ids).html(baseNumber+" x "+j+" = "+(baseNumber*j));
		}
		baseNumber++;
},3000);
