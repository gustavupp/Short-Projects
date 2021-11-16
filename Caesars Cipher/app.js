function rot13(str) {

    const arr = [" ","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let result = 0; //initiate global variables
    let newResult = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[A-Z|a-z]/ig)) { //check if value is a letter
            result += parseInt(arr.indexOf(str[i])) - 13; //had to use parseInt to be able to subtract
            if (result <= 0) { //if 0 or negative by adding 26(number of all alphabet letters) you take the value back to the matching index
                result += 26;
            }
            newResult[i] = result;  //assigns value of result to a different variable
            result = 0; //clear var result after looping through again
        }  else {
            newResult[i] = str[i]; //if value at current index is not a letter, assign its own value to newResult
        }
    }   

    for (let i = 0; i < newResult.length; i++) { //loop thru again to assign the matching index numbers to the matching letters
        if (!isNaN(newResult[i])) { //if a number (at first I tried using !newResult[i].match(/[0-9]/gi) but newResult is not a string.)
            newResult[i] = arr[newResult[i]]; //e.g. if newResult[1] = arr[A]
        }  
    }

    for (let i = 0; i < newResult.length; i++) { //had to add another loop to replace undefined with a " "
        if (typeof newResult[i] == 'undefined') {  
            newResult[i] = arr[0];
        } 
    }

    newResult = newResult.join(""); //lastly, join the array values.
    return newResult;
}

console.log(rot13("SERR YBIR?"));