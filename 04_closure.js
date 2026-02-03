function makeCounter() {
  let count = 0;
  return function () {
    return ++count;
  };
}

const a = makeCounter();
const b = makeCounter();

console.log(a());
console.log(a()); 
console.log(b());

/**
 * Closure is not a feature, its a consequence a way of javascript retaining lexical environment
 * Closure exist becasue function retain reference towards the lexical environment in which it was created, and as long as that 
 * function is reachable , javascript cannot garbage collect that environment.
 * lexical environment created when a function is excuted
 * If a function is created inside another function and returned and referenced,
 * it closes over that specific lexical environment
 */