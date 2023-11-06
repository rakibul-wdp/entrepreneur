#include <iostream>
using namespace std;

int main()
{
   int n;

   cin >> n;

   for (int i = 1; i <= n; i++)
   {
      string number;
      cin >> number;
      int size = number.size();

      for (int z = size - 1; z >= 0; z--)
      {
         cout << number[z] << " ";
      }
      cout << endl;
   }

   return 0;
}