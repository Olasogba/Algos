/**
 * A function 

solution(a, b, c)

takes in three parameters 

A = ["Ames", "Sandy", "Squidward", SpongeBob"]
B = ["123456789", "789123456", "343456787", "115678456"]
C = "5678"

The Arrays A and B contains the names and numbers of people with their corresponding indexes.
Write a function that follows the following rules.

A(N) <= 100
B(N) <= 100
B[i] must be a digit and B[i](N) <= 9
C must be a digit and C(N) <= 9

The function must return the name with the corresponding index of a number that has the digits in C,
If more than one item in the B array contains those numbers, the solution should return the number
with the highest value starting with the digits in parameter C e.g.

Solution (A, B, C) //would return SpongeBob
 */

function solve(a, b, c) {
    // return name where b[i] contains c
    // if list > 1, return highest of slice c -> end

    // map the names to the numbers
    // return the values that contain c
    // if more that 1, map to a sliced c
        // find index of c[0], substr to the end
    // return the max

    var map = new Map();
    for(let i=0; i<a.length; i++) {
        map.set(a[i], b[i])
    }
    var has = Array.from(map.keys()).filter(x => {
        return map.get(x).includes(c)
    })

    if(has.length==1) return has[0]

    if(has.length>1) {
        var f = c[0]
        var x = has.map(x => {
            var i = map.get(x).indexOf(f)
            return +map.get(x).substr(i)
        })
        return Array.from(map.keys()).filter(c => map.get(c).includes(Math.max(...x).toString()))[0]// Math.max(...x)
    }
}


console.log(solve(["Ames", "Sandy", "Squidward", "SpongeBob"], ["123456789", "789123456", "343456787", "115678456"], "5678"))

