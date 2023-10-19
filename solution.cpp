#include <iostream>
#include <string>
using namespace std;

bool check_number(string str) {
   for (int i = 0; i < str.length(); i++) {
      if (!isdigit(str[i]))
         return false;
   }
   return true;
}

int main() {
   std::string word;
   std::string result;

   std::cin >> word;

   if (!check_number(word)) {
      if (word.size() > 10) {
         result = word[0] + to_string(word.size() - 2) + word.back();
         std::cout << result;
      } else {
         std::cout << word;
      }
   }

   return 0;
}