#include <bits/stdc++.h>
using namespace std;

int main()
{
  long long n, m;
  cin >> n >> m;
  long long arr[n];
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  long long count[m + 1] = {0};
  for (int i = 0; i < n; i++)
  {
    count[arr[i]]++;
  }

  for (int i = 1; i < m + 1; i++)
  {
    cout << count[i] << endl;
  }

  return 0;
}