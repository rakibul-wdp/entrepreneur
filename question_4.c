/*
1. Has Return + Parameter
2. Has Return + No Parameter
3. No Return + Parameter
4. No Return + No Parameter
*/

#include <stdio.h>

// 1. Has Return + Parameter
int sum(int a, int b)
{
  int summation = a + b;

  return summation;
}

// 2. Has Return + No Parameter
int times(void)
{
  int a = 10, b = 5;
  int multiply = a * b;

  return multiply;
}

// 3. No Return + Parameter
void sub(int a, int b)
{
  int subtract = a - b;

  printf("%d\n", subtract);
}

// 4. No Return + No Parameter
void division(void)
{
  int a = 50, b = 5;
  int div = a / 5;

  printf("%d\n", div);
}

int main()
{
  int a, b;

  int res = sum(a, b);
  int res_2 = times();
  sub(a, b);
  division();

  return 0;
}