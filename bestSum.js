const howSum = ( target, box ) => {
    if (target === 0) return []
    if (target < 0) return null
    let shortest = null
    for (let i of box) {
        const remain = target - i
        const res = howSum(remain, box)
        if (res) {
            const combination = [...res, i]
            if (shortest === null || combination.length < shortest.length) shortest = combination
        }
    }
    return shortest
}

console.log( howSum(7, [5, 3, 4, 7]) )
console.log( howSum(8, [2, 3, 5]) )