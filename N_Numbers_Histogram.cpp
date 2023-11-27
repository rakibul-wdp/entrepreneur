#include <bits/stdc++.h>
using namespace std;

int main()
{
  char s;
  cin >> s;
  int n;
  cin >> n;
  int arr[n];
  for (int i = 0; i < n; i++)
    cin >> arr[i];

  for (int i = 0; i < n; i++)
  {
    for (int j = 1; j <= arr[i]; j++)
      cout << s;
    cout << endl;
  }

  return 0;
}