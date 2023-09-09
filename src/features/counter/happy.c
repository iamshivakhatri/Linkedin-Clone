/*  Simple program to demonstrate declaring variables, for-loop and output */
/*  The program outputs a table of fahrenheit to celsuis conversions for 0 to 300 degrees F */

#include <stdio.h>

void main()
{
	int fahr, cels;									// fahr = fahrenheit, used as loop index, cels = celsium
	int lower = 0, upper = 300, step = 20;			// for loop values for initial, end and stepsize values

	for(fahr = lower; fahr <= upper; fahr += step)
	{
		cels = 5 * (fahr - 32) / 9;					// note the division is an integer division, we may lose precision
		printf("%d\t%d\n", fahr, cels);
	}
}