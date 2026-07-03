

let uselNavUSSDInfoDaily = [
    {
        ussdCode: "*100#",
        menyu: "balans va tarif",
        tafsif: "menyu oynasi ochiladi"

    },
   
]


/// xizmatlar
let uselNavUSSDInfoManthly = [
    {
        ussdCode: "*111#",
        menyu: "usel",
        tafsif: "menyu oynasi ochiladi"

    },
    {
        ussdCode: "*120#",
        menyu: "tarif rejasini almashtirish   usel",
        tafsif: "tarifin giz ni kormoq chi bolsangi yoki ozgartirmoqchi bolsangi "

    },
  

]

///  pulik xizmatlar

let uselNavUSSDInfoYearly = [
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi usel"

    },
    {
        ussdCode: "*120#",
        menyu: "tarif rejasini almashtirish",
        tafsif: "tarifin giz ni kormoq chi bolsangi yoki ozgartirmoqchi bolsangi "

    },
    {
        ussdCode: "*111#",
        menyu: "ussd menyu usel",
        tafsif: "menyu oynasi ochiladi"

    },
  
]


/// mobi uz ussd  qismi 


export let uselNavInfoUSSD = [

    {
        period : "ussd kodlar",
        Info :  uselNavUSSDInfoDaily,
    },

    {
        period : "xizmatlar ",
        Info :  uselNavUSSDInfoManthly,
    },

    {
        period : "pullik xizmatlar",
        Info : uselNavUSSDInfoYearly
    }


]

















