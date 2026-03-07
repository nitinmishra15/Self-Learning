#include<iostream>
using namespace std;

int main()
{
    int m = 5, n = 3;
    cout<<"Unary Operator "<<++m<<endl;
    cout<<"Logical Operator  "<<(m>n && n>0)<<endl;
    int max = (m>n) ? m : n;
    cout<<"Ternary Operator "<<max<<endl;
    return 0;
}