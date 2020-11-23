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