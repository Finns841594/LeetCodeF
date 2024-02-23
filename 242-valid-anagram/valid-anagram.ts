function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    const tArray = t.split('')
    for (let i = 0; i < s.length; i++) {
        let index = tArray.indexOf(s[i])
        if ( index != -1) {
            tArray[index] = ''
        }
    }
    return 0 === tArray.join('').length
};