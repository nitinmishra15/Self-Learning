#include<iostream>
using namespace std;

void change(int &c) { 
    c = c + 5;
}
int main()
{
    int b = 10;
    cout<<"Before fn call: "<<b<<endl;
    change(b);   
    cout<<"After fn call: "<<b<<endl;
    return 0;
}

