function hhash(key, arrayLen) {
    let total = 0
    for(let char of key) {
        // map 'a' to 1, 'b' to 2, 'c' to 3, etc
        let value = char.charCodeAt(0) - 96
        total = (total+value)%arrayLen
    }
    return total
}

log = (val) => console.log(val)


/**
 * PROBLEMS WITH THE ABOVE
 * - Only hashes strings (Wwe won't worry about this yet)
 * - Not constant time - linear in key length
 * - Could be a little more random (most likely would result in clustered data)
 * 
 */

function hash(key, arrayLen) {
    let total = 0
    let WEIRD_PRIME = 31
    for (let i=0; i<Math.min(key.length, 100); i++) { // setting a max key length
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen // adding more randomness
    }
    return total;
}

log(hash('pink', 13))
log(hash('orangered', 13))
log(hash('cyan', 13))
log(hash('mike', 13))
log(hash('hello', 13))