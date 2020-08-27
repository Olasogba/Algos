log = (val) => console.log(val)
coins = [2,2,3,4,5]

let ready = []
let value = []
function solveRecurse(x) {
    // base case
    if(x < 0) return Infinity
    if(x == 0) return 0;

    if(ready[x]) return value[x]

    let best = Infinity;
    for (let c of coins) {
        let temp = Math.min((solveRecurse(x-c) + 1), best)

        best = temp
    }

    ready[x] = true
    value[x] = best;

    return best;
}

log(solveRecurse(5))

function solveIterative(n) {
    value[0] = 0
    for(let i=1; i<=n; i++) { // looping upwards and solving for all values till we reach our target value.
        value[i] = Infinity

        // loop over the coins
        for(let c of coins) {
            if(i-c >= 0) {
                value[i] = Math.min(value[i], (value[i-c] + 1))
            }
        }
    }
    return value[n]
}

log(solveIterative(5))