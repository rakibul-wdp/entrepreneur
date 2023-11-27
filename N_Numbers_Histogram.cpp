#include <bits/stdc++.h>
using namespace std;

int main()
{
  int minimum = INT_MIN;
  for (int i = 0; i <= 8; i++)
  {
    if (i > minimum)
      minimum = i;
  }

  cout << minimum << endl;

  return 0;
}