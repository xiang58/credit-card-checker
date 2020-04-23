// Luhn Algorithm to check whether credit card number is valid or not.
const validateCred = numbers => {
  let len = numbers.length;
  let sum = numbers[len-1];

  for (let i = len - 2; i >= 0; i -= 2) {
    let doubled = numbers[i] * 2;
    if (doubled > 9) doubled -= 9;
    sum += doubled;
  }

  for (let i = len - 3; i >= 0; i -= 2) 
    sum += numbers[i];
  
  if (sum % 10 == 0) return true;
  return false;
};


// Given an array of credit card numbers, find invalid cards. 
const findInvalidCards = credCardNums => {
  let invalidCards = credCardNums.filter(num => !validateCred(num));
  return invalidCards;
};


// Identify the credit card companies that have possibly issued these faulty numbers.
const findInvalidCompanies = invalidCards => {
  let companies = [];

  for (card of invalidCards) {
    switch (card[0]) {
      case 3:
        if (! companies.includes('Amex'))
          companies.push('Amex');
        break;
      case 4:
        if (! companies.includes('Visa'))
          companies.push('Visa');
        break;
      case 5:
        if (! companies.includes('Mastercard'))
          companies.push('Mastercard');
        break;
      case 6:
        if (! companies.includes('Discover'))
          companies.push('Discover');
        break;
      default:
        if (! companies.includes('Unknown'))
          companies.push('Unknown');
    }
  }

  return companies;
};


// Export module.
const funcs = {
  validateCred: validateCred,
  findInvalidCards: findInvalidCards,
  findInvalidCompanies: findInvalidCompanies
};
module.exports = funcs;
