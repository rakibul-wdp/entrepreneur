#include <iostream>
using namespace std;

int main()
{
   int n;

   cin >> n;
   int even = 0, odd = 0, pos = 0, neg = 0;

   for (int i = 1; i <= n; i++)
   {
      int a;
      cin >> a;

      if (a % 2 == 0)
         even++;
      else
         odd++;

      if (a > 0)
         pos++;
      else if (a < 0)
         neg++;
   }

   cout << "Even: " << even << endl
        << "Odd: " << odd << endl
        << "Positive: " << pos << endl
        << "Negative: " << neg << endl;

   return 0;
}