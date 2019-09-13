let cata = document.getElementById("cat-a");
let catb = document.getElementById("cat-b");
let hipc = document.getElementById("hip-c");
let out = document.getElementById("result");

let solver = (a, b, c) => {
    return Math.sqrt(c - b) || Math.sqrt(c - a) || Math.sqrt(a + b) || "Não consigo calcular...";
}

function result() {
    let a = Number(cata.value) ** 2 || NaN;
    let b = Number(catb.value) ** 2 || NaN;
    let c = Number(hipc.value) ** 2 || NaN;
    out.innerHTML = (a + b == c) ? `${a} + ${b} = ${c}` : (!a || !b || !c) ? solver(a, b, c) : `A conta está errada...`;
}

cata.addEventListener("input", result);
catb.addEventListener("input", result);
hipc.addEventListener("input", result);