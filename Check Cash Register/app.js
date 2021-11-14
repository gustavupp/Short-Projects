function checkCashRegister(price, cash, cid) {
 
    let changeDue = cash - price;
    changeDue = changeDue.toFixed(2); 
    let changeSum = changeDue;
    console.log(changeDue);
    let cidTotal = 0;
    cid.reverse();

    const myObj = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: [cid]},
        {status: "OPEN", change: []}
    ]

    const CURRENCY_UNIT = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];

    for (let value in cid) {
       cidTotal += cid[value][1];
    }
    cidTotal = cidTotal.toFixed(2);
    console.log(cidTotal);

    if (changeDue > cidTotal) return myObj[0];
    if (changeDue === cidTotal) return myObj[1];
    if (changeDue < cidTotal) {

        for (let i = 0; i < CURRENCY_UNIT.length; i++) {
            if (CURRENCY_UNIT[i][1] < changeSum){
                for (let j = i; j < cid.length; j++) {
                    if (cid[j][1] === changeSum) {
                        myObj[2].change.push(cid[j]);
                        return myObj[2];
                    } else if (cid[j][1] < changeSum) {
                        myObj[2].change.push(cid[j]);
                        changeSum -= cid[j][1];
                    } else {
                        if (cid.indexOf(cid[j]) === 3) {
                            //keep from here
                        }
                    }
                }
            }
        } 
    }
    return myObj[2];
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
