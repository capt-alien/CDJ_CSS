#!Javascript

// 1)Given an array and a value Y, count and print the number of array values
// greater than Y.

function greater_than(arr, y){
    count=0
    for(var i=0; i< arr.length; i++){
        if(arr[i]<y){
            count++
            console.log(count)
        }
    }
}


// 2)Given an array, print the max, min and average values for that array.
function array_stats(arr){
    max = arr[0]
    min = arr[0]
    sum = arr[0]
    for(var i=1; i<arr.length; i++){
        sum += arr[i]
        if(arr[i]> max){
            max=arr[i];
        }
        else if (arr[i]< min){
            min=arr[i];
        }
    }
    avg= sum/arr.length
    return [max, min, avg]
}

// 3)Given an array of numbers, create a function that returns a new array where
//  negative values were replaced with the string ‘Dojo’.   For example,
//  replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function(arr){
    for( i=0; i<arr.length; i++){
        if (arr[i]<0){
            arr[i] = 'Dojo';
        }
    }
    return arr
}


// 4)Given array, and indices start and end, remove values in that index range,
// working in-place (hence shortening the array).  For example,
//  removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].

function(arr, start, finish){
    next_arr = []
    for (var i =start; i<=finish; i++){
        next_arr.push(arr[x])
    }
    return next_arr
}
