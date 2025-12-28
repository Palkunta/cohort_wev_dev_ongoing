// Problem 1: Create an array containing different types of teas

const tea = ["Green Tea","Black Tea","Oolong Tea","Herbal Tea","Masalaaaaaaaaaaaaaaaaaaaaa Tea"]


// Problem 2: Add "Chamomile Tea" to the existing list of teas

tea.push("Chamomile Tea");

// Problem 3: Remove "Oolong Tea" from the list of teas

let index = tea.indexOf("Oolong Tea")
if(index > -1){
    tea.splice(index , 1);       //  there is  a chance that "Oolong Tea may not be present in the tea array"
    //then tea.indexOf("Oolong tea") will return -1
                                
}


// Problem 4: Filter the list to only include teas that are caffeinated

const caffeinated_tea = tea.filter((i) => i != "Herbal Tea");
 console.log(caffeinated_tea);
 
 
 // Problem 5: Sort the list of teas in alphabetical order
 
 tea.sort();
 console.log(tea);

 const test = ["🐓","🥚"]
 console.log(test.sort());

// Problem 6: Use a for loop to print each type of tea in the array

for(let i = 0 ; i < tea.length ; i++){
    console.log(tea[i]);
}
// Problem 7: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")

let cnt = 0 ;
for( let i = 0 ; i < tea.length ; i++ ){
    if(tea[i] !== "Herbal Tea")cnt++;
}

console.log(cnt)

// Problem 8 : Use a for loop to create a new array with all tea names in uppercase

const new_arr = [] ;
for(let i = 0 ; i < tea.length ; i++){
    new_arr.push(tea[i].toUpperCase());
}
console.log(new_arr);
// Problem 9: Use a for loop to find the tea name with the most characters

let mc_tea = "";
for(let i = 0 ; i < tea.length ; i++ ){
    if(tea[i].length > mc_tea.length)mc_tea = tea[i];
}
console.log(mc_tea);

// Problem 10: Use a for loop to reverse the order of the teas in the array

const rev_arr = [] ;
let len  = tea.length; 

for(let i = 0 ; i < tea.length ; i++){
    rev_arr[len - 1 - i] = tea[i];
}
console.log(tea);
console.log(rev_arr);
