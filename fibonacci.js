// returns the nth number of the fibonacci series
const fibRecursion = (n) =>{
if(n<=2){
    return 1
}
return fibRecursion(n-1)+fibRecursion(n-2)
}
console.log(fibRecursion(9))
// Time Complexity  : O(2^N)   // because each call to the function results in two more calls, except for the base cases.
// Space Complexity : O(N)     // The space complexity of the function is O(n) because each call to the function requires space on the call stack to store the arguments and local variables. Since there are n function calls in the recursive chain, the space required on the call stack is proportional to n. 



// returns the whole fibonacci series from 1 to n 
const fibSeriesRecursion = (n) =>{
    if(n===1){
        return []
    }
    if(n===2){
        return [1,1]
    }
    const fibs = fibSeriesRecursion(n-1)
    fibs.push(fibs[fibs.length-1]+fibs[fibs.length-2])
    return fibs

}
console.log(fibSeriesRecursion(10))
// Time complexity:  O(n)  
// Space complexity: O(n)



// Fibonacci Series using Dynamic Programming

	function fibDp(n)
	{
		/* Declare an array to store Fibonacci numbers. */
		let f = new Array(n+2); // 1 extra to handle case, n = 0
		let i;
		/* 0th and 1st number of the series are 0 and 1*/
		f[0] = 0;
		f[1] = 1;
		for (i = 2; i <= n; i++)
		{
			/* Add the previous 2 numbers in the series
			and store it */
			f[i] = f[i-1] + f[i-2];
		}
		return f[n];
	}

	console.log(fibDp(7));

    // Time complexity:  O(n)
    // Space complexity: O(n)

    // Javascript program for Fibonacci Series using Space Optimized Method

function fibona(n)
{
	let a = 0, b = 1, c, i;
	if( n == 0)
		return a;
	for(i = 2; i <= n; i++)
	{
	c = a + b;
	a = b;
	b = c;
	}
	return b;
}

// Driver code

	
	
	console.log(fibona(9));





// Note that this function is designed
// only for fib() and won't work as
// general power function


function fibss( s)
{
	var F = [ [ 1, 1 ], [ 1, 0 ] ];
	
	if (s == 0)
		return 0;
		
	power(F, s - 1);
	
	return F[0][0];
}
// Helper function that multiplies 2
// matrices F and M of size 2*2, and
// puts the multiplication result
// back to F[][]
function multiply( F, M )
{
	x = F[0][0] * M[0][0] +
			F[0][1] * M[1][0];
	y = F[0][0] * M[0][1] +
			F[0][1] * M[1][1];
	z = F[1][0] * M[0][0] +
			F[1][1] * M[1][0];
	w = F[1][0] * M[0][1] +
			F[1][1] * M[1][1];
	
	F[0][0] = x;
	F[0][1] = y;
	F[1][0] = z;
	F[1][1] = w;
}
// Helper function that calculates F[][]
// raise to the power n and puts the
// result in F[][]

function power( F, s)
{
	var i;
	var M = [[ 1, 1 ], [ 1, 0 ]];
	
	// n - 1 times multiply the
	// matrix to {{1,0},{0,1}}
	for(i = 2; i <= s; i++)
		multiply(F, M);
}

// Driver code

	
	
	console.log(" " + fibss(11));

















