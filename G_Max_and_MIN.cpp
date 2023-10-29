#include <bits/stdc++.h>
using namespace std;

void min_max(int arr[], int n)
{
  int max = arr[0], min = arr[0];

  for (int i = 0; i < n; i++)
  {
    if (arr[i] < min)
      min = arr[i];
    else if (arr[i] > max)
      max = arr[i];
  }

  cout << min << " " << max;
}

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  min_max(arr, n);

  return 0;
}