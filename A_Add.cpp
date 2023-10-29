#include <bits/stdc++.h>
using namespace std;

int sum(int a, int b)
{
  int summation = a + b;
  return summation;
}

int main()
{
  int a, b;
  cin >> a >> b;

  int res = sum(a, b);

  cout << res << endl;

  return 0;
}