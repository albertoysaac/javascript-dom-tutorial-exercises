let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let list = document.getElementById("myList");
	let newli = document.createElement("li");
	newli.innerHTML = "Fourth element";
	list.appendChild(newli);
});
