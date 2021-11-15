function checkCashRegister(price, cash, cid) {
 
    let changeDue = (cash - price) * 100; 
    let changeSum = changeDue;
    let cidTotal = 0;
    let moneyTaken = 0;
    cid.reverse();

    const myObj = [
        {status: "INSUFFICIENT_FUNDS", change: []},
        {status: "CLOSED", change: cid},
        {status: "OPEN", change: []}
    ]

    const CURRENCY_UNIT = [["ONE HUNDRED", 10000],["TWENTY", 2000],["TEN", 1000],["FIVE", 500],["ONE", 100],["QUARTER", 25],["DIME", 10],["NICKEL", 5],["PENNY", 1]];

    for (let value in cid) {    
       cidTotal += cid[value][1];
    }

    cidTotal = cidTotal * 100;

    if (changeSum > cidTotal) return myObj[0];
    if (changeSum === cidTotal) {
        cid.reverse();
        return myObj[1];
    }
    if (changeSum < cidTotal) {

        for (let i = 0; i < CURRENCY_UNIT.length; i++) {
            if (CURRENCY_UNIT[i][1] < changeSum){
                for (let j = i; j < cid.length; j++) {
                    if (cid[j][1] * 100 === changeSum) {
                        myObj[2].change.push(cid[j]);
                        return myObj[2];
                    } else if (cid[j][1] * 100 < changeSum && cid[j][1] !== 0) {
                        myObj[2].change.push(cid[j]);
                        changeSum -= cid[j][1] * 100;
                        if (changeSum === 0) return myObj[2];

                    } else {

                        while (j < cid.length) {
                            if (j === 0 && changeSum >= 10000 && cid[j][1] >= 10000) { 
                                moneyTaken = 10000 * (Math.floor(changeSum / 10000));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                
                            } else if (j === 1 && changeSum >= 2000 && cid[j][1] >= 2000) { 
                                moneyTaken = 2000 * (Math.floor(changeSum / 2000));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                    
                            } else if (j === 2 && changeSum >= 1000 && cid[j][1] >= 1000) { 
                                moneyTaken = 1000 * (Math.floor(changeSum / 1000));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                    
                            } else if (j === 3 && changeSum >= 500 && cid[j][1] * 100 >= 500) { 
                                moneyTaken = 500 * (Math.floor(changeSum / 500));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                    
                            } else if (j === 4 && changeSum >= 100 && cid[j][1] * 100 >= 100) { 
                                moneyTaken = 100 * (Math.floor(changeSum / 100));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                
                            } else if (j === 5 && changeSum >= 25 && cid[j][1] * 100 >= 25) { 
                                moneyTaken = 25 * (Math.floor(changeSum / 25));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                
                            } else if (j === 6 && changeSum >= 10 && cid[j][1] * 100 >= 10) { 
                                moneyTaken = 10 * (Math.floor(changeSum / 10));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                
                            } else if (j === 7 && changeSum >= 5 && cid[j][1] * 100 >= 5) { 
                                moneyTaken = 5 * (Math.floor(changeSum / 5));
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                                
                            } else if (j === 8 && (changeSum >= 1) && cid[j][1] * 100 >= changeSum) {
                                moneyTaken = 1 * (Math.floor(changeSum / 1)); 
                                cid[j][1] = moneyTaken / 100;
                                myObj[2].change.push(cid[j]);
                                changeSum -= moneyTaken;
                                    if (changeSum == 0) return myObj[2];
                            } 
                            j++
                        }
                        return myObj[0];
                    }
                }
            }
        } 
    }
    return myObj[2];
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
