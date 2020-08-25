`
Given a set
of coin values coins = {c1, c2,..., ck} and a target sum of money n, our task is to
form the sum n using as few coins as possible

`
log = (val) => console.log(val)
const coins = [1,2,3,4,5]

// state that we seek a solution for = solve(x)
// solve(x) = solve(x-selectedCoin) + 1 (1 meaning one coin has been selected)
// because we have 5 coins,
// solve(x) becomes the best solution among 
// solve(x-1) + 1
// solve(x-2) + 1
// solve(x-3) + 1,
// solve(x-4) + 1
// solve(x-5) + 1

let ready = []
let value = []
function solve(x) {
    // base case
    if(x < 0) return 100000
    if(x == 0) return 0;

    if(ready[x]) return value[x]

    let best = Infinity;
    for (let c of coins) {
        let temp = Math.min((solve(x-c) + 1), best)

        best = temp
    }

    ready[x] = true
    value[x] = best;

    return best;
}

log(solve(100))

