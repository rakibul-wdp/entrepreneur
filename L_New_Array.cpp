#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;
  int a[n], b[n], c[n * 2];
  for (int i = 0; i < n; i++)
    cin >> a[i];
  for (int i = 0; i < n; i++)
    cin >> b[i];

  for (int i = 0; i < n; i++)
    c[i] = b[i];
  for (int i = 0; i < n; i++)
    c[n + i] = a[i];

  for (int i = 0; i < n * 2; i++)
    cout << c[i] << " ";

  return 0;
}