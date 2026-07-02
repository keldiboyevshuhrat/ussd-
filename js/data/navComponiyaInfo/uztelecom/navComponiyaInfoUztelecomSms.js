

let uztelecomNavSmsInfoDaily = [
    {
        type: "100 sms u",
        narx: "1 000 so'm",
        yoqish: "*132*123123#"

    },
   
]


/// oylik sms 
let uztelecomNavSmsInfoManthly = [
    {
        type: "2 999 sms",
        narx: "2 000 so'm",
        yoqish: "*132*123345123#"

    },
    {
        type: "2 999 sms u",
        narx: "2 000 so'm",
        yoqish: "*132*123345123#"

    },

    
]

/// yillik internet poket 

let uztelecomNavSmsInfoYearly = [
    {
        type: "10 999 sms u",
        narx: "10 000 so'm",
        yoqish: "*132*123345123#m"

    },
    {
        type: "10 999 sms",
        narx: "2 000 so'm",
        yoqish: "*132*123345123#m"

    },  {
        type: "10 999 sms",
        narx: "100 000 so'm",
        yoqish: "*132*123345123#m"

    },

]


/// uztelecom nav qismi 


export let uztelecomNavInfoSms = [

    {
        period: "kunlik",
        Info: uztelecomNavSmsInfoDaily,
    },

    {
        period: "oylik",
        Info: uztelecomNavSmsInfoManthly,
    },

    {
        period: "yillik",
        Info: uztelecomNavSmsInfoYearly
    }


]


















