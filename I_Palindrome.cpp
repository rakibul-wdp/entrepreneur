#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;

  int reversed = 0;
  int original = n;

  while (n != 0)
  {
    int digit = n % 10;
    n = n / 10;

    if (reversed != 0 || digit != 0)
    {
      reversed = reversed * 10 + digit;
    }
  }

  cout << reversed << endl;

  if (original == reversed)
  {
    cout << "YES" << endl;
  }
  else
  {
    cout << "NO" << endl;
  }

  return 0;
}