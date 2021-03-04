`
# Words processing
The given text:
«It used to take hours or days to do something similar in the past. How is it possible to deploy, deploy and configure, configure and connect and finally build the back-end cloud services as well as configure the front-end so quickly with so much less lines of code?»

1. Implement the method, which will enumerate all the (unique) words in the string, and sort them alphabetically 

SAs: case-sensitive/case-insensitive
`
log = (...val) => console.log(...val)
function process(string) {
    // find the unique words in the string
    // push into new
    // sort the new
    var ans = []
    var arr = (string.split(' '))
    for(var i of arr) {
        if(ans.find(c => c.toLowerCase().includes(i.toLowerCase()))) continue
        ans.push(i)
    }
    
    ans.sort((a,b) => {
        if(a[0].toLowerCase() > b[0].toLowerCase()) return 1
        if(a[0].toLowerCase() < b[0].toLowerCase()) return -1
        return 0
    })
    log(ans)
    return ans
}

process("It used to take hours or days to do something similar in the past. How is it possible to deploy, deploy and configure, configure and connect and finally build the back-end cloud services as well as configure the front-end so quickly with so much less lines of code?")