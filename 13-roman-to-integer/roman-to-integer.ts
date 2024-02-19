const dictionSymbol = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
const dictionValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000]

function romanToInt(s: string): number {
    let sum = 0
    for (let i = 0; i<s.length; i++){
        let j = i + 1
        if(dictionSymbol.indexOf(s[i]) >= dictionSymbol.indexOf(s[j])){
            sum += dictionValue[dictionSymbol.indexOf(s[i])]
            // console.log('regular plus', sum)
        } else {
            sum += dictionValue[dictionSymbol.indexOf(s[i]+s[j])]
            i++
            // console.log('minus one plus', sum)
        }
    }
    return sum
};