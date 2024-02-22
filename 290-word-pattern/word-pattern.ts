function wordPattern(pattern: string, s: string): boolean {
    let pMap = new Map()
    let sArray = s.split(' ')
    let pArray = pattern.split('')
    if (sArray.length != pArray.length){
        return false
    }

    let sSet = new Set(sArray)
    let pSet= new Set(pArray)
    if (sSet.size != pSet.size) {
        return false
    }
    
    for (let i = 0; i < pattern.length; i++){
        if (!pMap.has(pattern[i])){
            pMap.set(pattern[i],sArray[i])
        } else {
            if (pMap.get(pattern[i]) != sArray[i]){
                return false
            }
        }
    }
    return true
};