using namespace std;

#include <vector>
#include <iostream>
#include <limits>
#include <bits/stdc++.h>

/*
Given a set
of coin values coins = {c1, c2,..., ck} and a target sum of money n, our task is to
form the sum n using as few coins as possible
*/

// solve(x) = solve(x-c) + 1
// x < 0 ? solve(x) = Infinity
// x = 0 ? solve(x) = 0 // 0 coins needed to solve 0 sum
// Finally, if x > o, the variable c represents all possibilities of first coin chosen
vector<int> coins = {1,2,3,4,5};
bool ready[100];
int value[100];

int solve(int x) {
    if(x < 0) return 1000000000;
    if(x == 0) return 0;
    if(ready[x]) return value[x];

    int best = INT_MAX;
    
    // looping through all coins, each representing a first choice / starting state
    for(auto c : coins) {
        best = min(best, (solve(x-c) + 1));
    }
    value[x] = best;
    ready[x] = true;

    return best;
}

int main(void) {
    cout<<(solve(100))<<endl;
    return 0;
}

