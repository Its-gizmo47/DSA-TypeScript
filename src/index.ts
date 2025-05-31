function findPair(arr: number[], diff: number): boolean {
    arr.sort((a, b) => a - b)
    let i = 0
    let j = 1

    while (i < arr.length && j < arr.length) {
        
        let difference = arr[j] - arr[i];
        console.log(i, arr[i], arr[j], difference)
        if (Math.abs(difference) === Math.abs(diff)) {
            return true;
        } else if (difference < diff) {
            j++;
        } else {
            i++
        }
    }

    return false
}

console.log(findPair([6,1,4,10,2,4], 2))
