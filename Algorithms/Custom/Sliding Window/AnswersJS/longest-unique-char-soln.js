
log = (val) => console.log(val)

/**My solution */
function uniqueChar(string) {
    // get the longest sequence from the first character
    // start on the next character, and keep adding,
    // if while adding, you meet an already present character, 
    // compare the added sequence with the first sequence
    // then start from the next character of the new sequence
    let max = '', current  = ''
    for(let i of string) {
        if(max.includes(i)) break
        max += i
    }

    current = max
    let i = current.length
    while(i<string.length) {
        if(!current.includes(string[i])) {
            current += string[i]
            max = current.length > max.length ? current : max
            i++
        } else {
            current = current.replace(current[0], '')
        }
    }
    return log(max)
}

uniqueChar('helloqwtybnmkpcvvthereyyouifhdbgqwertyuiopzxcvbnmkkkgutn')