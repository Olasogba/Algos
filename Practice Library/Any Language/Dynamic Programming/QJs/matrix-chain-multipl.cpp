/*
    Given n matrices, find the parenthesization with the least number of
    multiplications
*/
#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int tdp[100][100];

// Recursive into Top-Down dp
int MatrixChain(int m[], int i, int j) {
    // Base case (provides the fundamental solution to our problem)
    if(i==j) {
        tdp[i][j] = 0;
        return 0;
    }

    // Overlapping subproblem
    if(tdp[i][j] != -1) {
        return tdp[i][j];
    }

    int ans = INT_MAX;
    // loop through all iterations of j (the number of matrices to be multiplied) and apply the formular that solves the problem for us
    for(int k=i; k<j; k++) {
        // temp is the formula that solves the problem
        // finds the no of multiplations for each binary tree, picks the minimum each time
        int temp = MatrixChain(m,i,k) + MatrixChain(m,k+1,j) + m[i-1]*m[k]*m[j];
        ans = min(ans,temp);
    }

    tdp[i][j] = ans;
    return ans;
}


int main() {
    int matrices[] = {1,2,3,4};

    int n = sizeof(matrices)/sizeof(int);

    memset(tdp, -1, sizeof(tdp));
    cout<<MatrixChain(matrices, 1, n-1)<<endl; // => i = 1, j = [3] (last element of the arr)


    return 0;
}