#include <bits/stdc++.h>
using namespace std;

int main()
{
  string s, t;
  cin >> s;

  t = s;

  int i = 0,
      j = s.size() - 1;
  while (i < j)
  {
    char tmp = s[i];
    s[i] = s[j];
    s[j] = tmp;
    i++;
    j--;
  }

  int flag = 0;
  for (int i = 0; i < s.size(); i++)
  {
    for (int j = 0; j < t.size(); j++)
      if (s[j] == t[i])
        flag = 1;
      else
        flag = 0;
  }

  if (flag)
    cout << s << endl
         << "YES" << endl;
  else
  {
    int flag2 = 0;
    for (int i = 0; i < s.size(); i++)
    {
      if (s[0] == '0')
        flag2 = 1;
    }
    if (flag2)
      cout << s.erase(0, 1) << endl
           << "NO" << endl;
    else
      cout << s << endl
           << "NO" << endl;
  }

  return 0;
}

/*

000250
052000

52000
NO

*/