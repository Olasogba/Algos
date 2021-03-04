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

  function ways(string) {
    // get the no of a occurences
    // must be divisible by 3
    // loop over the string
    // track the freq
    // when freq==2*partition, get the value of 2
    // return
    var freqA = (string.match(/a/g) || []).length

    if(!freqA) return (string.length*string.length)/2

    if (freqA%3 != 0) return 0


    
    var freq = 0
    var partition = freqA/3
    var results = 0

    var map = new Map()
    for (var i of string) {
      freq += i=='a' ? 1 : 0

      if(freq==2*partition) 
        results += map.get(partition)

      map.set(freq, (map.get(freq) || 0)+1)
      log(map)
    }

    return results
  }


  log = (...val)=>console.log(...val)
  log(ways('babaa'))














 /**
  * Because we know that freq a can be split in three equal parts

everytime our frequency count of a is twice the no of 'a's on each part,

we sum up/aggregate the value of (an operation where we find the number of times we reach the frequency of 'a' expected on each part)... each of these times
  */