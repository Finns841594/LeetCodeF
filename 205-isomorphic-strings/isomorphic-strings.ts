function indexesInArray(char:string,str:string):number[]{
    let indexes = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indexes.push(i);
        }
    }
    return indexes;
}

function compareMapKeys(mapS, mapT) {
    if (mapS.size !== mapT.size) return false;
    for (let key of mapS.keys()) {
        let keyString = JSON.stringify(key);
        let hasEquivalentKey = false;
        for (let keyT of mapT.keys()) {
            if (JSON.stringify(keyT) === keyString) {
                hasEquivalentKey = true;
                break;
            }
        }
        if (!hasEquivalentKey) return false;
    }
    return true;
}

function isIsomorphic(s: string, t: string): boolean {
    const sArray = new Set(s.split(''))
    const tArray = new Set(t.split(''))
    const mapS = new Map();
    const mapT = new Map();
    for (const char of sArray) {
        mapS.set(indexesInArray(char,s),char)
    }
    for (const char of tArray) {
        mapT.set(indexesInArray(char,t),char)
    }
    return compareMapKeys(mapS,mapT)
};