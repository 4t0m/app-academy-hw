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

// Phase 2
