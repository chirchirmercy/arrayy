
//Arrays
//Find the last element of the following arrays.
//arr1 = [3,7,34,90,12]
//arr2 = [true, "green", "where",12,56]

let rr1 = [3,7,34,90,12];
let x = [3,7,34,90,12];
console.log(x.slice(-1));

letrr2 = [true, "green", "where" ,12, 56];
let y = [true,"green", "where", 12, 56];
console.log(y.slice(-1))


//Write a JS program that will join the following array elements into a string
//myPets = ["Cow", "Bird", "Snake", "Dog"];

mypets = ("cow", "bird", "snake","dog");
let p = ("cow", "bird", "snake", "dog")
console.log(p.toString())

//Write a JS script to sort the following array items
//var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
let r = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1]
console.log(r.sort())



//Write a program to remove duplicates from the following array.
//Console the array without duplicates, and console another array that only contains the duplicates
//var arr = ["apple", "mango", "apple",
            //"orange", "mango", "mango"];
           let   arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
        function removeDuplicates(arr){

          return arr.filter((item,
            index) => arr. indexOf(item) === index);
        }
        console.log(removeDuplicates(arr))

     
//Write a JS script to search for the following word in the array.
//"way"
//If the word is present, console it else console "the search word was not found"
//let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way","x, 4"];
if(arr5.find = "way"){
  console.log("way");
}else{
  console.log("the searchword does not found")
}


//Write a JS script to sort the following string
//let word = "sevink"

 let word ="sevink"
 let nameString=(string)=>{
  return string.split("").sort().join("")
 }
 console.log(nameString("senvink"))







            
