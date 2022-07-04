function telephoneCheck(str) {
    const checkFirstThreeDigit = (str) => { // (555) 555 555
        if(str[0] === "(") {
            return str[0] === "(" && str[4] === ")";
        } else if((str[0] !== "(" && str[3] === ")") || str[0] === '1') {
            return false
        }


        return true;
    }

    const parenthesisValidLength = (str) => {
        const lengthParenthesis = str.filter(str => str === "(" || str === ")");
        if(lengthParenthesis.length > 2) return false;

        return true
    }

    str = str.split('');
    const filterStr = str.filter(str => /[0-9]/.test(str));
    
    // Jika total length 10 (tidak menyertakan kode negara)
    if(filterStr.length !== 10) {
        if(filterStr.length === 11 && filterStr[0] === '1') {
            const tmpCheckStr = str.filter(str => str !== ' ');
            tmpCheckStr.shift();

            return checkFirstThreeDigit(tmpCheckStr);
        }

        return false // bisa aja length nya 9 awowksokwsokwo
    }

    if(str[2] === ' ') return false

    if(filterStr.length === 10) {
        const strParam = str.filter(str => str !== ' ');
        console.log(strParam);
        return checkFirstThreeDigit(strParam) && parenthesisValidLength(strParam);
    }

    return true;
}

// const result = telephoneCheck("(555)5(55?)-5555");
const result = telephoneCheck("55 55-55-555-5");

console.log(result)