

function convertToRoman(num) {
    
    let numberStr = num.toString();
    numberArr = numberStr.split("");
    
    const romanNumbers = [[3000, 'M'],[2000, 'MM'],[1000, 'M'],[900, 'CM'],[800, 'DCCC'],[700, 'DCC'],[600, 'DC'],[500, 'D'],[400, 'CD'],[100, 'C'],[300, 'CCC'],[200, 'CC'],[90, 'XC'],[50, 'L'],[40, 'XL'], [20, 'XX'],[30, 'XXX'],[60, 'LX'],[70, 'LXX'],[80, 'LXXX'],[10, 'X'],[9, 'IX'],[5, 'V'],[4, 'IV'],[1, 'I'],[2, 'II'], [3, 'III'], [6, 'VI'], [7, 'VII'], [8, 'VIII'], [0, '']];
    
    let varUnidade = 0;
    let varDezena = 0;
    let varCentena = 0;
    let varMilhar = 0;
    let result = "";
    
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr.length === 4) {
            if (i === 0) {
            varMilhar = numberArr[i] * 1000;
            } else if (i === 1) {
                varCentena = numberArr[i] * 100;
            } else if (i === 2) {
                varDezena = numberArr[i] * 10;
            } else if (i === 3) {
                varUnidade = numberArr[i];
            }
    
        } else if (numberArr.length === 3) {
            if (i === 0) {
                varCentena = numberArr[i] * 100;
            } else if (i === 1) {
                varDezena = numberArr[i] * 10;
            } else if (i === 2) {
                varUnidade = numberArr[i];
            }
    
        } else if (numberArr.length === 2) {
            if (i === 0) {
                varDezena = numberArr[i] * 10;
            } else if (i === 1) {
                varUnidade = numberArr[i];
            }
    
        } else {
            varUnidade = numberArr[i];
        }
    }
    
    
    for (let i = 0; i < romanNumbers.length; i++) {
        if (romanNumbers[i][0] == varMilhar) {
            result += romanNumbers[i][1];
        } else if (romanNumbers[i][0] == varCentena) {
            result += romanNumbers[i][1];
        } else if (romanNumbers[i][0] == varDezena) {
            result += romanNumbers[i][1];
        } else if (romanNumbers[i][0] == varUnidade) {
            result += romanNumbers[i][1];
        }
    }
    //return result;
   console.log(result);
   }
   
convertToRoman(3999);

