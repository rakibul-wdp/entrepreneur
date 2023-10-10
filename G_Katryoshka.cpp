#include <iostream>
using namespace std;

int main()
{
  long long e, m, b;
  cin >> e >> m >> b;

  long long t1, t2, t3;
  t1 = e / 1;
  t2 = m / 1;
  t3 = b / 1;

  long long min = t1;
  if (t2 < min)
    min = t2;
  if (t3 < min)
    min = t3;

  if (((e - min) / 2) <= (b - min))
    cout << min + ((e - min) / 2) << endl;
  else if ((e - min) >= ((b - min) * 2))
    cout << min + (b - min) << endl;
  else
    cout << 0 << endl;

  return 0;
}