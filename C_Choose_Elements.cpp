#include <bits/stdc++.h>
using namespace std;

int main()
{
  long long n, k;
  cin >> n >> k;
  long long arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  for (int i = 0; i < n - 1; i++)
  {
    for (int j = i + 1; j < n; j++)
    {
      if (arr[i] < arr[j])
      {
        long long temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  long long sum = 0;
  for (int i = 0; i < k; i++)
    if (arr[i] > 0)
      sum += arr[i];

      cout
       << sum;

  return 0;
}