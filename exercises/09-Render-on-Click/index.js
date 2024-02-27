let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let newP = document.createElement("p");
	newP.innerHTML = "Hello World";
	newP.style.backgroundColor = "yellow";
	document.body.appendChild(newP);

});
