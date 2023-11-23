#include <iostream>
using namespace std;

int main()
{
  int n;
  cin >> n;
  int arr[n];

  for (int i = 0; i < n; i++)
  {
    cin >> arr[i];
  }

  bool flag = true;
  for (int i = 0; i < n; i++)
  {
    int main = arr[i];
    for (int j = n - 1; j >= 0; j--)
    {
      if (main != arr[j])
      {
        flag = false;
        break;
      }
    }
  }

  if (flag)
    cout << "NO" << endl;
  else
    cout << "YES" << endl;

  return 0;
}