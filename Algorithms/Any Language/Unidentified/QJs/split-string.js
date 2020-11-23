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

 /**
  * // edge cases first
  * 
  * then
  * 
  * 
  * since the no of 'a's would be divisible by 3
  * using a frequency counter
  * each time we reach two times the partition, we add up the frequency of that partition
  */

  function ways(string) {
    let countOfA = (string.match(/a/g) || []).length // no of a in the string

    if(!countOfA) {
      // no 'a's present
      return (string.length - 2)*(string.length - 1) / 2
    }

    if(countOfA % 3 != 0) return 0 // non divisible


    let map = new Map() // where to store the frequency occurence

    let result = 0, partition = countOfA/3, frequency = 0
    for(let char of string) {
      frequency += char == 'a' ? 1 : 0

      if(frequency == 2*partition) result += map.get(partition)

      if(map.get(frequency)) map.set(frequency, frequency+1)
      else
      map.set(frequency, 1)
    }

    return result
  }

  log = (val)=>console.log(val)
  log(ways('babaa'))














 /**
  * Because we know that freq a can be split in three equal parts

everytime our frequency count of a is twice the no of 'a's on each part,

we sum up/aggregate the value of (an operation where we find the number of times we reach the frequency of 'a' expected on each part)... each of these times
  */