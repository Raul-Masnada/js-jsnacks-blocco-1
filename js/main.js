var arr = [34,4356,234,6,54,23,4,6,2,7,6,8,23,756,7,3,42,4,458,887,345,367];
var htmlPair = document.getElementById("pair");
var htmlOdd = document.getElementById("odd");

for (var i = 0; i < arr.length; i++)

var elem = arr[i];
if (elem % 2 == 0)
htmlPair.innerHTML += elem + " ";
else
htmlOdd.innerHTML += elem + " ";
