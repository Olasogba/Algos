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

  int getLengthOfOptimalCompression(string s, int k) {    
    const int n = s.length();
    
    vector<vector<int>> cache(n, vector<int>(k + 1, -1));
    function<int(int, int)> dp = [&](int i, int k) -> int {
      if (k < 0) return n;
      if (i + k >= n) return 0;
      int& ans = cache[i][k]; 
      if (ans != -1) return ans;
      ans = dp(i + 1, k - 1); 
      int len = 0;
      int same = 0; 
      int diff = 0; 
      
      for (int j = i; j < n && diff <= k; ++j) {
        if (s[j] == s[i] && ++same) {
          if (same <= 2 || same == 10 || same == 100) ++len;
        } else {
          ++diff;
        }
        ans = min(ans, len + dp(j + 1, k - diff));
      }
      return ans;
    };
    return dp(0, k);
  }
};

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