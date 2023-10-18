#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  int min = arr[0], max = arr[0], min_index, max_index;
  for (int i = 1; i < n; i++)
  {
    if (arr[i] < min)
    {
      min = arr[i];
      min_index = i;
    }
    if (arr[i] > max)
    {
      max = arr[i];
      max_index = i;
    }
  }

  arr[min_index] = max;
  arr[max_index] = min;

  for (int i = 0; i < n; i++)
  {
    cout << arr[i] << " ";
  }

  return 0;
}