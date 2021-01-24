`
    Write a function called which accepts an array of intergers and a 
    number called n. The fn should calculate the maximum sum of n
    consecutive elements in the array.

    [1,2,5,8,1,5],2 // 13
    [1,2,5,2,8,1,5],4 // 17
    [4,2,1,6],1 // 6
    [4,2,1,6,2,4], 4 // 13
    [], 4 // null
    
`
log = (...val) => console.log(...val)

function calc(arr, n) {
    if(arr.length==0) return null
   let max = 0

   // get the first n
   for (let i=0; i<n; i++) {
       max+=arr[i]
   }

   let temp = max
   for(let i=n; i<arr.length; i++) {
       temp = (temp-arr[i-n]) + arr[i]
       max = Math.max(temp, max)
   }

   log(max)
   return max
}

calc([1,2,5,8,1,5],2) // 13
calc([1,2,5,2,8,1,5],4) // 17
calc([4,2,1,6],1) // 6
calc([4,2,1,6,2,4], 4) // 13
calc([], 4) // null
