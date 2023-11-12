#include <bits/stdc++.h>
using namespace std;

void fun(int arr[], int n, int i)
{
  for (int i = 0; i < n; i++)
  {
    cout << arr[i];
  }
}

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  // fun(arr, n, 0);

  for (int i = 0; i < n; i++)
  {
    if (arr[i] == 0)
      cout << arr[i];
  }

  return 0;
}