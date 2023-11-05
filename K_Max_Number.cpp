#include <bits/stdc++.h>
using namespace std;

int fun(int arr[], int n, int i)
{
  if (i == n)
    return INT_MIN;

  int max = fun(arr, n, i + 1);

  if (arr[i] > max)
    return arr[i];
  else
    return max;
}

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  int res = fun(arr, n, 0);
  cout << res;

  return 0;
}