function findLongestSubstring(str: string): number {
    let total = 0
    let seenChar: Record<string, number> = {}
    let start = 0

    for (let i = 0; i < str.length; i ++) {
        let value = str[i];
        if (seenChar[value]) {
            start = Math.max(start, seenChar[value])
        }

        total = Math.max(total, i - start + 1)

        seenChar[value] = i + 1;
    }
    
    return total;
}

console.log(
    findLongestSubstring(""), // 0
    findLongestSubstring("rithmschool"), // 7
    findLongestSubstring("thisisawesome"), // 6
    findLongestSubstring("thecatinthehat"), // 7
    findLongestSubstring("bbbbbb"), // 1 
    findLongestSubstring("longestsubstring"), // 8
    findLongestSubstring("thisishowwedoit") // 6
)

