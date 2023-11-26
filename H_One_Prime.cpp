#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;

  int d = 0;
  for (int i = 1; i <= n; i++)
  {
    if (n % i == 0)
      d++;
  }

  if (d == 2)
    cout << "YES" << endl;
  else
    cout << "NO" << endl;

  return 0;
}