using System;
using System.Collections.Generic;



public string BubbleSort(List<int> arr) {
    var i = arr.Count-1;
    while(i>=0) {
        for(var j=0; j<i; j++) {
            if(arr[j+1]<arr[j]) Swap(arr, j, j+1);
        }
        i-=1;
    }
    return string.Join(",", arr);
}

public int PivotFinder(List<int> arr, int start=91000, int end=91000) {
    if(start==91000) start=0;
    if(end==91000) end=arr.Count-1;

    var pivot = arr[start];
    var i=start+1;
    var swapIdx = start;

    while(i<=end && arr[i]<pivot) {
        swapIdx++;
        Swap(arr, swapIdx, i);
        i++;
    }
    Swap(arr, swapIdx, start);
    return swapIdx;
}

public string QuickSort(List<int> arr, int start=91000, int end=91000) {
    if(start==91000) start=0;
    if(end==91000) end = arr.Count-1;

    if(start<end) {
        var pivot = PivotFinder(arr, start, end);
        QuickSort(arr, start, pivot-1);
        QuickSort(arr, pivot+1, end);
    }

    return string.Join(",", arr);
}

public string InsertionSort(List<int> arr) {
    for(var i=1; i<arr.Count; i++) {
        var j=i-1;
        var current = arr[i];
        while(j>=0 && arr[j] > current) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1]=current;
    }
    return string.Join(",", arr);
}

public List<int> Merge(List<int> a, List<int> b) {
    int i=0;
    int j =0;
    var results = new List<int>();
    while(i<a.Count && j<b.Count) {
        if(a[i] < b[j]) {
            results.Add(a[i]);
            i++;
        } else {
            results.Add(b[j]);
            j++;
        }
    }

    while(i<a.Count) {
        results.Add(a[i]);
        i++;
    }

    while(j<b.Count) {
        results.Add(b[j]);
        j++;
    }

    return results;
}

public List<int> MergeSort(List<int> arr) {
    if(arr.Count<=1) return arr;
    int mid = arr.Count/2;
    var a = new List<int>();
    var b = new List<int>();
    for(var i=0; i<mid; i++) {
        a.Add(arr[i]);
    }
    for(var i=mid; i<arr.Count; i++) {
        b.Add(arr[i]);
    }
    var left = MergeSort(a);
    var right = MergeSort(b);

    var ans = Merge(left, right);
    return ans;
}

public void Swap(List<int> arr, int i, int j) {
    var temp = arr[i];
    arr[i]= arr[j];
    arr[j]=temp;
}




public void Sort(List<int> array) {
    Console.WriteLine(BubbleSort(array));
    Console.WriteLine(QuickSort(array));
    Console.WriteLine(InsertionSort(array));
    Console.WriteLine(string.Join(",",MergeSort(array)));
    // PivotFinder(array);
}



Sort(new List<int> {9,8,7,6,5,4,3,2,1,0,-1,-2,-3});