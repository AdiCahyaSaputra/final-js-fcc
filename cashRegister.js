function checkCashRegister(price, cash, cid) {
    const UNIT_AMOUNT = {
        "PENNY": .01,
        "NICKEL": .05,
        "DIME": .10,
        "QUARTER": .25,
        "ONE": 1.00,
        "FIVE": 5.00,
        "TEN": 10.00,
        "TWENTY": 20.00,
        "ONE HUNDRED": 100.00
    }

    let returnValue = {
        status: '',
        change: []
    }

    let totalCid = 0;  
    cid.forEach(el => totalCid += el[1]);

    totalCid = totalCid.toFixed(2);

    let returnCash = cash - price;
    const returnArr = [];

    if (returnCash > totalCid) return returnValue = { status:'INSUFFICIENT_FUNDS', change: returnArr };
    if (returnCash.toFixed(2) === totalCid) return returnValue = { status: "CLOSED", change: cid };

    cid = cid.reverse();

    cid.forEach(el => {
        let [ key, value ] = el;
        let tmpArr = [key, 0];

        while(returnCash >= UNIT_AMOUNT[key] && value > 0) {
            tmpArr[1] += UNIT_AMOUNT[key];
            value -= UNIT_AMOUNT[key];

            returnCash -= UNIT_AMOUNT[key]
            returnCash = returnCash.toFixed(2);
        }

        if(tmpArr[1] > 0) returnArr.push(tmpArr);

    })

    if(returnCash > 0) return returnValue = { status: "INSUFFICIENT_FUNDS", change: [] }

    return returnValue = { status: "OPEN", change: returnArr }
}

const price = 19.5;
const cash = 20;

const cashInDrawer = [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]   
]

const res = checkCashRegister(price, cash, cashInDrawer);

console.log(res);