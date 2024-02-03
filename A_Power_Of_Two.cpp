#include <bits/stdc++.h>
using namespace std;

int main()
{
  long long n;
  cin >> n;

  if ((n & (n - 1)) == 0 && n > 0)
    cout << "YES" << endl;
  else
    cout << "NO" << endl;

  return 0;
}