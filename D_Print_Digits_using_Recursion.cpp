#include <bits/stdc++.h>
using namespace std;

void fun(int x)
{
  // if (x == 0)
  //   return;

  cout << x << endl;

  // fun(x - 1);
}

int main()
{
  int n;
  cin >> n;
  for (int i = 1; i <= n; i++)
  {
    int x;
    cin >> x;

    fun(x);
  }

  return 0;
}