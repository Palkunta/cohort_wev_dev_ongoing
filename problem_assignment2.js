// Problem: Create an object representing a type of tea with properties for
// name, type, and caffeine content.
const teas = {
    name : "Lemon Tea" , 
    "type of" : "Green-Tea" , 
    caffine : "Low amount"
}

// Problem: Access and print the name and type properties of the tea object.
console.log(teas.name);
console.log(teas["type of"]);


// Problem: Add a new property origin to the tea object.
teas.origin = "China"

// Problem: Change the caffeine level of the tea object to "Medium".
teas["caffine"] = "Medium"

// Problem: Remove the type property from the tea object.
delete teas["type of"]
console.log(teas)
// Problem: Check if the tea object has a property origin.
console.log("origin" in teas);
// Problem: Use a for...in loop to print all properties of the tea object.
for(let k in teas){
    console.log(k + " : " + teas[k])
}
// Problem: Create a nested object representing different types of teas and their
// properties.
const dteas = {
    greentea : {
        type : "Green" , 
        origin : "Himalaya"
    } ,
    blacktea : {
        type : "Black" ,
        origin : "Japan"
    }
}

//problem: Create a copy of the tea object



//problem: Add a custom method describe to the tea object that returns a desription string

//problem: Merge 2 objects representing different teas into one














let user = {
  name: "Kuntal",
  address: {
    city: "Kolkata"
  }
};

let shallow = { ...user };

shallow.name = "Pal";
shallow.address.city = "Delhi";

console.log(user.name);           // "Kuntal" ✅
console.log(user.address.city);   // "Delhi" ❌

console.log(user)
let deep = structuredClone(user);
deep.name = "pal"
deep.address.city = "Kolkata"
console.log(deep)



let obj = {
    name : "Kuntal" , 
    address : {
        city : "Kolkata"
    }
}

let copy = new Object (obj) ;
console.log(copy)
copy.address.city = "mumbai"
