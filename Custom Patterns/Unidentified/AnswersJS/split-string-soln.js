/**
 * You are given string S consisting of letters 'a' and 'b'. You want to split
 * it into three seperate non-empty parts. The lengths of the parts can differ
 * from one another.
 * 
 * In how many ways can you split S into three parts, such that each part 
 * contains the same number of letters 'a'?
 * 
 * Examples:
 * 1. Given S = 'babaa', the function should return 2. The possible splits
 *    are 'ba | ba | a' and 'bab | a | a'.
 * 
 * 2. Given S = 'ababa' the function should return 4. The possible splits are
 *    'a | ba | ba', 'a | bab | a', 'ab | a | ba' and 'ab | ab | a'.
 * 
 * 3. Given S = 'aba', the function should return 0. It is impossible to split
 *    S as required.
 * 
 * 4. Given S = 'bbbbb', the fuction should return 6, The possible splits are:
 *    'b | b | bbb', 'b | bb | bb', 'b | bbb | b', 'bb | b | bb', 'bb | bb | b'
 *    and 'bbb | b | b'. Each part contains the same number of letters 'a'.
 *    i.e 0.
 * 
 * Write an effecient algorithm for the following assumptions:
 * - N is an integer within the range [1...40000]
 * - string S contains only letters 'a' and 'b'
 */


log = (val) => console.log(val)

/**
 * After we take care of the edge cases,
 * Solution to main problem:
 * Since we're always going to have the same number of 'a's on each partition
 * Our answer would be
 * 
 * a frequency count of one partition, each time we iterate over two times of one partition
 */

function ways(string) {
    let countOfA = (string.match(/a/g) || []).length

    // edge case no a's
    if(!countOfA) return (string.length * string.length)/2 // splitting into three parts

    // edge case a isn't divisible
    if(countOfA % 3 != 0) return 0

    let map = new Map() // frequency counter
    let result = 0, frequency = 0, partition = countOfA/3

    for(let char of string) {
        frequency += char == 'a' ? 1 : 0

        if(frequency == 2*partition) {
            result += map.get(partition)
        }

        map.set(frequency, (map.get(frequency) || 0) + 1)
    }

    return result
}


log(ways('babaa'))