public int[] sort(int[] list) {
    for (int i = 1; i < list.Count(); i++)
    {
        var currentval = list[i];
        var j=i-1;
        while(j>=0 && list[j]>currentval) {
            list[j+1]=list[j];
            j--;
        }
        list[j+1]=currentval;
    }

    foreach (var item in list)
    {   
        Console.WriteLine(item);
    }
    return list;
}

sort(new [] {1,3,4,2,4,5,6,4,1,33});