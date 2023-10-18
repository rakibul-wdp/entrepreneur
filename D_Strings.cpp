#include <bits/stdc++.h>
using namespace std;

int main()
{
  string s, t, s_f;
  cin >> s >> t;

  cout << s.size() << " " << t.size() << endl;
  cout << s + t << endl;

  s_f = s[0];
  s[0] = t[0];
  t[0] = s_f[0];
  cout << s << " " << t << endl;

  return 0;
}