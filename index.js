let j = 10
console.log(j)


const person = {
    name : "kp" , 
    age : 19 , 
    location : "Kolkata",
    getFullName: function(){
        return "Kuntal Pal"
    } ,
    more : {
        k : 1 ,
        p : 11
    }
}

console.log(person) 
console.log(person.age )
console.log(person.getFullName())
console.log(person.more)



//real world entity( for e.g. Remote) reperesented using object

const remote = {
    color: "black" , 
    brand: "samsung", 
    dimension: {
        height : 1 ,
        width : 2
    } , 
    cost : 500 ,
}

let p1 = {
    fname : "KP" ,
    address : {
        h : 1 ,
        s : 2 
    }
}
// let p2 = p1
// p2.fname = "AG"
// 

const p1_string = JSON.stringify(p1)
console.log(p1_string) // deep copy technique 
const p2  = JSON.parse(p1_string)

p2.address.h = "Hola"
p2.fname = "AG"
console.log(p1);
console.log(p2);

const person1 = {
    fname : "Anurima" , 
    lname : "G" , 
    city : "Howrah",
    full_name : function(){
        return this.fname + " " + this.lname ; 
    }
};
person1.eye = "beautiful"
let x = person1.full_name 
console.log(x)
console.log(person1.full_name())
//delete person1.lname ;
console.log(person1)

person1.y = function(){
    return (this.fname + " " + person1.lname).toUpperCase() ;
}
console.log(person1.y())