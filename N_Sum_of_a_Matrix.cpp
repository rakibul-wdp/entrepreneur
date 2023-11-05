#include <bits/stdc++.h>
using namespace std;

int main()
{
  int row, col;
  cin >> row >> col;
  int arr[row][col], arr2[row][col], arr3[row][col];
  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
      cin >> arr[i][j];
  }

  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
      cin >> arr2[i][j];
  }

  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      arr3[i][j] = arr[i][j] + arr2[i][j];
    }
  }

  for (int i = 0; i < row; i++)
  {
    for (int j = 0; j < col; j++)
    {
      cout << arr3[i][j] << " ";
    }
    cout << endl;
  }

  return 0;
}