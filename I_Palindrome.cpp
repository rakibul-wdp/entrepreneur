#include <bits/stdc++.h>
using namespace std;

int main()
{
  char s[1001];
  cin >> s;

  int flag = 1;
  int i = 0, j = strlen(s) - 1;
  while (i < j)
  {
    if (s[i] == s[j])
    {
      i++;
      j--;
    }
    else
    {
      flag = 0;
      break;
    }
  }

  for (int i = strlen(s) - 1; i >= 0; i--)
  {
    if (s[i] == 48)
      cout << "";
    else
      cout << s[i];
  }

  cout << endl;

  if (flag)
    cout << "YES" << endl;
  else
    cout << "NO" << endl;

  return 0;
}