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
        if(id % 2 == 0){
            return id;
        }
    }
}

const increment = incrementarID();

console.log(increment.next().value);
console.log(increment.next().value);
console.log(increment.next().value);
console.log(increment.next().value);
console.log(increment.next().value);
console.log(increment.next().value);
