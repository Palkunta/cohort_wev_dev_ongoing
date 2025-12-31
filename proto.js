const arr = [1 , 2 , 3] ;
arr

const str = "Ami" 
console.log(str.length) ;

const obj = {
    x : 1 
}
// Therefore , Dot operator helps to access the properties of Object

console.log(obj.x )

if(!Array.prototype.filter){
    //fallbck --- polyfill function
    Array.prototype.filter = function(){

    }
}

//signature of myForEach -- returns nothing

const ar = [1 , 2 , 3 , 4 , 5]

if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userfn){
        for(let i = 0 ; i < this.length ; i++){
            userfn(this[i],i);
        }
    }
}


const ret = ar.myForEach(function(val, idx){
    console.log(`My for Each value at index ${idx} is ${val}`)
})
console.log(`ret is` , ret)

// .map ---> returns the changed array
if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userfn1){
        const new_arr = [] ;
        for(let i = 0 ; i < this.length ; i++ ){
            new_arr.push(userfn1(this[i],i))
        }
        return new_arr ;
    }
}
const n = ar.map((w) => w * 3)

console.log(n) 
console.log(ar)

const n2 = ar.myMap( e => e * 2)
console.log(n2)

// i.e. , .map does not modify the original array

//filter method

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const brr = [] ;

        for( let i = 0 ; i < this.length ; i++){
            let k = userFn(this[i],i)
            if( k === true)
                brr.push(this[i])
        }

        return brr ;
    }
}

const n3  = ar.filter( j => j > 2)
console.log(n3)

const n4 = ar.myFilter( k => k % 1 === 0 )
console.log(n4)