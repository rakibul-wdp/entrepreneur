#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
   double r, area;

   cin >> r;

   cout << fixed << setprecision(9);

   area = 3.141592653 * (r * r);
   cout << area;

   return 0;
}