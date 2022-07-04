function rot13(str) {
    // Bahasa Panda. A -> N atau A di maju In 13 Kali (karena ini rot13)
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    // console.log(alphabet);
    const rot13 = [];

    let pointer = 13;
    let i = 0;

    // Start point = 13 -> N
    while(i < alphabets.length) {
        rot13.push(alphabets[pointer]);
        pointer === alphabets.length - 1 ? pointer = 0 : pointer++

        i++
    }

    // Bahasa Panda One Line Decode
    return str.split(' ').map(str => str.split('').map(str => rot13.indexOf(str) > -1 ? alphabets[rot13.indexOf(str)] : str).join('')).join(' ');
}

const result = rot13("SERR PBQR PNZC!");

console.log(result);