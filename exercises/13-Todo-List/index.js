let add = document.getElementById("addToDo");
let list = document.querySelector("ul");

add.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let newli = document.createElement("li");
        newli.innerHTML = `<span><i class="fa fa-trash"></i></span> ${add.value}`;
        list.append(newli);
        buttonremove();
    }
});

window.onload = buttonremove();
function buttonremove() {
    let trash = document.querySelectorAll("span");
    trash.forEach(function(t) {
        t.addEventListener("click", function() {
            t.parentNode.remove();
        });
    });
}
