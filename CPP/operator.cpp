#include<iostream>
using namespace std;

int main()
{
    int a = 5, b = 3;
    cout<<"Unary Operator "<<++a<<endl;
    cout<<"Logical Operator  "<<(a>b && b>0)<<endl;
    int max = (a>b) ? a : b;
    cout<<"Ternary Operator "<<max<<endl;
    return 0;
}