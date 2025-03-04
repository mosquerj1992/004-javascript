

const titulo = document.getElementById("titulo");

function addClass() {
    titulo.classList.add("red");
}

function removeClass() {
    titulo.classList.remove("red");
}


function show() {
    const box = document.getElementById("box1");
    const coords = box.getBoundingClientRect();
    console.log(coords);
    console.log('window offset x:', window.pageXOffset);
    console.log('window offset y:', window.pageYOffset);
    console.log('width:', document.documentElement.clientWidth);
    console.log('height:', document.documentElement.clientHeight);
}



///
function fibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 0; i < n; i++) {
        console.log(a);
        temp = a + b;
        a = b;
        b = temp;
    }
}
fibonacci(10); // Cambia el número para más términos
