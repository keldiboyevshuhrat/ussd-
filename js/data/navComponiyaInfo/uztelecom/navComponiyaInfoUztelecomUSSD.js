

let uztelecomNavUSSDInfoDaily = [
    {
        ussdCode: "*100#",
        menyu: "balans va tarif",
        tafsif: "menyu oynasi ochiladi uztelecom"

    },
   
]


/// xizmatlar
let uztelecomNavUSSDInfoManthly = [
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi  uztelecom"

    },
    {
        ussdCode: "*120#",
        menyu: "tarif rejasini almashtirish",
        tafsif: "tarifin giz ni kormoq chi bolsangi yoki ozgartirmoqchi bolsangi "

    },
  

]

///  pulik xizmatlar

let uztelecomNavUSSDInfoYearly = [
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi uztelecom"

    },
    {
        ussdCode: "*120#",
        menyu: "tarif rejasini almashtirish",
        tafsif: "tarifin giz ni kormoq chi bolsangi yoki ozgartirmoqchi bolsangi "

    },
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi"

    },
  
]


/// mobi uz ussd  qismi 


export let uztelecomNavInfoUSSD = [

    {
        period : "ussd kodlar",
        Info :  uztelecomNavUSSDInfoDaily,
    },

    {
        period : "xizmatlar ",
        Info :  uztelecomNavUSSDInfoManthly,
    },

    {
        period : "pullik xizmatlar",
        Info : uztelecomNavUSSDInfoYearly
    }


]

















