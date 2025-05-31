function test(...args: string[]): boolean {
    if (args.length < 2) {
        return false
    }

    let left = 0;
    for (let i = 1; i < args.length; i++) {
        console.log(args[left], args[i]);
        if (args[left] === args[i]) {
            return true;
        } else {
            left++;
        }
    }
    

    return false
}

console.log(test('1', '2', '4', "6"))
