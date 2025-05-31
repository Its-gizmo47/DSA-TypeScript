function test(message: string, letters: string): boolean {
    if (message.length > letters.length || letters.length === 1) {
        return false
    }
    let messageCounter: Record<string, number> = {}
    let letterCounter: Record<string, number> = {}

    for (let value of message) {
        messageCounter[value] = ++messageCounter[value] || 1
    }

    for (let value of letters) {
        letterCounter[value] = ++ letterCounter[value] || 1
    }

    console.log(messageCounter, letterCounter)
    for (let key in messageCounter) {
        if (!(key in letterCounter)) {
            return false;
        }
        if (messageCounter[key] > letterCounter[key]) {
            return false
        }
    }


    return true
}

console.log(test('abaaadc', 'abcdaaa'))
