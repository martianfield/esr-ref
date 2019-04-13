const validate = (referenceNumber) => {
  if(referenceNumber.trim().length === 0) {
    return false
  }

  // get rid of non-numeric characters
  let re = referenceNumber.replace(/\D/g,'');

  // table used to check mod 10
  let table = [0,9,4,6,8,2,7,1,3,5]

  // prepend 0s to make it either 15 or 26 characters long
  if (re.length < 17 ) {
    re = "000000000000000" + re
    re = re.substr(re.length -16)
  }
  else {
    re = "00000000000000000000000000" + re
    re = re.substr(re.length -27)
  }

  // unsupported length? not valid.
  if(re.length !== 16 && re.length !== 27) {
    return false
  }

  // split the reference number into an array so we can easily use it with the checking table
  let refArray = re.split("")					
  let keep = 0
  for ( let j = 0; j < (re.length - 1); j++ )			
  {
    // add the what we kept during the last iteration and the value from the table
    let current = parseInt(keep) + parseInt(refArray[j])	
    keep = table[current % 10]					// do mod 10 on the table
  }

  // get the calculated check number
  let check_calculated = (10 - keep) % 10	

  // get the check from the given reference number
  let check_given = Number(re.substring(re.length - 1, re.length))

  // the reference number is valid if our calculated check equals the given check
  let valid = check_calculated === check_given

  // done ... return result
  return valid
}

const create = (s) => {
  return "1234567890123456"
}

const print = (s) => {
  return "todo"
}

export {validate, print}