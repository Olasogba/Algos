
let ready = []
let value = []
function solveRecurse(x) {
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
