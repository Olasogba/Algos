log = (val) => console.log(val)

function binarySearch(array, value) {
    let left = 0, right = array.length - 1

    while (left<=right) {
        let middle = Math.floor((left+right)/2)

        if(array[middle] > value) right = middle-1
        else if(array[middle] < value) left = middle + 1
        else return middle
        
    }
    return -1
}

log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,17], 1))
log(binarySearch([2,5,6,9,13,15,28], 15))

/**
 * Given a sorted array, and a value, return the index of that value in
 * the array if you find it, else return -1
 */

function find(arr, val) {
    let map = new Map()
    for(let i=0; i<arr.length; i++) {
        map.set(arr[i], i)
    }
    let left=0
    let right=arr.length-1
    while(left<=right) {
        let mid = Math.floor(left+right/2)
        if(arr[mid]<val) {
            left=mid+1
        }
        else if(arr[mid]>val) {
            right=mid-1
        } else {
            // console.log(arr[mid])
            return map.get(arr[mid])
        }
    }
 }

 console.log(find([1,2,3,4,5,6,7,8],8))