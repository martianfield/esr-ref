/**
 * Valitates a reference number
 * @param {string} referenceNumber 
 */
const validate = (referenceNumber) => {
  let ref = String(referenceNumber)

  // no empty spaces
  if(ref.trim().length === 0) {
    return false
  }

  // only digits and spaces are allowed
  if(/^[0-9\s]*$/.test(ref) === false) {
    return false
  }

  // remove all spaces
  ref = ref.replace(/\D/g,'')

  // too long?
  if(ref.length > 27) {
    return false
  }

  // table used to check mod 10
  let modTable = [0,9,4,6,8,2,7,1,3,5]

  // split the reference number into an array so we can easily use it with the checking table
  let refArray = ref.split("")					
  let remainder = 0
  for ( let j = 0; j < (ref.length - 1); j++ )			
  {
    let current = parseInt(remainder) + parseInt(refArray[j])	
    remainder = modTable[current % 10]					// do mod 10 on the table
  }

  // get the calculated check number
  let check_calculated = (10 - remainder) % 10	

  // get the check from the given reference number
  let check_given = Number(ref.substring(ref.length - 1, ref.length))

  // the reference number is valid if our calculated check equals the given check
  let valid = check_calculated === check_given

  // done ... return result
  return valid
}

/**
 * Creates an esr reference number
 * @param {string} base number with a maximum of 26 digits
 * @param {*} options set `useShort` to `true` if you want to create a 16 digit reference number instead 27 digits (if the base is longer than 15 digits, this is ignored)
 */
const create = (base, options) => {
  // no base supplied? create from timestamp
  base = base || Date.now()

  // default options if none supplied ... fix invalid options
  options = options || { useShort:false, prettify:false}

  // make sure the supplied base is not too long
  let ref = String(base)
  if(ref.length > 26) {
    throw new Error("Supplied value has too long. The supported maximum is 26 places.")
  }

  // n may only include numbers
  // TODO
  if(false) {
    throw new Error("Invalid value supplied. Expected an integer.")
  }

  // pad with 0s (leaving room for the check number)
  if(ref.length < 16 && options.useShort) {
    ref = ref.padStart(16 - 1, '0')
  }
  else {
    ref = ref.padStart(27 - 1, '0')
  }
  
  // calculate the check digit
  let modTable = [0,9,4,6,8,2,7,1,3,5]
  let refArray = ref.split("")					
  let remainder = 0
  for (let i=0; i < refArray.length; i++)			
  {
    let current = remainder + parseInt(refArray[i])	
    remainder = modTable[current % 10]					
  }
  let check = (10 - remainder) % 10	

  // append check to ref
  ref = ref + String(check)

  // make pretty?
  if(options.prettify) {
    ref = prettify(ref)
  }

  // done
  return ref
}


/**
 * Prettifies a reference number
 * @param {string} referenceNumber 
 */
const prettify = (referenceNumber) => {
  // make sure we have a string
  let ref = String(referenceNumber)

  // unsupported length?
  if(ref.length !== 16 && ref.length !== 27) {
    throw new Error(`Reference number should have 16 or 27 places. Received ${ref.length}`)
  }
  
  if(ref.length === 16) {
    // 0 00000 00000 00000
    ref = `${ref.substr(0, 1)} ${ref.substr(1, 5)} ${ref.substr(6, 5)} ${ref.substr(11, 5)}`
  }
  else {
    // 00 00000 00000 00000 00000 00000
    ref = `${ref.substr(0, 2)} ${ref.substr(2, 5)} ${ref.substr(7, 5)} ${ref.substr(12, 5)} ${ref.substr(17, 5)} ${ref.substr(22, 5)}`
  }

  return ref
}


exports.create = create
exports.validate = validate
exports.prettify = prettify



/*
Resources:
- https://www.gkb.ch/de/Documents/DC/Beratung-Produkte/Factsheets-Flyers/Handbuch-ESR/ESR-Handbuch-Postfinance-DE.pdf
*/