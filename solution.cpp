#include <iostream>
#include <cmath>
using namespace std;

int main()
{
   int a, b, c, d;

   cin >> a >> b >> c >> d;
   pow(a, b) > pow(c, d) ? cout << "Yes\n" : cout << "No\n";

   return 0;
}