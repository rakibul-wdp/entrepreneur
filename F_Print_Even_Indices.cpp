#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;
  int row = n, col = n;
  long long arr[row][col];
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
      cin >> arr[i][j];
  }

  long long sum_primary = 0, sum_secondary = 0;
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      if (i == j)
        sum_primary += arr[i][j];
      if (i + j == row - 1)
        sum_secondary += arr[i][j];
    }
  }

  cout << abs(sum_primary - sum_secondary);

  return 0;
}