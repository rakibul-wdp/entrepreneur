#include <iostream>
using namespace std;

int main()
{
   int a, b, c;
   char s;

   cin >> a >> s >> b;
   if (s == '>')
      c = a > b;
   else if (s == '<')
      c = a < b;
   else
      c = a == b;

   c ? cout << "Right\n" : cout << "Wrong\n";

   return 0;
}