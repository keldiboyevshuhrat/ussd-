

let uselNavSmsInfoDaily = [
    {
        type: "100 sms u",
        narx: "1 000 so'm",
        yoqish: "*132*123123#"

    },
   
]


/// oylik sms 
let uselNavSmsInfoManthly = [
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

let uselNavSmsInfoYearly = [
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


/// usel nav qismi 


export let uselNavInfoSms = [

    {
        period: "kunlik",
        Info: uselNavSmsInfoDaily,
    },

    {
        period: "oylik",
        Info: uselNavSmsInfoManthly,
    },

    {
        period: "yillik",
        Info: uselNavSmsInfoYearly
    }


]


















