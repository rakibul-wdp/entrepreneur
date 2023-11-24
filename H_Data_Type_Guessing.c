#include <stdio.h>
#include <limits.h>

int main()
{
  long long n, k, a;
  scanf("%lld %lld %lld", &n, &k, &a);

  long long lng = (n * k) / a;
  double result = (double)n * k / a;

  if (result == lng)
  {
    if (result >= INT_MIN && result <= INT_MAX)
      printf("int\n");
    else
      printf("long long\n");
  }
  else
    printf("double\n");

  return 0;
}

/*
GNU G++20 11.2.0 (64 bit, winlibs) // c++


*/