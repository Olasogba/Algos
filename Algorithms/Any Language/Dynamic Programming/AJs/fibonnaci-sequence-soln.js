log = (val) => console.log(val)
function f(n) { // memoized solution
    let count = 0
    let cache = {}

    function fib(n) {
        count++
        if(n<=2) return 1
        if(cache[n]) return cache[n]
        cache[n] = fib(n-1) + fib(n-2)
        
        return fib(n-1) + fib(n-2)
    }

    return fib(n)
}

log(f(101))


function f2(n) { // tabulated solution
    if(n<=2) return 1
    let cache = [0,1,1 ]
    for(let i=3; i<=n; i++) {
        cache[i] = cache[i-1] + cache[i-2]
    }

    return cache[n]
}

log(f2(101))


