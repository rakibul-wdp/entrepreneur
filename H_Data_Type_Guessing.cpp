#include <bits/stdc++.h>
using namespace std;

int main()
{
  double n, k, a;
  cin >> n >> k >> a;

  double result = (n * k) / a;
  long long myNum = result;
  double myRes = result - myNum;

  if (myRes > 0)
    cout << "double" << endl;
  else if (myNum <= 2147483647)
    cout << "int" << endl;
  else
    cout << "long long" << endl;

  return 0;
}