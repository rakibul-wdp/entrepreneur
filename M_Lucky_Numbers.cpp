#include <bits/stdc++.h>
using namespace std;

int main()
{
  int a, b;
  cin >> a >> b;

  bool found = false;

  for (int i = a; i <= b; i++)
  {
    int num = i;
    bool isLucky = true;

    while (num > 0)
    {
      int digit = num % 10;
      if (digit != 4 && digit != 7)
      {
        isLucky = false;
        break;
      }
      num /= 10;
    }

    if (isLucky)
    {
      cout << i << " ";
      found = true;
    }
  }

  if (!found)
    cout << -1;

  return 0;
}