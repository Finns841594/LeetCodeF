function forward(direction:string, matrix:number[][]):number[] {
    switch (direction) {
        case('x') :
            return matrix[0]
        case('-x') :
            return matrix[matrix.length-1].reverse()
        case('y') :
            const path1 = []
            matrix.map(item => path1.push(item[0]))
            return path1.reverse()
        case('-y') :
            const path2 = []
            matrix.map(item => path2.push(item[matrix[0].length - 1]))
            return path2
    }
}
function cropMatrix(direction:string, matrix:number[][]):number[][]{
    switch (direction) {
        case('x') :
            matrix.shift()
            return matrix
        case('-x') :
            matrix.pop()
            return matrix
        case('y') :
            matrix.map(item => item.shift())
            return matrix
        case('-y') :
            matrix.map(item => item.pop())
            return matrix
    }
}

function spiralOrder(matrix: number[][]): number[] {
    let croppedMatrix = matrix
    let steps = []
    let count = 0
    let directions = ['x','-y','-x','y']
    while (croppedMatrix.length > 0 && croppedMatrix[0].length > 0) {
        steps.push(forward(directions[count%4], croppedMatrix))
        cropMatrix(directions[count%4], croppedMatrix)
        // console.log(croppedMatrix)
        // console.log(steps)
        count++
    }
    return steps.flat()
};