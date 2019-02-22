/*This was my introduction to double arrays(matrix) in my intermediate C++ class
By Alexander Paniagua 2/22/2019*/

#include <iostream>
#include <cmath>
#include <string>
#include <iomanip>
#include <Windows.h>
using namespace std;

int main()
{
	int count =0,x, y, first[100][100], second[100][100], sum[100][100], aLength,aHeight,bLength,bHeight;
	while (count < 2) {

		if (count == 0)
			cout << "This is for the first matrix \n";
		else
			cout << "This is for the second matrix \n";

		//Inputs the user-defined dimensions of the matrix
		cout << "Input the number of rows in the matrix: ";
		cin >> x;
		cout << "Input the number of columns in the matrix: ";
		cin >> y;

		//Inputs the values into the matrix
		for (int i = 1; i <= x; i++)
		{
			for (int j = 1; j <= y; j++)
			{
				cout << "Input the value of the matrix at [" << i << "][" << j << "]: ";
				if (count == 0) {
					cin >> first[i][j];
				}
				if (count == 1) {
					cin >> second[i][j];
				}
			}
		}

		//Displays the matrix
		cout << "Now the matrix will be displayed: ";
		for (int k = 1; k <= x; k++)
		{
			cout << "\n";
			for (int l = 1; l <= y; l++)
			{
				
				if (count == 0) {
					cout << setw(4) << first[k][l];
					aLength = k;
					aHeight = l;
				}
				if (count == 1) {
					cout << setw(4) << second[k][l];
					bLength = k;
					bHeight = l;
				}
			}
		}

		cout << "\n\n";
		count++;
	}
	
	//Now the two matrixes will be added, and the sums will be inputted into the sum matrix
	//(Only if they have the same dimensions)
	cout << "The two matrixes will now be added ";
	if (aLength != bLength || aHeight != bHeight)
	{
		cout << "Sorry, the matrices are not the same dimensions";
	}
	else 
	{ 
		for (int i = 1; i <= aLength; i++)
		{
			for (int j = 1; j <= aHeight; j++)
			{
				sum[i][j] = first[i][j] + second[i][j];
			}
		}
		for (int k = 1; k <= x; k++)
		{
			cout << "\n";
			for (int l = 1; l <= y; l++)
			{

					cout << setw(4) << sum[k][l];
			}
		}
	}
	while (1);
	return 0;
}