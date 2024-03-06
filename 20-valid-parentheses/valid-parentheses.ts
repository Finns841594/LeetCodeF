function isPair(a:string,b:string): boolean {
    switch(a){
        case '(': return b === ')'
        case '{': return b === '}'
        case '[': return b === ']'
    }
}

function pairReplace(startIndex:number,arrayOfParentheses:string[]) {
    let step = 0
    while(arrayOfParentheses[startIndex-step] != '0') {
        if (isPair(arrayOfParentheses[startIndex-step],arrayOfParentheses[startIndex+1+step])) {
            arrayOfParentheses[startIndex-step] = '0'
            arrayOfParentheses[startIndex+1+step] = '0'
            if (startIndex-step>0) {
                step++
            } else {
                break
            }
        } else {
            break
        }
    }
}

function isValid(s: string): boolean {
    const array = s.split('')
    if (array.length === 0) {
        return true
    }
    for (let i = 0; i < array.length; i++) {
        console.log(i)
        if (isPair(array[i],array[i+1])) {
            pairReplace(i,array)
        }
    }

    const result = array.filter(item => item != '0')
    if (result.length === array.length) return false
    return isValid(result.join(''))
};