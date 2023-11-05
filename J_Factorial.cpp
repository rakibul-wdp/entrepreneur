#include <bits/stdc++.h>
using namespace std;

long long fun(int n)
{
  if (n == 0)
    return 1;

  long long ans = fun(n - 1);
  return ans * n;
}

int main()
{
  int n;
  cin >> n;

  long long res = fun(n);
  cout << res;

  return 0;
}