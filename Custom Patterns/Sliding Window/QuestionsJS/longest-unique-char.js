`
 Given a string, write a function that returns the longest sequence of
 unique characters within that string.
`
log = (val) => console.log(val)

function uniqueChar(string) {
    // get the longest sequence starting from the first character
    // remove the initial and add the next
    // keep adding the next until you reach a character that already exists
    // in which case you move on to the next left

    let longest = ''
    for(let char of string) {
        if(longest.includes(char)) break
        longest += char
    }

    let i=longest.length
    let currentSequence = longest
    while(i<string.length) {
        if(!currentSequence.includes(string[i])) {
            currentSequence += string[i]
            longest = currentSequence.length >= longest.length ? currentSequence : longest
            i++
        } else {
            currentSequence = currentSequence.replace(currentSequence[0], '')
        }
    }

    return longest
}

log(uniqueChar('helloqwtybnmkpcvvthereyyouifhdbgqwertyuiopzxcvbnmkkkgutn'))