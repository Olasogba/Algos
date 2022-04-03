// Brute force

#include <bits/stdc++.h>
using namespace std;
string solve(int n);

// find two even numbers that add up to w
int main() {
    int n;
    cin >> n;
    solve(n);

    return 0;
}


string solve(int n) {
    if(n==2) { 
        cout << "NO"; 
        return "";
    }
    for (int i = 1; i <= n; i++)
    {
        if(i%2==0) {
            if((n-i)%2==0) {
                cout << "YES" << endl;
                return "";
            }
        }
    }

    cout << "NO";
    return "";
}