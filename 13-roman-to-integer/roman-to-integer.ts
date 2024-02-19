const diction = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
}


function romanToInt(s: string): number {
    let sum = 0
    for (let i = 0; i<s.length; i++){
        let j = i + 1
        if (i < s.length-1){
            j = i + 1
        }
        if(diction[s[i]] >= diction[s[j]] || i === s.length-1){
            sum += diction[s[i]]
            // console.log('regular plus', sum)
        } else {
            sum += diction[s[i]+s[j]]
            i++
            // console.log('minus one plus', sum)
        }
    }
    return sum
};