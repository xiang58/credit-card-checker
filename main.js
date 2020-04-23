const batch = require('./info');
const funcs = require('./funcs');

// Test 1
let results = batch.map(funcs.validateCred);
console.log(results);

// Test 2
console.log(funcs.findInvalidCards(batch));

// Test 3
let invalids = funcs.findInvalidCards(batch);
console.log('Invalid numbers:');
console.log(invalids);
console.log('\nCompanies from which the invalid cards are issued:');
console.log(funcs.findInvalidCompanies(invalids));

// Additional test
invalids = [
  [1, 2, 3, 4], [4, 3, 2, 1]
];
console.log(funcs.findInvalidCompanies(invalids));
