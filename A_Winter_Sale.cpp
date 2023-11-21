#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
  float a, b;
  cin >> a >> b;

  float actual = b / (1 - (a / 100));

  cout << fixed << setprecision(2) << actual << endl;

  return 0;
}