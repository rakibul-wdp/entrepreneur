#include <iostream>
using namespace std;

int main()
{
  int a, b, c;
  cin >> a >> b >> c;

  int first = a;
  if (b < first)
    first = b;
  if (c < first)
    first = c;

  if (first == a)
    cout << first << endl
         << min(b, c) << endl
         << (min(b, c) == b ? c : b) << endl;
  else if (first == b)
    cout << first << endl
         << min(a, c) << endl
         << (min(a, c) == c ? a : c) << endl;
  else if (first == c)
    cout << first << endl
         << min(a, b) << endl
         << (min(a, b) == a ? b : a) << endl;

  cout << endl;

  cout << a << endl
       << b << endl
       << c;

  return 0;
}