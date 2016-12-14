// Phase 1 - String Functions

function madLib(verb, adj, noun) {
  return "We shall " + verb.toUpperCase() + " the " + adj.toUpperCase() + " " + noun.toUpperCase() + "."
}

console.log(madLib('make', 'best', 'guac'))

function isSubstring(searchString, subString) {
  return searchString.includes(subString)
}

console.log(isSubstring("time to program", "time"))
console.log(isSubstring("Jump for joy", "joys"))

// Phase 2 - Loops

function fizzBuzz(array) {
  let threesFives = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      continue
    } else if (array[i] % 3 === 0 || array[i] % 5 === 0) {
      threesFives.push(array[i])
    }
  }
  return threesFives
}

console.log(fizzBuzz([1,2,3,4,5,6,15]))

function isPrime(number) {
  if (number === 1) {
    return false
  } else if (number === 2) {
    return true
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(2))
console.log(isPrime(10))
console.log(isPrime(15485863))
console.log(isPrime(3548563))

function sumOfNPrimes(n) {
  let sum = 0,
      prime_count = 0

  for (let i = 2; prime_count < n; i++) {
    if (isPrime(i)) {
      sum = sum + i
      prime_count = prime_count + 1
    }
  }

  return sum
}

console.log(sumOfNPrimes(0))
console.log(sumOfNPrimes(1))
console.log(sumOfNPrimes(4))

function allOrNothing() {
  let mod = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] % mod !== 0) {
      return false
    }
  }
  return true
}

console.log(allOrNothing(3, 9, 12, 6))
console.log(allOrNothing(5, 1, 2, 10))
