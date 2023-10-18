#include <bits/stdc++.h>
using namespace std;

int main()
{
  char arr[100001];
  cin >> arr;

  for (int i = 0; i < strlen(arr); i++)
  {
    if (arr[i] >= 65 && arr[i] <= 90)
      arr[i] = arr[i] + 32;
    else if (arr[i] >= 97 && arr[i] <= 122)
      arr[i] = arr[i] - 32;
    else if (arr[i] == 44)
      arr[i] = 32;
  }

  cout << arr << endl;

  return 0;
}