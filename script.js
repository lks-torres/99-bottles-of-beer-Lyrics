function lyrics(){
	hide();
	for(i=99; i>=0;i--){
		if(i==1){
		document.getElementById("main").innerHTML+="<br />" + i +" bottles of beer on the wall, " + i + " bottles of beer "+"<br />"+ "Take one down and pass it around, no more bottles of beer on the wall" +"<br />"
		}
		else if(i==0){
			document.getElementById("main").innerHTML+="<br />" + "No more bottles of beer on the wall, no more bottles of beer" + "<br />" + "Go to the store and buy some more, 99 bottles of beer on the wall"
			
		}
		else{
		document.getElementById("main").innerHTML+="<br />" + i +" bottles of beer on the wall, " + i + " bottles of beer "+"<br />"+ "Take one down and pass it around, " +(i-1) +" bottles of beer on the wall" +"<br />"		
		}
	}
}

function hide(){
	document.getElementById('lyrics').style.display = "none";
}		