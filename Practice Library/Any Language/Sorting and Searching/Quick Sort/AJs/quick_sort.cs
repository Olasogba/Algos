using System;

public int? Pivot(List<int> arr, Nullable<int> start=null, Nullable<int> end=null) {
    if(start==null) start = 0;
    if(end==null) end = 0;
    int? swapIdx = start;
    int? pivot = arr[start];
    for(int? i=start+1; i<=end; i++) {
        if(arr[i]<pivot) {
            swapIdx++;
            Swap(arr, i, swapIdx);
        }
    }
    Swap(arr, swapIdx, start);
}

public List<int> QuickSort(List<int> arr, Nullable<int> start=null, Nullable<int> end = null) {
    if(start==null) start=0;
    if(end==null) end==arr.Count();
    int? pivotIdx = Pivot(arr);
    QuickSort(arr, start, pivotIdx);
    QuickSort(arr, pivotIdx+1, end);
    return arr;
}

public void Swap(List<int> arr, int i, int j) {
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

QuickSort(new List<int> {101,2,3,5,4,3,5,100,3,2,33,23,1,2,5,66,4,5,4,3,6,7,8,76,5,99,8,-6,0});