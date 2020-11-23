/**
 * Given a string, find the number of times a provided substring occurs
 * in that string
 */


/**
 * Loop over the string
 * loop over the second string
 * for each character in the second string
 * if it matches, check the next characters till you reach the end
 * if there is a mismatch, break out of the inner loop
 */
function count(string, substr) {
    let count = 0
    for (let i=0; i<string.length; i++) {
        for(let j=0; j<substr.length; j++) {
            if(j == substr.length-1) {
                if(string[i+j]==substr[j]) count++
                break
            }
            if(string[i+j]==substr[j]) continue
            else break
        }
    }

    return count;
}

[1,2,3,4].sort()

console.log(count('wowomgxomgomomgyayomgggg', 'omg'))
console.log(count('ABABABCABABABCABABABC', 'ABABAC'))
console.log(count('AAAAAAAAAAAAAAAAAB', 'omg'))