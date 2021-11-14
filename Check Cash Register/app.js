function checkCashRegister(price, cash, cid) {
 
    let changeDue = cash - price;
    changeDue = changeDue.toFixed(2);
    let cidTotal = 0;

    const myObj = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: [cid]},
        {status: "OPEN", change: []}
    ]
    
    console.log(myObj[2].change);

    const CURRENCY_UNIT = [["ONE HUNDRED", 100],["TWENTY", 20],["TEN", 10],["FIVE", 5],["ONE", 1],["QUARTER", 0.25],["DIME", 0.1],["NICKEL", 0.05],["PENNY", 0.01]];

    for (let value in cid) {
       cidTotal += cid[value][1];
    }
    cidTotal = cidTotal.toFixed(2);

    if (changeDue > cidTotal) return myObj[0];
    if (changeDue === cidTotal) return myObj[1];
    if (changeDue < cidTotal) {

        let changeSum = changeDue;

        for (let i = 0; i < CURRENCY_UNIT.length; i++) {
            if (CURRENCY_UNIT[i][1] < changeSum){
                changeSum -= CURRENCY_UNIT[i][1];
                myObj[2].change.push(CURRENCY_UNIT[i]);
                
                    if (CURRENCY_UNIT[i][1] === changeSum) {
                        changeSum -= CURRENCY_UNIT[i][1];
                        myObj[2].change.push(CURRENCY_UNIT[i]);
                        return myObj[2];
                    }
                    i--;

            } else if (CURRENCY_UNIT[i][1] === changeSum) {
                return myObj[2];
            }
        }

           /*let newFinalChange = [];
           newFinalChange[0] = finalChange[0];
           console.log(newFinalChange);
           for (let i = 1; i < finalChange.length; i++) {
                if (finalChange[i][0] === newFinalChange[i-1][0]) {
                    newFinalChange[i-1][1] = newFinalChange[i-1][1] * 2;
                }
            }*/  
    }
    return myObj[2];
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
