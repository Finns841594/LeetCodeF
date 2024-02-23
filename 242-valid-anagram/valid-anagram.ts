function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false
    const tArray = t.split('').sort()
    const sArray = s.split('').sort()
    for (let i = 0; i < s.length; i++) {
        if ( tArray[i] != sArray[i]) {
            return false
        }
    }
    return true
};