
function palindrome(str) {
    const string = str;

    //clean string
    const lowerString = string.toLowerCase();
    const noAlphaCaracters = lowerString.replace(/[\W_]/g, ""); 
    console.log(noAlphaCaracters);

    const turnIntoArray = noAlphaCaracters.split(""); //turn into array
    
    //this extra loop wasnt planned.. but the cleaning of the string left undefined data on the array therefore array.length wasn't working.. that is the fix for array.length...it counts only non-undefined values.
    var len = 0;
    for (let i = 0; i < turnIntoArray.length; i++) {
    if (turnIntoArray[i] !== undefined) {
        len++;
    }
    }
    //console.log(len);

    //create new array in reverse order....realized later that I could've used the .reverse() method ahhaha
    let reverseArr = [];
    for (let i = 0; i < len; i++) {
        reverseArr += turnIntoArray.pop();
    }

    console.log(reverseArr);

    //check if initia string equals reversed string
    if (noAlphaCaracters === reverseArr) {
        console.log('Palindrome');
        return true;
    } else {
        console.log('Not Palindrome');
        return false;
    }   
} 

console.log(palindrome('   GUS&^ta   '));