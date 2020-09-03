#include<iostream>
#include <vector>
using namespace std;

#include <string>
    

class Solution{
private:
    std::string s;
    std::string k;
    
public:
    
    int get_length(int n, int base=10){
        if(n<2)  return n;
        int ret=1;
        
        while(n>0){
            ret++;
            n/=base;
        }
        return ret;
    }
    
    int compress(string s, int k){
        
        int L=s.length();
        if(L<=k)return 0;
        
        int i,ans=L-k;
        int count_start=0,cost_start=0;
        int count_end=0,cost_end=0;
        
        for(i=k;i<L&&s[i]==s[k];i++)count_end++;
        cost_end=get_length(count_end);
        for(;i<L;){
            int cnt=0;
            char d=s[i];
            for(;i<L&&d==s[i];i++)cnt++;
            cost_end+=get_length(cnt);
        }
        
        ans=min(ans,cost_end);
        if(k==0) return ans;

        for(i=1;i<=L-k;i++){// first delete i, last=i+k-1
           if(i==1){count_start=1;cost_start=1;}
           else{
               if(s[i-1]==s[i-2]){
                   cost_start+=get_length(count_start+1)-get_length(count_start);
                   count_start++;
               }
               else{
                   cost_start++;
                   count_start=1;
               }
           }
           
           if(i==L-k){
               cost_end=0;
               count_end=0;
           }           
           else if(s[i+k-1]==s[i+k]){
               cost_end+=get_length(count_end-1)-get_length(count_end);
               count_end--;
           }
           else{
               cost_end--;
               count_end=0;
               for(int j=i+k;j<L&&s[j]==s[i+k];j++)count_end++;
           }
           
           int cost=cost_start+cost_end;
           if(i!=L-k&&s[i-1]==s[i+k])cost+=get_length(count_start+count_end)-get_length(count_start)-get_length(count_end);
           ans=min(ans,cost);
        }
        
        return ans;   
    }
};
    
    
int main(void){

    Solution *s=new Solution;
    vector<string> msg{"something here"};
    cout<<s->compress("ABBBCCDDCCC",3)<<endl;
    cout<<s->compress("AAAAAAAAAAABXXAAAAAAAAAA", 3)<<endl;
    cout<<s->compress("ABCDDDEFG", 2)<<endl;
    // cout<<s->compress("A",0)<<endl;
    // cout<<s->compress("ABC",0)<<endl;
    // cout<<s->compress("AAABBCCC",2)<<endl;
    // cout<<s->compress("AAABBDCCC",3)<<endl;
    // cout<<s->compress("AAABBDAAAAAA",3)<<endl;
    // cout<<s->compress("AAABBDAAAAAAA",3)<<endl;
    
    return 0;
}


// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

/*function solution(S) {
    // ababababababab
    // --- --- ---
    // a-- a-- a--
    
    // in how many ways can you have a evenly spread across 3 segments
    let aCount = (S.match(/a/g) || []).length
    
    if(!aCount) {
        return (S.length-2)*(S.length-1)/2
    }
    
    if(aCount % 3 != 0) return 0
    
    let div = aCount/3, ans= 0, NoA = 0
    let map = new Map()
    for(let i = 0; i<S.length; i++) {
        NoA += S[i] == 'a' ? 1 : 0
        if(NoA == 2*div) {
            ans += map.get(div)
        }
        map.set(NoA, (map.get(div) || 0) + 1)
    }
    return ans
}

/**

// solve and understand these guys\' own

// THEN

// each day
// identify 5 problems under a pattern. (https://leetcode.com/problemset/all/?topicSlugs=sliding-window)
// THEN
// watch the video, understand the concept, then attempt these problems using a timer
// sites: 
https://app.codility.com/programmers/lessons/17-dynamic_programming/
https://projecteuler.net/?utm_medium=email
https://www.hackerrank.com/?utm_medium=email


// then
// when all patterns have been covered
// repeat, taking each pattern per day, solve all the problems under it


*/
