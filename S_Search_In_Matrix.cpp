#include <bits/stdc++.h>
using namespace std;

int main()
{
  int row, col;
  cin >> row >> col;
  int arr[row][col];
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
      cin >> arr[i][j];
  }

  int x;
  cin >> x;

  int flag = 0;
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      if (arr[i][j] == x)
        flag = 1;
    }
  }

  if (flag)
    cout << "will not take number";
  else
    cout << "will take number";

  return 0;
}