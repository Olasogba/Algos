const log = (...val) => console.log(...val)

function search(arr, n) {
    var left = 0
    var right = arr.length-1

    // find the middle
    while(left<right) {
        var mid = Math.floor((left+right)/2)
        if(arr[mid]<n) left = mid+1
        else if(arr[mid]>n) right = mid-1
        else return mid
    }
}


function searchRecursive(arr, targ, left=0, right=arr.length) {
    if(left>right)return -1
    var mid = Math.floor((left+right)/2)
    if(arr[mid]==targ) return mid
    if(arr[mid]<targ) return searchRecursive(arr, targ, mid+1, right)
    if(arr[mid]>targ) return searchRecursive(arr, targ, left, mid-1)
}


log(searchRecursive([2,5,6,9,13,15,28], 15))
log(search([1,2,3,4,5,6,7,8,9,10,11,17], 1))