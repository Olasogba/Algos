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

class Solution {
    public:
    int solve(int n) {
        // we're working from the top state down to the base case.
        // we assign a state to an operation involving a lesser state till we reach the last state that provides us an optimal value

        // solve(x) -> solve(x-c) + 1


        bool isReady[100000];
        int cache[100000];

        function<int(int)> dp = [&](int x) -> int {
            // base case
            if(x < 0) return 1000000000;
            if(x == 0) return 0;
            if(isReady[x]) return cache[x];

            int best = INT_MAX;
            
            // looping through all coins, each representing a first choice / starting state
            for(auto c : coins) {
                best = min(best, (dp(x-c) + 1));
            }
            cache[x] = best;
            isReady[x] = true;

            return cache[x];
        };

        return dp(n);
    };
};


bool ready[100];
int value[100];

int solveIterative(int x) {
    // we're working from the base case upwards. getting all the values that !x may require based on the formula!

    // formula -> solveForSum(x) -> solve(x-coin) + 1

    // start looping for each x value, 0 should return 0
    // on each value of x, check solve for 0->x and store

    int cache[100];

    cache[0] = 0;

    for(int i=1; i<=x; i++) { // looping up until x
        cache[i] = INT_MAX;

        for(auto coin : coins) {
            cache[i] = min(cache[i], cache[i-coin]+1);
        }
    }

    return cache[x];
}

int main(void) {
    Solution *s = new Solution;
    cout<<s->solve(100)<<endl;
    cout<<(solveIterative(100))<<endl;
    return 0;
}

