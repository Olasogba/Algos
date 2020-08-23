// Brute Force DFS (TLE) !!!!!!!!!!

/*
Run-length encoding is a string compression method that works by replacing consecutive identical characters (repeated 2 or more times) 
with the concatenation of the character and the number marking the count of the characters (length of the run). For example, 
to compress the string "aabccc" we replace "aa" by "a2" and replace "ccc" by "c3". Thus the compressed string becomes "a2bc3".

Notice that in this problem, we are not adding '1' after single characters.

Given a string s and an integer k. You need to delete at most k characters from s such that the run-length encoded version of s has
minimum length.

Find the minimum length of the run-length encoded version of s after deleting at most k (non-consecutive) characters.


Example 1:

Input: s = "aaabcccd", k = 2
Output: 4
Explanation: Compressing s without deleting anything will give us "a3bc3d" of length 6. Deleting any of the characters 'a' or 'c' would 
at most decrease the length of the compressed string to 5, for instance delete 2 'a' then we will have s = "abcccd" which compressed is 
abc3d. Therefore, the optimal way is to delete 'b' and 'd', then the compressed version of s will be "a3c3" of length 4.
Example 2:

Input: s = "aabbaa", k = 2
Output: 2
Explanation: If we delete both 'b' characters, the resulting compressed string would be "a4" of length 2.
Example 3:

Input: s = "aaaaaaaaaaa", k = 0
Output: 3
Explanation: Since k is zero, we cannot delete anything. The compressed string is "a11" of length 3.

Constraints:

1 <= s.length <= 100
0 <= k <= s.length
s contains only lowercase English letters.

*/

// DYNAMIC PROGRAMMING
#include<iostream>
#include <vector>
#include <functional>
#include <string.h>
#include <limits.h>


using namespace std;

#include <string>


class Solution {
public:
  int getLengthOfOptimalCompression(string s, int k) {    
    const int n = s.length();
    vector<vector<int>> cache(n, vector<int>(k + 1, -1));
    function<int(int, int)> dp = [&](int i, int k) -> int {
      if (k < 0) return n;
      if (i + k >= n) return 0;
      // referencing the result of a computation
      int& ans = cache[i][k];
      
      if (ans != -1) return ans;
      ans = dp(i + 1, k - 1); // delete

      int len = 0;
      int same = 0;
      int diff = 0;
      // start from the first element
      // iterate till the last checking for the new length 
      for (int j = i; j < n && diff <= k; ++j) {
        if (s[j] == s[i] && ++same) {
          if (same <= 2 || same == 10 || same == 100) ++len;
        } else {
          ++diff;
        }
        int temp = min(ans, len + dp(j + 1, k - diff));
        ans = temp; // iterating thru a removal of 0-k for each j
      }
      return ans;
    };
    return dp(0, k);
  }
};


int main(void){
    
    Solution *s=new Solution;

    
    cout<<s->getLengthOfOptimalCompression("aaabbccc",2)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAAAAAAAAAABXXAAAAAAAAAA", 3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("ABCDDDEFG", 2)<<endl;
    // cout<<s->getLengthOfOptimalCompression("A",0)<<endl;
    // cout<<s->getLengthOfOptimalCompression("ABC",0)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBCCC",2)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDCCC",3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDAAAAAA",3)<<endl;
    // cout<<s->getLengthOfOptimalCompression("AAABBDAAAAAAA",3)<<endl;
    
    return 0;
}