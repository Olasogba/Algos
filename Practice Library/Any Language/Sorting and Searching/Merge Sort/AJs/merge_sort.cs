using System.Collections;
using System.Double;

public List<int> Merge(List<int> a, List<int> b) {
    // merges two sorted array
    var results = new List<int>();
    int i=0;
    int j=0;
    
    while(i<a.Count() && j<b.Count()) {
        if(a[i] > b[j]) {
            results.Add(b[j]);
            j++;
        }
        else {
            results.Add(a[i]);
            i++;
        }
    }
    while(i<a.Count()) {
        results.Add(a[i]);
        i++;
    }

    while(j<b.Count()) {
        results.Add(b[j]);
        j++;
    }
    return results;
}

public List<int> MergeSort(List<int> nums) {
    if(nums.Count()<=1) return nums;
    
    int mid = nums.Count()/2;
    var a1 = new List<int>();
    var a2 = new List<int>();
    for (int i = 0; i < mid; i++)
    {
        a1.Add(nums[i]);
    }
    for (int i = mid; i < nums.Count(); i++)
    {
        a2.Add(nums[i]);
    }
    var left = MergeSort(a1);
    var right = MergeSort(a2);

    var ans = Merge(left, right);
    return ans;
}


Console.WriteLine(string.Join(",", MergeSort(new List<int> {1,3,4,2,4,5,6,4,1,33,6,78,8,9,5,0,-6})));
// Merge(new List<int> {1}, new List<int> {2});