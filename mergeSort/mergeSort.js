const mergeSort = array =>
{
   //check if array can be split
   if(array.length < 2) return array;
   
   const middle = Math.floor(array.length/2);
   // Get middle index
   const  leftSide = array.slice(0,middle);
   const rightSide = array.slice(middle,array.length)
   //Sorting Array In two sides
   //Use recursion to continue splitting

   return merge(mergeSort(leftSide),mergeSort(rightSide));

}

const merge = (left, right) => {
    
    //Create New Array
    const result = [];

    //Check if either left array or right array is empty
    while(left.length && right.length)
    {
         // find lower value
        if(left[0]<= right[0])
        {
                    //Add left value    
            result.push(left.shift())
        } else {
            //Add right value
            result.push(right.shift())
        }
        
     }
     //Merge left array
     while(left.length) result.push(left.shift());
     //merge right array
     while(right.length) result.push(right.shift());
     //return result array
     return result;

}

console.log(mergeSort([5,3,7,10,4,1,5]))