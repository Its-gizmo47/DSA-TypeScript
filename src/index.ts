function maxSubarraySum(arr: number[], total: number): null|number {
    if (arr.length < total) {
        return null
    }
    let max = 0

    for (let i = 0; i < total; i++) {
        max += arr[i];
    }

    let temp = max;
    for (let i = total; i < arr.length; i++) {
        temp = temp - arr[i - total] + arr[i] 
        if (temp > max) {
            max = temp
        }
    }


    return max;
}
console.log(

    maxSubarraySum([100,200,300,400], 2), // 700
    maxSubarraySum([1,4,2,10,23,3,1,0,20], 4),  // 39 
    maxSubarraySum([-3,4,0,-2,6,-1], 2), // 5
    maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2), // 5
    maxSubarraySum([2,3], 3), // null
    
)