#include <bits/stdc++.h>
using namespace std;

void ascending(int x, int y, int z)
{
  int a = x, b = y, c = z;
  if (a > b)
  {
    swap(a, b);
  }
  if (b > c)
  {
    swap(b, c);
  }
  if (a > b)
  {
    swap(a, b);
  }

  cout << a << endl
       << b << endl
       << c << endl;
  cout << endl;
  cout << x << endl
       << y << endl
       << z << endl;
}

int main()
{
  int a, b, c;
  cin >> a >> b >> c;

  ascending(a, b, c);

  return 0;
}