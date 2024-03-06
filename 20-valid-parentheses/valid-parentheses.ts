function isPair(a:string,b:string): boolean {
    switch(a){
        case '(': return b === ')'
        case '{': return b === '}'
        case '[': return b === ']'
    }
}

function isValid(s: string): boolean {
    const array = s.split('')
    const memo = [array[0]]
    for (let i = 1; i < array.length; i++) {
        if (isPair(memo[memo.length-1],array[i])) {
            memo.pop()
        } else {
            memo.push(array[i])
        }
    }

    return memo.length === 0
};