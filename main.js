let cata = document.getElementById("cat-a");
let catb = document.getElementById("cat-b");
let hipc = document.getElementById("hip-c");
let out = document.getElementById("result");

let solver = (a = NaN, b = NaN, c = NaN) => {
    return Math.sqrt(c - b) || Math.sqrt(c - a) || Math.sqrt(a + b) || "Não consigo calcular...";
}

function result() {
    let a = parseInt(cata.value) ** 2;
    let b = parseInt(catb.value) ** 2;
    let c = parseInt(hipc.value) ** 2;

    (a + b == c) ? out.innerHTML = `${a} + ${b} = ${c}` : out.innerHTML = solver(a, b, c);
}

cata.addEventListener("input", result);
catb.addEventListener("input", result);
hipc.addEventListener("input", result);