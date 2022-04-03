/**
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
    Input: n = 3
    Output: ["((()))","(()())","(())()","()(())","()()()"]

    Input: n = 1
    Output: ["()"]

    INput n =2
    Output = [()(), (())]
 */


/**
 * 
    Given a string containing digits from 2-9 inclusive, return all possible letter combinations that 
    the number could represent. Return the answer in any order.

    A mapping of digit to letters (just like on the telephone buttons) is given below. 
    Note that 1 does not map to any letters.

    Input: digits = "23"
    Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 */


/**
 * 
 * Given a string s, return the longest palindromic substring in s.
 * 
    Input: s = "babad"
    Output: "bab"
    Note: "aba" is also a valid answer.

    Input: s = "cbbd"
    Output: "bb"

    Input: s = "a"
    Output: "a" 
 */

function solve(string) {
    if(isPalindrome(string)) return string;
    var list = []
    var current = ''

    for(var i=0; i<string.length; i++) {
        var j=i+1
        var current = string[i]
        while(j<string.length) {
            current+=string[j]
            if(current.length>1&&isPalindrome(current)) {
                list.push(current)
            }
            j++
        }
    }
    // console.log(list)
    var max = -Infinity
    var val = ''
    for(var v of list) {
        if(v.length > max) {
            max = v.length
            val = v;
        }
    }

    return val;
}


function isPalindrome(string) {
    const str = string
    return str.split('').reverse().join('') == string
}


console.log(solve('babad'))
console.log(solve('forgeeksskeegfor'))
console.log(solve('bananas'))
console.log(solve('abcddcefffegh'))
// console.log(isPalindrome('efffe'))