#include<iostream>
using namespace std;

void modify(int &c) { 
    c = c + 5;
}
int main()
{
    int b = 10;
    cout<<"Before fn call: "<<b<<endl;
    modify(b);   
    cout<<"After fn call: "<<b<<endl;
    return 0;
}

