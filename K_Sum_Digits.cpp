#include <bits/stdc++.h>
using namespace std;

int main()
{
  int n;
  cin >> n;
  char s[1000001];
  cin >> s;

  long long sum = 0;
  for (int i = 0; i < n; i++)
  {
    sum += s[i] - 48;
  }
  cout << sum;

  return 0;
}