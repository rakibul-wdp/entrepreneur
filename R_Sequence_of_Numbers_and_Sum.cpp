#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n, m;
  cin >> n >> m;

  if (n < m)
  {
    for (int i = n; i <= m; i++)
    {
      printf("%d ", i);
    }
  }

  return 0;
}