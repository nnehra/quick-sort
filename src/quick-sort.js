'use strict';

var leftIndex, rightIndex;

function quickSort(input) {
    
    if(input instanceof Array)
    {
        if(input.length === 0)
            {
                return input;
            }
        else
            {
                var left = 0;
                var right = input.length-1;
                var result = Sort(input, left, right);
            }
        return result;
        }
    else
    {
        throw "Expected result to be array";
    }

};
var Sort = function(array, left, right)
 {
    leftIndex = partition(array, left, right);

    if (left < leftIndex - 1){
    Sort(array, left, leftIndex-1);
    }

    if (right > leftIndex){
    Sort(array, leftIndex, right);
    }

    return array;
 }

var swap = function(array, left, right)
 {
    var temp;
    temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;    
 }

var partition = function(array, left, right)
 {
    var pivotIndex = Math.floor( (left + right) / 2);
    var pivot = array[pivotIndex];

    leftIndex = left;
    rightIndex = right;

    while (leftIndex <= rightIndex){
    while(array[leftIndex] < pivot){
      leftIndex++;
    }

    while(array[rightIndex] > pivot){
      rightIndex--;
    }

    if (leftIndex <= rightIndex){
      swap(array, left, right);
      leftIndex++;
      rightIndex--;
    }
    }
    return leftIndex;
}
module.exports = quickSort;
