function lengthOfLastWord(s: string): number {
    const wordArray = s.split(' ')
    const cleanedArray = wordArray.filter(item => item.length > 0)
    return cleanedArray[cleanedArray.length - 1].length
};