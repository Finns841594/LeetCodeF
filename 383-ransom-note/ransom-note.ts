function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineArray = magazine.split('')
    for (let i = 0; i < ransomNote.length; i++) {
        const result = magazineArray.findIndex(item => item === ransomNote[i])
        if (result === -1) {
            return false
        } else {
            magazineArray.splice(result,1)
        }
    }
    return true
};