function modelBody(){

	let open = document.getElementById("openModal");
		let modal = document.querySelector(".modal");
        let close = document.querySelector(".close-modal");
	
	open.addEventListener("click", function(){
		modal.style.display = "block";
	});

      modal.addEventListener("click", function(event) {
		         if( event.target === modal)
				 {
					 modal.style.display = "none";
				 }
	  });


	close.addEventListener("click", function(){
		modal.style.display = "none";
	});

}
modelBody();