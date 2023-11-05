#include <iostream>
using namespace std;

int main()
{
   int n;

   cin >> n;

   int big = 0;

   for (int i = 1; i <= n; i++)
   {
      int b;
      cin >> b;

      if (i == 1)
         big = b;

      if (b > big)
         big = b;
   }
   cout << big << endl;

   return 0;
}