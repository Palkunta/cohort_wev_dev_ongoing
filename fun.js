const person = {
    fn : "Kuntal" , 
    ln : "Pal"
}

const copy = Object.create(person)
copy.fn = "Anurima"

console.log(person)
console.log(copy)

function Person(fn , ln , age){
    this.fname = fn ;
    this.lname = ln ;
    this.age = age ;
    this.nation = "India"
    this.fullname = function(){
        return this.fname + " " + this.lname ;
    }
}

const father = new Person("kamalesh","pal",56);
console.log(father)


Object.prototype.chai = function(){
    console.log("She is nice ")
}
const tea = {
    name : "Cold Lemon Tea" , 
    type : "cool"
}

tea.chai() ;

const myTea = ["Green","Orange","Black"];
myTea.chai() ;