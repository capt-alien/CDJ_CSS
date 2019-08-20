// This is a Coding Dojo work for AlgoII assignment

// Problem 1
function multiply(x,y){
    console.log(x);
    console.log(y);
}
b = multiply(2,3);
console.log(b);

// console: 2, 3, undefined

// Problem 2
function multiply(x,y){
    return x*y;
}
b = multiply(2,3);
console.log(b);
console.log(multiply(5,2));

// console: 6, 10


// PRoblem 3
var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3;
   console.log(i);
}
// console: 3, 7



// problem 4
var x=15;
console.log(x);
function awesome(){
    var x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

// console: 15, 15, 10, 15


// Problem 5
for(var i=0; i<15; i+=2){
   console.log(i);
}
// console 0,2,4,6,8,10,12,14


// problem 6
for(var i=0; i<3; i++){
   for(var j=0; j<2; j++){ 
       console.log(i*j);
   }
}
// console 0,0, 0, 1, 0, 2

// problem 7
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<x; j++){ 
          console.log(i*j);
      }
   }
}
z = looping(3,3);
console.log(z);  //will leave it undefined since function dose not return anything
// console: 0,0,0,0,1,2,0,2,4

// Problem 8
function looping(x,y){
   for(var i=0; i<x; i++){
      for(var j=0; j<y; j++){ 
         console.log(i*j);
      }
   }
   return x*y; //will exicute only for last x,y values
}
z = looping(3,5);
console.log(z);
// console: 0,0,0,0,0,1,2,3,4,0,2,4,6,8,15
