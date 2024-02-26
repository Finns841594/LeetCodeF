const isExsited = ( map: Map<string,string[]>, refStr: string) => {
    const keysArray = Array.from(map.keys());
    return keysArray.indexOf(refStr) >= 0
}
const pushToMapItem = (map: Map<string,string[]>, refStr: string, str:string) => {
    const array = map.get(refStr);
    array.push(str);
}
const addMapEntry = (map: Map<string,string[]>, refStr: string, str:string) => {
    map.set(refStr, [str])
}

function groupAnagrams(strs: string[]): string[][] {
    let mapResult = new Map<string,string[]>()
    for (let i = 0; i < strs.length; i++) {
        const testString = strs[i].split('').sort().join('')
        if (isExsited(mapResult, testString)) {
            pushToMapItem(mapResult, testString, strs[i])
        } else {
            addMapEntry(mapResult, testString, strs[i])
        }
    }
    return Array.from(mapResult.values())
};