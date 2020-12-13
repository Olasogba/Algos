/**
 * There are many cars parked in the parking lot. 
 * The parking is a straight very long line and a parking slot for every single 
 * meter. There are cars parked currently and you want to cover them from the rain 
 * by building a roof. The requirement is that at least k cars are covered by the 
 * roof.What's the minium length of the roof that would cover k cars?
 
    The function has the following parameters:
    - cars: integer array of length denoting the parking slots where cars are parked
    - k: integer denoting the number of cars that have to be covered by the roof
 */

function dilemma(list, k) {
   // first sort
   // measure the initial k
   // slide through the list and compare

   list = list.sort((a,b) => a-b)

   let min = list[k-1]-list[0]
   let temp = min

   for(let i=k; i<list.length; i++) {
      temp = list[i]-list[i-k+1]
      min = Math.min(min, temp)
   }

   return min
}


console.log(dilemma([6,2,12,7], 3)) // 5
console.log(dilemma([6,2,12,7], 2)) // 1
console.log(dilemma([6,2,12,7,4,3,5], 3)) // 2