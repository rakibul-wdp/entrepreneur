#include <iostream>
using namespace std;

int main()
{
  char c;
  cin >> c;

  int ascii = int(c);

  if (ascii == 122)
    cout << char(97) << endl;
  else
    cout << char(ascii + 1) << endl;

  return 0;
}