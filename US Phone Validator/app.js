function telephoneCheck(str) {
    
    const regex = /[!@#$%^&,.;"'{}][*+`=?|~]+/g;
    const regex1 = /[-() A-Za-z]/g;

    let phoneNumber = str.split("").reverse();

        if (!regex.test(phoneNumber) && (phoneNumber.length >= 10 && phoneNumber.length <= 16)) {
            //console.log('no special and right length');

            if (!regex1.test(phoneNumber) && phoneNumber.length === 10) {
                //console.log('VALID 10 DIGIT NUMBER')
                return true;
            } else if (phoneNumber.length > 10 && (phoneNumber[4] === " " || phoneNumber[4] === "-")) {
                if (phoneNumber.length === 12 && (phoneNumber[8] === " " || phoneNumber[8] === "-")) {
                    //console.log('VALID 12 DIDIT NUMBER');
                    return true
                } else if (phoneNumber.length === 13 && (phoneNumber[8] === ")" && phoneNumber[12] === "(")) {
                    //console.log('VALID 13 DIGIT NUMBER');
                    return true
                } else if (phoneNumber.length === 14 && (phoneNumber[8] === ")" || phoneNumber[8] === " "  || phoneNumber[8] === "-") && (phoneNumber[12] === " " || phoneNumber[12] === "(") && phoneNumber[13] === '1') {
                    //console.log('VALID 14 DIGIT NUMBER');
                    if (phoneNumber[8] ===")" && phoneNumber[12] === " ") {
                        return false
                    } else {
                        return true
                    }
                    return true
                } else if (phoneNumber.length === 16 && phoneNumber[8] === " " && phoneNumber[9] === ")" && phoneNumber[13] === "(" && phoneNumber[14] === " " && phoneNumber[15] === "1") {
                    //console.log('VALID 16 DIGIT NUMBER');
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }

        } else {
            //console.log('not a valid number');
            return false;
        }
}
  
  console.log(telephoneCheck("1 (555) 666-7777"));