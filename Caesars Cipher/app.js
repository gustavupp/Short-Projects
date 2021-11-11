function rot13(str) {

    const arr = ["","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let string = str;
    let result = 0;
    let newResult = [];

    for (let i = 0; i < string.length; i++) {
        result += parseInt(arr.indexOf(string[i])) - 13;
        if (result <= 0) {
            result += 26;
        }
        newResult[i] = result;
        result = 0;
    }

    for (let i = 0; i < newResult.length; i++) {
        newResult[i] = arr[newResult[i]];
    }

    newResult = newResult.join("");
    return newResult;
}

console.log(rot13("SERR PBQR PNZC"));