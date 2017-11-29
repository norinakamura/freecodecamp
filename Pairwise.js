
function pairwise(arr, arg) {
   if (arr.length === 0 || typeof arg !== 'number') { return 0; }
    var result = [];
 
    for (var i = 0; i < arr.length; i++) {          //Using outer for loop
        for (var j = 0; j < arr.length; j++) {		//Using inner loop
            if (i !== j && arr[i] + arr[j] === arg && result.indexOf(i) < 0 && result.indexOf(j) < 0) {   //Chech if the sum is equal to 2nd argument. We also use indexOf method here.
                result.push(i, j);					//Push both indices to the result array
                break;								//Use the lowest possible sum
            }
        };
    };
 
    return result.reduce(function(a, b) {			//Used  Array.reduce() method here
        return a + b;
    });
}
pairwise([1,4,2,3,0,5], 7);
