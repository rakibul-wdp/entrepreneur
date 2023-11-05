#include <bits/stdc++.h>
using namespace std;

void fun(int x)
{
  if (x == 0)
    return;

  int n = x % 10;
  fun(x / 10);
  cout << n << " ";
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
    if (x == 0)
      cout << "0";

    cout << endl;
  }

  return 0;
}