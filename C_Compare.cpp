#include <bits/stdc++.h>
using namespace std;

int main()
{
  char s[100], t[100];
  cin >> s >> t;

  int result = strcmp(s, t);

  if (result < 0)
    cout << s << endl;
  else if (result > 0)
    cout << t << endl;
  else
    cout << s << endl;

  return 0;
}