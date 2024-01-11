#include <bits/stdc++.h>
using namespace std;

void fun(int *a, int *b)
{
  int tmp = *a;
  *a = *b;
  *b = tmp;
}

int main()
{
  int a, b;
  cin >> a >> b;

  fun(&a, &b);

  cout << a << " " << b << endl;

  return 0;
}