var up = document.querySelector("#up");
var down = document.querySelector("#down");
var zero = document.querySelector("#reset");
var carreiras = document.querySelector("#numero");

up.addEventListener("click", function (event) {
    event.preventDefault();
    var atual = carreiras.textContent;
    var next = parseInt(atual) + 1;

    zero.classList.remove("invisivel");
    down.classList.remove("invisivel");
    carreiras.textContent = parseInt(next);
});

down.addEventListener("click", function (event) {
    event.preventDefault();
    var atual = carreiras.textContent;
    parseInt(atual);
    if (carreiras.textContent == 1) {
        carreiras.textContent = 0;
        down.classList.add("invisivel");
        zero.classList.add("invisivel");
    } else if (atual > 0) {
        var next = parseInt(atual) - 1;
        down.classList.remove("invisivel");
        carreiras.textContent = parseInt(next);
    }
});

zero.addEventListener("click", function (event) {
    event.preventDefault();
    carreiras.textContent = 0;
    down.classList.add("invisivel");
    zero.classList.add("invisivel");
});