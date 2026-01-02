const obj1 = {
    fname : "Kuntal", 
    lname : "Pal",
    getFullname : function(){
        return `${this.fname} ${this.lname}`
    }
};
 

const obj2 = {
    fname : "Mj", 
    lname: "None",
    // getFullname : function(){
        //     return `${this.fname} ${this.lname}`
        // }
    };
    
obj2.__proto__ = obj1 ; 
obj1.__proto__ = null ;

console.log(obj1.getFullname()) ;
console.log(obj2.getFullname()) ;


// DRY --> Do Not Repeat Yourself
// if do , problem in bug and maintainance

console.log(obj1.toString());
