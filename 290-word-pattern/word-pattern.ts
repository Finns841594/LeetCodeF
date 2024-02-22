function wordPattern(pattern: string, s: string): boolean {
    let pMap = new Map()
    let sArray = s.split(' ')
    if (sArray.length != pattern.length){
        return false
    }
    
    for (let i = 0; i < pattern.length; i++){
        if (pMap.has(pattern[i])){
            if (pMap.get(pattern[i]) != sArray[i]){
                return false
            }
        } else {
            if (Array.from(pMap.values()).includes(sArray[i])){
                return false
            }
            pMap.set(pattern[i],sArray[i])
        }
    }
    return true
};