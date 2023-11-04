#include <bits/stdc++.h>
using namespace std;

long long sum = 0;
void fun(int arr[], int n, int i)
{
  if (i == n)
    return;

  sum += arr[i];

  fun(arr, n, i + 1);
}

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  fun(arr, n, 0);
  cout << sum;

  return 0;
}