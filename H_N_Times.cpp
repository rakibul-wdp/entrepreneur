#include <bits/stdc++.h>
using namespace std;

int main()
{
  int t;
  cin >> t;
  for (int i = 1; i <= t; i++)
  {
    int n;
    char c;
    cin >> n >> c;

    for (int j = 1; j <= n; j++)
      cout << c << " ";
    cout << endl;
  }

  return 0;
}