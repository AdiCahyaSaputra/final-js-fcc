function convertToRoman(num) {
    let roman = '';

    // 1, 5, 10, 50, 100, 500, 1000
    const base = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }

    const keys = Object.keys(base)

    while( num > 0 ) {
        let i = keys.length;
        while(i >= 0) {
            if(num >= base[keys[i]]) {
                roman += keys[i];
                num -= base[keys[i]];
            } else {
                i-- // dont min min the i if not false (its mean if i = 10 after true statement dont decrement it before false)
            }
        }
    }

    console.log(roman);

}

convertToRoman(36);