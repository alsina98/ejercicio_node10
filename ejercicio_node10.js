// EX1
function afirmative(){
    return "true";
}

console.log(afirmative());

// EX2
// const msg = setTimeout(async, 5000);

function async(){
    console.log("Hola soy una promesa");
};

// EX3
function* incrementarID() {
    let id = 0;
    while(true) {
        yield id++
        
    }
}

const increment = incrementarID();

let lista = []

let i = 0
while (i < 10){
    i++;
    lista.push(increment.next().value)
}

console.log(lista);

const result = lista.filter(number => number % 2 == 0);

console.log(result);
