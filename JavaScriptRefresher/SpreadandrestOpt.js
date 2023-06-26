// Spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray)

// Rest operator
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  console.log(sum(1, 2, 3, 4)); 
  console.log(sum(5, 10, 15));


  function add(...nmbr){
    return nmbr.reduce((curr,next) => curr +next,0);
  }

  console.log(add(12,34,45,87));
  console.log(add(25,24,41,78));
