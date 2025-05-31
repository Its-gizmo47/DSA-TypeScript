function isSubsequence (str1: string, str2: string): boolean {

    if (str1.length > str2.length) {
        return false
    }

    let first = 0;
    let sec = 0;

    while (sec < str2.length) {
        console.log(str1[first], str2[sec], first, sec)
        if (str1[first] === str2[sec]) {
            first++
        }
        if (first === str1.length) return true
        sec++
    }

    return false
}

console.log(isSubsequence("heallo", "hello there"))
