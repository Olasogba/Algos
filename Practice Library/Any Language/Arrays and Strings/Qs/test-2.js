/**
 * Example, abbbccddddddddrrrrreeedddffeiiiooooo will return 'a'
 */


function solve2(a) {
    var arr = a.split('')
    var map = new Map()


    for(let x of arr) {
        if(!map.get(x))
            map.set(x, 1)
        else map.set(x, map.get(x)+1)
    }
    
    var smallest = Infinity
    var toRe = null
    for(var j of Array.from(map.keys())) {
        var y = map.get(j)
        if(y < smallest) {
            smallest = y
            toRe = j
        }
    }

    return toRe
}

console.log(solve("abbbccddddddddrrrrreeedddffeiiiooooo"))