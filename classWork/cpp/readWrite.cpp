#include <iostream>
#include <fstream>
#include <cstdlib>
#include <string>
using namespace std;
int main()
{
	string line;
	ifstream inFile;
	ofstream outFile;
	inFile.open("C://Users//Owner//Documents//employee.dat");
	outFile.open("C://Users//Owner//Documents//employee.bak");
	if (outFile.fail() | inFile.fail())
	{
		cout << "Your filepath is wrong!";
		exit(1);
	}
	else
	{
		while (inFile.good())
		{
			getline(inFile, line);
			outFile << line << "\n";
			cout << line << "\n";
		}
	}
	outFile.close();
	while (1);
}