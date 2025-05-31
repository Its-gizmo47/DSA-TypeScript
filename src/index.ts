function findAllDuplicates(arr: number[]): undefined|number[] {
    let counter1: Record<string, number> = {}
    let queue: number[] = [];

    for (let value of arr) {
        if (undefined === counter1[value]) {
            counter1[value] = 1;
        } else {
            queue.push(value)
        }
    }

    return queue
}

console.log(findAllDuplicates([1, 1, 2, 3, 4, 4, 1]))
