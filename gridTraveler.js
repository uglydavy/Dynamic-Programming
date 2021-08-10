const gridTraveler = ( rows, cols, memo = {} ) => {
    const keys = rows + ',' + cols
    if (rows === 0 || cols === 0) return 0
    if (rows === 1 || cols === 1) return 1
    if (keys in memo) return memo[keys]
    memo[keys] = gridTraveler(rows - 1, cols, memo) + gridTraveler(rows, cols - 1, memo)
    return memo[keys]
}

console.log( gridTraveler(25, 12) )
console.log( gridTraveler(1, 1) )
console.log( gridTraveler(8, 0) )
console.log( gridTraveler(3, 5) )
console.log( gridTraveler(10, 1) )
console.log( gridTraveler(0, 3) )
console.log( gridTraveler(1, 6) )
