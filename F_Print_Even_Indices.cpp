#include <bits/stdc++.h>
using namespace std;

void fun(int arr[], int n, int i)
{
  if (i == n)
    return;

  fun(arr, n, i + 1);
  if (i % 2 == 0)
    cout << arr[i] << " ";
}

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  fun(arr, n, 0);

  return 0;
}