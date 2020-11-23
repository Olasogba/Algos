using namespace std;

#include <vector>
#include <iostream>
#include <limits>
#include <bits/stdc++.h>
#include <functional>

/*
Given a set
of coin values coins = {c1, c2,..., ck} and a target sum of money n, our task is to
form the sum n using as few coins as possible
*/
vector<int> coins = {1,2,3,4,5};

int solveRecurse(int sum) {
    bool isReady[100000];
    int cache[100000];

    // recursive formula => solve(sum) = min (solve(sum-coin) + 1)

    function<int(int)> dp = [&](int x) -> int {
        // base case
        if(x ==0 ) return 0;
        if(x < 0) return 10000000;

        // memoized
        if(isReady[x]) return cache[x];

        int minimum = INT_MAX;

        for(auto coin : coins) {
            minimum = min(minimum, dp(x-coin)+1);
        }

        isReady[x] = true;
        cache[x] = minimum;

        return cache[x];
    };    

    return dp(sum);
}


int solveIterative(int sum) {
    int cache[100000];
    int first[100000];
    cache[0] = 0;
    // solving for sum, starting from a known sum up to targeted sum
    // solving for sum x,
    // we start from an optimal answer for 0, then move upwards to x using all preceeding values for the next value.
    // x => x-c + 1

    for(int i=1; i<=sum; i++) { //looping up until sum
        cache[i] = INT_MAX;
        for(auto coin : coins) {
            if(i-coin >=0 && cache[i-coin]+1 < cache[i]) {
                cache[i] = cache[i-coin]+1;
                first[i] = coin;
            }
        }
    }
    return cache[sum];
}

int main(void) {
    cout<<solveIterative(100)<<endl;
    cout<<solveRecurse(100)<<endl;
    return 0;
}