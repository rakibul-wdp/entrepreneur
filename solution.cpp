#include <iostream>
#include <cctype>
using namespace std;

int main()
{
   char x;

   cin >> x;

   if (isalpha(x))
   {
      if (isupper(x))
         cout << "ALPHA\nIS CAPITAL";
      else
         cout << "ALPHA\nIS SMALL";
   }
   else
      cout << "IS DIGIT";

   return 0;
}