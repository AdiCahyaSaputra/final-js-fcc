function romanNumeral(num) {
  let roman = "";
  const number = num;
  const base = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }

  const keys = Object.keys(base);

  while(num > 0) {
    for(const key of keys.reverse()) {
      if(num >= base[key]) {
        roman += key;
        num -= base[key];
      }
    }
  }

  return `Angka Romawi dari ${number} adalah ${roman}`;
}

const result = romanNumeral(36);
console.log(result);
