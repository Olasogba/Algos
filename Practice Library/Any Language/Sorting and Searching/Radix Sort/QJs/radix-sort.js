log = (val) => console.log(val)
/**
 * Radix helper methods
*/


/**
 * We want to get the number in a given index
 * The target is indexed from the right
 * 
 * convert the target to a string
 * (length-place-1) gets the index from the right
 */
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if(num == 0) return 1
    return Math.floor(Math.log10(Math.abs(num)))+1
}

function mostDigits(nums) {
    let count = 0
    for (let item of nums) {
        count = Math.max(count, digitCount(item))
    }
    return count
}

/** 
 * Figure out how many digits the largest number has
 * 
 * Loop from k = 0 up to this largest number of digits
 * 
 * Foreach iteration of the loop
 *  - Create a bucket for each digit (0 to 9)
 *  - Place each number in the corresponding bucket
 * 
 * Replace our existing array with values in our buckts, starting with
 * 0 and going up to 9
 * 
 * return list at the end
*/
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){ // for each iteration of the breadth of the largest number
        let digitBuckets = Array.from({length: 10}, () => []); // create n buckets where n is base
        for(let i = 0; i < nums.length; i++){ // for each value to be sorted
            let digit = getDigit(nums[i],k); // get the base of it's right most digit and store the value in the associated bucket
            digitBuckets[digit].push(nums[i]);
            log(digitBuckets)
        }
        nums = [].concat(...digitBuckets); // collate the results at the end of each iteration of the max value breadth
        log(nums)
    }
    return nums;
}

log(digitCount(1234567890))
log(radixSort([2313231,2255,3334,4]));
//log(radixSort([23,345,5467,12,2345,9852]))