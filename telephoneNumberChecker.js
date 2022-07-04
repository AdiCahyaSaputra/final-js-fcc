function telephoneCheck(str) {
    str = str.split('');
    const filterStr = str.filter(str => /[0-9]/.test(str));
    
    // Jika total length 10 (tidak menyertakan kode negara)
    if(filterStr.length !== 10) {
        if(filterStr.length === 11 && filterStr[0] === 1) {
            
        }

        return false
    }

    return true;
}

telephoneCheck("555-555-5555");