#include <bits/stdc++.h>
using namespace std;

int main()
{
  int a, b;
  cin >> a >> b;

  if (a > b)
  {
    int res = b / 2;
    for (int i = 1; i <= res; i++)
    {
      if (a / i == 0)
        cout << i << endl;
    }
  }
  else
  {
    int res = a / 2;
    for (int i = 1; i <= res; i++)
    {
      cout << i << endl;
      if (b / i == 0)
        cout << i << endl;
    }
  }

  return 0;
}