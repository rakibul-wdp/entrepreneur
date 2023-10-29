#include <stdio.h>
#include <string.h>

int is_palindrome(char s[])
{
  int flag = 1;

  int i = 0, j = strlen(s) - 1;
  while (i < j)
  {
    if (s[i] == s[j])
    {
      i++;
      j--;
    }
    else
    {
      flag = 0;
      break;
    }
  }

  return flag;
}

int main()
{
  char s[11];
  scanf("%s", s);

  int res = is_palindrome(s);
  printf("%d", res);

  if (res)
    printf("Palindrome\n");
  else
    printf("Not Palindrome\n");

  return 0;
}