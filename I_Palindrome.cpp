#include <bits/stdc++.h>
using namespace std;

int main()
{
  char arr[1001];
  cin >> arr;

  if (arr[0] == arr[strlen(arr) - 1] && arr[1] == arr[strlen(arr) - 2] && arr[2] == arr[strlen(arr) - 3])
    cout << "YES";
  else
    cout << "NO";

  return 0;
}