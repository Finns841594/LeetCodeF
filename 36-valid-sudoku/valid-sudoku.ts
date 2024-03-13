function hasRepetition(numbers:string[]): boolean {
    let cache = []
    for (let n of numbers.filter(item => item != '.')) {
        if (cache.includes(n)) return true
        cache.push(n)
    }
}

function isValidSudoku(board: string[][]): boolean {
    for (let row of board) {
        if (hasRepetition(row)) {
            console.log('in row', row)
            return false
        }
    }

    let cols = [[],[],[],[],[],[],[],[],[]]
    for (let i = 0; i < 9; i++) {
        for (let row of board) {
            cols[i].push(row[i])
        }
    }
    for (let col of cols) {
        if (hasRepetition(col)) {
            console.log('in col', col)
            return false
        }
    }

    let boxes = [[],[],[],[],[],[],[],[],[]]
    const boxStartIndex = [0,3,6,27,30,33,54,57,60]
    for (let i = 0; i < 9; i++) {
        let allStrings = board.flat()
        boxes[i].push(allStrings[boxStartIndex[i]])
        boxes[i].push(allStrings[boxStartIndex[i]+1])
        boxes[i].push(allStrings[boxStartIndex[i]+2])
        boxes[i].push(allStrings[boxStartIndex[i]+9])
        boxes[i].push(allStrings[boxStartIndex[i]+10])
        boxes[i].push(allStrings[boxStartIndex[i]+11])
        boxes[i].push(allStrings[boxStartIndex[i]+18])
        boxes[i].push(allStrings[boxStartIndex[i]+19])
        boxes[i].push(allStrings[boxStartIndex[i]+20])
    }
    for (let box of boxes) {
        if (hasRepetition(box)) {
            console.log('in box', box)
            return false
        }
    }
    return true
};