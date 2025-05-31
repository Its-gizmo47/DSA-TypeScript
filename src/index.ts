function averagePair(arr: number[], avg: number): boolean {

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        console.log(arr[right], arr[left])
        let average = arr[left] + arr[right] / 2;
        if (average === avg) {
            return true;
        } else if (average < avg) {
            left++
        } else {
            right--
        }
    }

    return false
}

console.log(averagePair([1,3,3,5,6,7,10,12,19],8))
