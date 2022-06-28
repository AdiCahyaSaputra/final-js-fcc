const palindrome = (str) => str.split('').filter(el => /['a-zA-Z0-9']/.test(el)).reverse().join('').toLowerCase() === str.split('').filter(el => /['a-zA-Z0-9']/.test(el)).join('').toLowerCase();
console.log(palindrome("eye"));

