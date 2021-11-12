function checkCashRegister(price, cash, cid) {

    const myObj = {
        status: [
            "INSUFFICIENT_FUNDS",
            "CLOSED",
            "OPEN"
        ],
        change: [
            [],
            ['cid'],
            ['cid']
        ]
    }

    const CURRENCY_UNIT = [['PENNY', 0.01]];

    console.log(CURRENCY_UNIT[0][1]);


    let change;
    let changeDue = cash - price;
    let cidTotal = 0;

    for (let value in cid) {
       cidTotal += cid[value][1];
    }
    console.log(cidTotal);

    if (changeDue > cidTotal) return `{status: ${myObj.status[0]}, change: []}`;
    if (changeDue === cidTotal) return `{status: ${myObj.status[1]}, change: ${cid}}`;
    if (changeDue < cidTotal)

    return change;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
