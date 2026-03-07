#include<iostream>
using namespace std;

void modify(int *b)  
{
    *b= *b + 5;
}
int main()
{
    int m = 10;
    int *j=&m;
    modify(j); 
    cout<<m;
    return 0;
}