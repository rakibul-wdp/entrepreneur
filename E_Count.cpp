#include <bits/stdc++.h>
using namespace std;

int main()
{
  char s[1000001];

  cin >> s;

  int sum = 0;
  for (int i = 0; i < strlen(s); i++)
  {
    sum += s[i] - '0';
  }

  cout << sum << endl;

  return 0;
}