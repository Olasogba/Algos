
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }
  
/**
 * Call the pivot helper on the array
 * 
 * When the helper returns to you the updated pivot index, recursively call
 * the pivot helper on the subarray to the left of that index, and the subarray
 * to the right of that index
 * 
 * Your base case occurs when you consider a subarray with less than 2 
 * elements
*/

function quickSort(arr, left=0, right=arr.length-1) {
    if(left<right) {
        let pivotIdx = pivot(arr, left, right)
        // left
        quickSort(arr, left, pivotIdx-1)
        // right
        quickSort(arr, pivotIdx+1, right)        
    }
    return arr

}

console.log(quickSort([1,4,3,5,32,6,7,6,8,7,66,5,4,3,4,6]))
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))