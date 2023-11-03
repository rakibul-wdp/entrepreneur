#include <iostream>
using namespace std;

int main()
{
   int a, b, c, d, times;

   cin >> a >> b >> c >> d;
   a %= 100; // a = a % 100;
   b %= 100;
   c %= 100;
   d %= 100;
   times = a * b * c * d;
   times % 100 <= 9 && cout << 0;
   cout << times % 100;

   return 0;
}