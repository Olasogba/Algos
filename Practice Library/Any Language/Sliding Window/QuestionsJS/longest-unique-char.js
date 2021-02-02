`
 Given a string, write a function that returns the longest sequence of
 unique characters within that string.
`
log = (...val) => console.log(...val)

function uniqueChar(string) {
    var longest = ''
    var i =0
    while(!longest.includes(string[i])){
        longest+=string[i]
        i++
    } 
    
    var temp = longest
    var j=i
    while(j<string.length) {
        if(temp.includes(string[j])) {
            temp = temp.replace(temp[0], '')
        } else {
            temp += string[j]
            longest = longest.length > temp.length ? longest : temp
        }
        j++
    }
    return longest
}

log(uniqueChar('helloqwtybnmkpcvvthereyyouifhdbgqwertyuiopzxcvbnmkkkgutn'))
log(uniqueChar('ABDEFGABEF'))
log(uniqueChar('BBBB'))
log(uniqueChar('GEEKSFORGEEKS'))
// log('herouifdgqwtypzxbnmk'.length)