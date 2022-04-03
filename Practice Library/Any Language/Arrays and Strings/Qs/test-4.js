/**
  MinWindowSubstring(strArr) take the array of strings stored in strArr, 
  which will contain only two strings, the first parameter being the string 
  N and the second parameter being a string K of some characters, and your 
  goal is to determine the smallest substring of N that contains all the 
  characters in K. For example: if strArr is ["aaabaaddae", "aed"] then 
  the smallest substring of N that contains the characters a, e, and d is 
  "dae" located at the end of the string. So for this example your program 
  should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then
 the smallest substring of N that contains all of the characters in K
  is "aabd" which is located at the beginning of the string.
   Both parameters will be strings ranging in length from 1 to 50 characters
    and all of K's characters will exist somewhere in the string N.
    Both strings will only contains lowercase alphabetic characters.
 */


function solve(arr) {
    var list = []
    var a = arr[0]
    var b = arr[1]
    var current = ""

    for(var i=current.length; i<a.length; i++) {
        var j=i+1;
        current = a[i]
        while(j<a.length) {
            current += a[j]
            if(includes(sorted(current), sorted(b))) {
                list.push(current);
                break;
            }
            j++;
        }
    }

    var min = Infinity
    var val = ''
    for(var i of list) {
        if(i.length <= min) {
            min = i.length
            val = i
        }
    }

    return val
}

function includes(a, b) {
    var x = {}
    var y = {}
    for(var i of a) {
        x[i] = x[i] ? x[i] + 1 : 1
    }
    
    for(var i of b) {
        y[i] = y[i] ? y[i] + 1 : 1
    }

    for(var i of Object.keys(y)) {
        if(!x[i] || x[i] < y[i]) return false
    }

    return true
}

function sorted(string) {
    var x = string
    return x.split('').sort().join('');
}


function solve1(arr) {
    
}

console.log(solve(["aaabaaddae", "aed"]))
console.log(solve(["aabdccdbcacd", "aad"]))