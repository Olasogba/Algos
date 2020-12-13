log = (val) => console.log(val)
/**
 * Find fib(n) in two solutions: recursively and iteratively
 */

 // fib(n) = fib(n-1) + fib(n-2)


 function fibRecurse(n) {
    let cache = []

    function fib(n) {
        if(n <= 2) return 1
        if(cache[n]) return cache[n]

        cache[n] = fib(n-1) + fib(n-2)

        return cache[n];
    }

    return fib(n)
 }

 log(fibRecurse(40))

 function fibIterative(n) {
     let cache = [0,1,1]

     for(let i=3; i<=n; i++) {
        cache[i] = cache[i-1] + cache[i-2]
     }

     return cache[n]
}


log(fibIterative(40))