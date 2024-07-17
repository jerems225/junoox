var modal = document.querySelector("#myModal");
var modalContent = document.querySelector("#modal-content");

var btn = document.querySelector(".menu-icon");


btn.onclick = function() {
    modal.style.display == "block" ? modal.style.display = "none" : modal.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal || event.target === modalContent) {
        modal.style.display = "none";
    }
}