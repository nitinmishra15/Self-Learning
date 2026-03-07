#include<iostream>
using namespace std;

void change(int *x)  
{
    *x = *x + 5;
}
int main()
{
    int a = 10;
    change(&a); 
    cout<<a;
    return 0;
}