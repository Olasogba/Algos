log = (val) => console.log(val)
/*

    Given a set
    of coin values coins = {c1, c2,..., ck} and a target sum of money n, our task is to
    calculate the total number of ways to produce a sum x using the coins

*/

let coins = [1,3,4,9,7,3,2,4,6,7,1,1,4,3,5,6,8]

/**
 * Total no of ways for sum n would be for each coin, the total no of (x-coin) => 
 * totalWays(n) => totalWays(n-c1) + totalWays(n-c2) + totalWays(c3) + ... + totalWays(cN)
 * 
 * e.g for coins = [1,2,3,4]
 * the total no of ways for x would be the
 * total no of ways for x-1 + tot(x-2) + tot(x-3) + tot(x-4)
 * tot(5) = tot(4) + tot(3) + tot(2) + tot(1)
 */

 let cache = []

function solveRecurse(x) {
    // base case
    if(x == 0) return 1;
    if(x < 0) return 0

    // memoized
    if(cache[x]) return cache[x]

    let ways = 0
    for(let coin of coins) {
        ways += solveRecurse(x-coin)
    }

    cache[x] = ways

    return ways
}

function solveIterative(x) {
    // solve for the smallest optimal state and work up to the target value.
    let cache = []
    cache[0] = 1
    for(let i=1; i<=x; i++) {
        cache[i] = 0
        for(let coin of coins) {
            if(i-coin >= 0) {
                cache[i] += cache[i-coin]
            }
        }
    }
    return cache[x]
}

log(solveRecurse(12))
log(solveIterative(12))



