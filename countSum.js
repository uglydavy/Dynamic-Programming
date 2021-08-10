const countSum = ( target, box, memo = {} ) => {
    if (target in memo) return memo[target]
    if (target === 0) return true
    if (target < 0) return false
    for (let i of box) {
        let remain = target - i
        if ( countSum(remain, box, memo) === true ) {
            memo[target] = true
            return true
        }
    }
    memo[target] = false
    return false
}

console.log( countSum(7, [2, 3]) )
console.log( countSum(7, [5, 3, 4, 7]) )
console.log( countSum(7, [2, 4]) )
console.log( countSum(8, [2, 3, 5]) )
console.log( countSum(300, [7, 14]) )
