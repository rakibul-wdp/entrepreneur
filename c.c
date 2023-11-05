#include <stdio.h>
#include <string.h>

int main()
{
  char a[200];
  scanf("%s", a);

  for (int i = 0; i < strlen(a); i++)
    printf("%c", a[i]);

  return 0;
}