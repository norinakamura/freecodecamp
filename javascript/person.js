
var Person = function(firstAndLast) {
   // Create a variable that will make copy of the full name
    var fullName = firstAndLast;
   // Create six methods needed and return what is asked
   // Use the split to turn full name into an array of first and last names and concatenate the unchanged portion of the name
  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };   
};

var bob = new Person('Bob Ross');
bob.getFullName();