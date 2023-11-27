#include <bits/stdc++.h>
using namespace std;

int main()
{
  int a, b;
  cin >> a >> b;

  if (a > b)
  {
    int minimum = INT_MIN;
    for (int i = 1; i <= b; i++)
    {
      if (a % i == 0 && b % i == 0)
      {
        if (i > minimum)
          minimum = i;
      }
    }
    cout << minimum << endl;
  }
  else
  {
    int minimum = INT_MIN;
    for (int i = 1; i <= a; i++)
    {
      if (b % i == 0 && a % i == 0)
      {
        if (i > minimum)
          minimum = i;
      }
    }
    cout << minimum << endl;
  }

  return 0;
}