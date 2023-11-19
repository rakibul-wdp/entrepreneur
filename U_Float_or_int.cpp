#include <iostream>
#include <cmath>
#include <iomanip>
using namespace std;

int main()
{
  float n;
  cin >> n;

  int x = floor(n);

  if (x == n)
    cout << "int " << x << endl;
  else
    cout << "float " << x << " " << setprecision(3) << (n - x) << endl;

  return 0;
}