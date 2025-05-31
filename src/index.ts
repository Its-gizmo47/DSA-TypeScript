function test(...args: string[]): boolean {
    if (args.length < 2) {
        return false
    }

    let left = 0;
    let first = 1;

    while (first < args.length) {
        console.log(first, left)
        if (args[left] === args[first]) {
            return true
        }
        first++
    }
    

    return false
}

console.log(test('1', '2', '4', "6"))
