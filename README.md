# esr-ref
Generate, validate, and display Swiss ESR Reference-Numbers

`npm install esr-ref`

```
import esr from "esr-ref"

esr.validate('1234567890123456')  // true
esr.validate('1234567890123457')  // false

esr.create()

esr.print(referencNumber)
```