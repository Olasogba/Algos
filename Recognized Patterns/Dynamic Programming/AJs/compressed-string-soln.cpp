// DYNAMIC PROGRAMMING
#include<iostream>
#include <vector>
#include <functional>
#include <string.h>
#include <limits.h>


using namespace std;

#include <string>


// Author: Huahua
class Solution {
public:
// aabbaa, 2 -> aaaa -> 4
  int getLengthOfOptimalCompression(string s, int k) {    
    const int n = s.length();
    // a table of each elements permutation => n is for each char, k(1-k) is for each removal of that character
    vector<vector<int>> cache(n, vector<int>(k + 1, -1));
    function<int(int, int)> dp = [&](int i, int k) -> int {
      if (k < 0) return n;
      if (i + k >= n) return 0;
      int& ans = cache[i][k]; // the address to store the computed value for the kth removal of element i
      if (ans != -1) return ans;
      ans = dp(i + 1, k - 1); // delete (k number of the ith character?) || solve the computation for char i and removal k 
      int len = 0; // aux increases
      int same = 0; // char similarity freq
      int diff = 0; // 
      // start from i, till length n & maximum removals
      for (int j = i; j < n && diff <= k; ++j) {
        // if charAt j == charAt i, increment same count
        if (s[j] == s[i] && ++same) {
          // aux increment
          if (same <= 2 || same == 10 || same == 100) ++len;
        } else {
          // are diff, increment
          ++diff;
        }
        // ans = min of every _computation_ of chatAt i and kth removal
        ans = min(ans, len + dp(j + 1, k - diff));
      }
      return ans;
    };
    return dp(0, k);
  }
}; // implement in js

int main(void){

    Solution *s=new Solution;
    
    cout<<s->getLengthOfOptimalCompression("aabbaa", 3)<<endl;  
    // cout<<s->getLengthOfOptimalCompression("ABBBCCDDCCC",3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("ABCDDDEFG", 2)<<endl;
    // cout<<s->getLengthOfOptimalCompression("A",0)<<endl;
    // cout<<s->getLengthOfOptimalCompression("ABC",0)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBCCC",2)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDCCC",3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDAAAAAA",3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDAAAAAAA",3)<<endl;
    
    return 0;
}