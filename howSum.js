const howSum = ( target, box, memo = {} ) => {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null
    for (let i of box) {
        const remain = target - i
        const res = howSum(remain, box, memo)
        if (res !== null) {
            memo[target] = [...res, i]
            return memo[target]
        }
    }
    memo[target] = null
    return null
}

console.log( howSum(7, [5, 3, 4, 7]) )
console.log( howSum(300, [7, 14]) )