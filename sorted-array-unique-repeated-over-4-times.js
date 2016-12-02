var a1 = [1,1,1,1,1,2,2,2,2,7,9,9,9,9,9,9,12,12,99,99,99,99];
var a2 = [1,47,2];
var a3 = [1,77,4,4,4,4,4,4,4,4,4,4, 6,6,8,8,8,8,8];



function moreThanFour(array) {
  // Write a function that accepts a sorted array as a parameter
  // and returns a new array of unique elements where each element
  // in the new array appears more than four times in the original
  // array.
  // moreThanFour([1,2]) returns []
  // moreThanFour([1,4,4,4,4,4, 6,6,8,8,8,8,8]) returns [4, 8]
  // create a new array
  // create variables to keep track of how many times you've
  // seen the current element.
  // use a for loop to look through the original array
  // return the new array
  var newArray = [];
  var count =0;
  for(i=0; i<array.length-1; i++){
    if(array[i]===array[i+1]){
      count++;
      if(count===3){
        newArray.push(array[i]);
      }
    } else{
      count=0;
    }
  }
  return newArray;

}

function max(array){
  //find the max of an array
  var max=0;
  for(i=0; i<array.length; i++){
    if(array[i]>max){
      max=array[i];
    }
  }
  return max;
}

console.log(moreThanFour(a1));
console.log(moreThanFour(a2));
console.log(moreThanFour(a3));

console.log(max(a1));
console.log(max(a2));
console.log(max(a3));
