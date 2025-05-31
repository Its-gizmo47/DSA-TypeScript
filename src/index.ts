function isSubsequenceRecursion(str1: string, str2: string): boolean {
    console.log(str1, str2)
    if (str1.length === 0) return true
    if (str2.length === 0) return false

    let str2Splice = str2.slice(1)
    if (str1[0] === str2[0]) {
        return isSubsequenceRecursion(str1.slice(1), str2Splice)
    }

    return isSubsequenceRecursion(str1, str2Splice)
}

console.log(isSubsequenceRecursion("heallo", "hello there"))
