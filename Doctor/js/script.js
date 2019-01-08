
var rond = document.querySelectorAll(".rond");


for (var i = 0; i < rond.length; i++) {
	
	rond[i].onclick = function(){
	
		var idDeMaDiv = this.id;
	
		if(!this.classList.contains("active")){
			
			for (var j = 0; j < rond.length; j++) {
			
				rond[j].classList.remove("active");
		
				var idTmp = rond[j].id;
			
				document.getElementById("texte_"+idTmp).style.display = "none";
				
			}
			
			this.classList.add("active");
	
			document.getElementById("texte_"+idDeMaDiv).style.display = "block";
		} else {
			
			this.classList.remove("active");
			
			document.getElementById("texte_"+idDeMaDiv).style.display = "none";
		}
	}
}