function findInsertIndex(value:number,intervals:number[][],isStart:boolean) {
    let resultIndex = 0
    let merging = 0
    let resultValue = value
    let addLast = 0
    let addFirst = 0
    for (let i = 0; i < intervals.length; i++) {
        if (value < intervals[i][0]) {
            resultIndex = i
            addFirst = 1
            break
        } else if (intervals[i][0] <= value && value <=intervals[i][1]) {
            resultValue = isStart ? Math.min(value, intervals[i][0]) : Math.max(value, intervals[i][1])
            resultIndex = i
            merging = 1
            break
        }
        if (i === intervals.length - 1) {
            resultIndex = i
            addLast = 1
            break
        }
    }
    return [resultIndex, merging, resultValue, addFirst, addLast]
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
    let [startIndex, mergingStart, startValue, addFirst] = findInsertIndex(newInterval[0],intervals,true)
    let [endIndex, mergingEnd, endValue, _, addLast] = findInsertIndex(newInterval[1],intervals,false)

    // console.log([startIndex, mergingStart, startValue, addFirst],[endIndex, mergingEnd, endValue, addLast])

    const insertIndex = startIndex + (mergingStart ? 0 : 1) - addFirst
    const replaceElement = endIndex - startIndex + (mergingEnd ? 0.5 : -0.5) + (mergingStart ? 0.5 : -0.5) + addLast + addFirst
    // console.log(insertIndex, replaceElement, [startValue, endValue])
    intervals.splice(insertIndex, replaceElement, [startValue, endValue])
    return intervals
};