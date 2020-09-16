
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
    //swap(arr, start, swapIdx);
    console.log(arr)
    return swapIdx;
}

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[j]]

pivot([5,2,1,8,4,7,6,3])