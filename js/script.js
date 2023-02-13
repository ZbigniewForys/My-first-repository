console.log("Niech będzie pozdrowiony Jarosław - zawsze dziewica");

let przycisk = document.querySelector(".przycisk");
let strona = document.querySelector(".strona");
let zapamietaj_strone = strona.innerHTML;

przycisk.addEventListener("click", () => { 
    if (strona.innerHTML.length <10) {
        strona.innerHTML = zapamietaj_strone;
        przycisk.textContent = "ukryj stronę";
    }
    else {
        strona.innerHTML = "";
        przycisk.textContent = "przywróć stronę";
    }
});