# esr-ref
Generate, validate, and display Swiss ESR Reference-Numbers.

## Installation

`npm install esr-ref`


## Usage

Import 

`import esr from "esr-ref"`

### Validate

```
esr.validate('1234567890123456')  // true
esr.validate('1234567890123457')  // false
esr.validate('')  // false
```

### Create

`create(<base>, <options>)`

- The `create` function takes a base and appends the necessary check number.
- if no `<base>` is supplied `Date.now()` is used
- `<options>`
    - `useShort:true` to create a short reference number (16 digits)
    - `prettify:true` to prettify the result (i.e. adding spaces to make the reference number more readable)

Examples:

```


// if no base is supplied Date.now() is used
esr.create()  // 27 digits depending on timestamp

// by default the 27 digit version is created, even if the base is shorter than 16 digits
esr.create('1234') // 000000000000000000000012347

// supply options with useShort:true to use the 16 digit version (if possible)
esr.create('1234', {useShort:true}) // 0000000000012347

// by default the reference number is returned without spaces, supply options with prettify:true to have formatted in a more readable manner
esr.create('1234', {prettify:true}) // 00 00000 00000 00000 00000 12347

// combine useShort:true and prettify:true to get a prettified 16 digit version
esr.create('1234', {useShort:true}) // 0 00000 00000 12347
```

### Prettify
The `prettify(<referenceNumber>, <options>)`adds spaces to make the reference number more readable.

Examples:

```
esr.prettify("0000000000012347") // "0 00000 00000 12347"
esr.prettify("000000000000000000000012347") // "00 00000 00000 00000 00000 12347"
```

Note: `prettify` expects a valid reference number (with or without spaces) no longer than 27 digits. An error is thrown if this is not the case

```
try {
  esr.prettify("123456789012345678901234567890)
}
catch(err) {
  console.log('error', err)
}

```

If the provideded `referenceNumber` is shorter than 16 or 27 digits, `0`s are added to the front. Note that the 16 digit version is created if possible. If you want to enforce 27 digits pass the option `enforceLong:true`:

```
esr.prettify("12345") // "0 00000 00000 12347"
esr.prettify("12345", {enforceLong:true}) // "00 00000 00000 00000 00000 12347"
esr.prettify("12345678901234567890") // "00 00000 12345 67890 12345 67890"

```

