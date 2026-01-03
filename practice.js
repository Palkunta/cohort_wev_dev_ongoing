Function.prototype.describe = function (){
    console.log(`Function name is ${this.name}`);
}

const obj = { } ;
const str = "KPPPPP"

function greet () {
    console.log("Say Hi to me !!!");
}

greet.describe() ;
// obj.describe() ;
// str.describe() ;


function add(a , b){                // Function Declaration
                                    // here a,b are known as parameters
    return a + b ;          
}

add(2,3);  // here 2, 3 are arguments

const subtract = function(a,b){
    return a - b ;                     // Function Expression
}

const multi = ( a , b) => ( a * b);    // Arrow Function


function applyOperation(a , b , ops){
    return ops(a,b);
}

const result = applyOperation(2, 3, (a , b) => a/b); // first class function...since it can be passed as parameter


function createCounter(){
    let cnt = 0 ;               // tiffin concept === Closure ? or Lexical Scope ?
    return function(){
        cnt++ ;                    // function can be returned as they are first-class citizen of Javascript
        return cnt ;
    }
}

const counter = createCounter() ;
console.log(counter());


(function(){
    console.log("Anu o")
})() ;

// ()() ;
