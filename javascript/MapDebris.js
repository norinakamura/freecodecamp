//GM and earthRadius are both given
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 //A for loop is used to iterate through each item in the array arr
  for(var i = 0; i < arr.length; i++){
 //Calculate the Orbital period using the formula
 //Add orbitalPeriod property that holds the value for each iteration	
    arr[i].orbitalPeriod = Math.round((2*Math.PI)*Math.sqrt(Math.pow((earthRadius+arr[i].avgAlt),3)/GM));
 //Delete the avgAlt property   
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
