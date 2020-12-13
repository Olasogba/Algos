`
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

[output] integer

The minimal number of moves needed to obtain a strictly increasing sequence from inputArray.
It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.
`

// how do we get from the input to a strictly increasing sequence
// if the next element is less or equal, add up the diff + 1
// do the same for the next elements
function solve(array) {
    let moves = 0
    for (let i=0; i<array.length; i++) {
        if (array[i+1] <= array[i]) {
            let diff = array[i]-array[i+1]
            moves += diff+1
            array[i+1] += diff+1
        }
    }
    return moves
}

console.log(solve([1,1,1]))