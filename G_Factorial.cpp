#include <bits/stdc++.h>
using namespace std;

int main()
{
  int t;
  cin >> t;

  int n;
  for (int i = 1; i <= t; i++)
  {
    cin >> n;
    long long n1 = 1;
    for (int j = n; j >= 1; j--)
    {
      n1 *= j;
    }
    cout << n1 << endl;
  }

  return 0;
}