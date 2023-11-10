#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;

  int p = n / 365;
  int q = (n % 365) / 30;
  int r = (n % 365) % 30;

  cout << p << " years" << endl
       << q << " months" << endl
       << r << " days";

  return 0;
}