#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n, m;

  while (true)
  {
    cin >> n >> m;

    if (n <= 0 || m <= 0)
      break;

    int sum = 0;
    if (n < m)
    {
      for (int i = n; i <= m; i++)
      {
        cout << i << " ";
        sum += i;
      }
    }
    else
      for (int i = m; i <= n; i++)
      {
        cout << i << " ";
        sum += i;
      }

    cout << "sum =" << sum << endl;
  }

  return 0;
}