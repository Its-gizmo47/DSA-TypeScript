function sortedFrequency(arr: number[], find: number): number
{
    let firstIdx = findFirstIdx(arr, find);
    if (firstIdx === -1) return firstIdx;
    let lastIdx = findLastIdx(arr, find, firstIdx);

    return lastIdx - firstIdx + 1;
}


function findFirstIdx(arr: number[], find: number): number {
    const idx = -1;
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === find) {
            if (arr[mid -1] !== find) {
                return mid;
            } else if (arr[mid -1] === find) {
                right = mid - 1
            }
        } else if (arr[mid] < find)  {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return idx;
}

function findLastIdx(arr: number[], find: number, firstIdx: number): number {
    const idx = firstIdx;
    let left = firstIdx;
    let right = arr.length - 1;
    let loop = 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === find) {
            if (arr[mid + 1] !== find) {
                return mid;
            } else if (arr[mid + 1] === find) {
                left = mid + 1
            }
        } else if (arr[mid] < find)  {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return idx;
}



console.log(
    sortedFrequency([1,1,2,2,2,2,3],2), // 4 
    sortedFrequency([1,1,2,2,2,2,3],3), // 1 
    sortedFrequency([1,1,2,2,2,2,3],1), // 2 
    sortedFrequency([1,1,2,2,2,2,3],4), // -1
)