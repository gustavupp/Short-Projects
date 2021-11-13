function checkCashRegister(price, cash, cid) {

    const myObj = {
        status: [
            "INSUFFICIENT_FUNDS",
            "CLOSED",
            "OPEN"
        ],
        change: [
            [0],
            ['cid'],
            ['cid']
        ]
    }

    const CURRENCY_UNIT = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];

    let finalChange = [];  
    let changeDue = cash - price;
    changeDue = changeDue.toFixed(2);
    let cidTotal = 0;

    for (let value in cid) {
       cidTotal += cid[value][1];
    }
    cidTotal = cidTotal.toFixed(2);

    if (changeDue > cidTotal) return `{status: ${myObj.status[0]}, change: ${myObj.change[0]}}`;
    if (changeDue === cidTotal) return `{status: ${myObj.status[1]}, change: ${cid}}`;
    if (changeDue < cidTotal) {

            let changeSum = changeDue;


            for (let i = 0; i < CURRENCY_UNIT.length; i++) {
                if (CURRENCY_UNIT[i][1] < changeSum){
                    changeSum -= CURRENCY_UNIT[i][1];
                    finalChange.push(CURRENCY_UNIT[i]);
                    i--;
                    console.log(changeSum);
                        if (CURRENCY_UNIT[i][1] === changeSum) {
                            changeSum -= CURRENCY_UNIT[i][1];
                            finalChange.push(CURRENCY_UNIT[i]);
                            changeSum = changeDue - finalChange ///keep working from here
                        }
                } else if (CURRENCY_UNIT[i][1] === changeSum) {
                    return `{status: ${myObj.status[2]}, change: ${CURRENCY_UNIT[i][1]}}`;
                }
                console.log(changeSum);
            }
            console.log(changeSum);
            console.log(finalChange);
        }    
    //return finalChange;
}

console.log(checkCashRegister(19.22, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
