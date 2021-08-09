const fib = ( n, memo = {} ) => {
    if (n in memo) return memo[n]
    if (n > 0 && n <= 2) return 1
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log( fib(2) )
console.log( fib(6) )
console.log( fib(13) )
console.log( fib(50) )
console.log( fib(100) )
console.log( fib(1000) )