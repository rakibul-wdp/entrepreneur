#include <iostream>
#include <cctype>
using namespace std;

int main()
{
   int A, B, C, max, min;

   cin >> A >> B >> C;

   max = A;

   if (B > max)
      max = B;
   if (C > max)
      max = C;

   min = A;

   if (B < min)
      min = B;
   if (C < min)
      min = C;

   cout << min << " " << max;

   return 0;
}