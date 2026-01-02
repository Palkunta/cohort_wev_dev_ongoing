class person {
    constructor(fname,lname){
        this.fname = fname ;
        this.lname = lname ;
    }

    getFullName(){
        return `${this.fname} ${this.lname}`;           // class --> blueprint
    }
}

const p1 = new person("Kuntal" , "Pal") ;
// internally p1.__proto = person.prototype

console.log(p1.__proto__ === person.prototype)

console.log(p1.__proto__ === person.prototype); // true
console.log(person.prototype.isPrototypeOf(p1)); // true


const p2 = new person("Anurima" , "Ghosal") ;

console.log(p1.getFullName());
console.log(p2.getFullName());





class B {
    InsideB(){
        console.log("BB")
    }
}

class A extends B {
    InsideA(){
        console.log("AA")
    }
}
 
const c1 = new A() ;

c1.InsideA() ;
c1.InsideB() ;