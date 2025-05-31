function test(num1: number, num2: number): boolean {
    let first: string = num1.toString()
    let sec: string = num2.toString()

    if (first.length !== sec.length) {
        return false
    }

    let counter1: Record<string, number> = {}
    let counter2: Record<string, number> = {}

    for (let value of first) {
        counter1[value] = ++counter1[value] || 1
    }
    for (let value of sec) {
        counter2[value] = ++counter2[value] || 1
    }

    for (let key in counter1) {
        if (!(key in counter2)) {
            return false;
        }
        if (counter1[key] !== counter2[key]) {
            return false
        }
    }

    return true
}

console.log(test(3589578, 5879385))
