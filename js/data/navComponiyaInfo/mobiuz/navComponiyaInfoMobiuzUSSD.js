

let mobiuzNavUSSDInfoDaily = [
    {
        ussdCode: "*100#",
        menyu: "balans va tarif",
        tafsif: "menyu oynasi ochiladi"

    },
   
]


/// xizmatlar
let mobiuzNavUSSDInfoManthly = [
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi"

    },
    {
        ussdCode: "*120#",
        menyu: "tarif rejasini almashtirish",
        tafsif: "tarifin giz ni kormoq chi bolsangi yoki ozgartirmoqchi bolsangi "

    },
  

]

///  pulik xizmatlar

let mobiuzNavUSSDInfoYearly = [
    {
        ussdCode: "*111#",
        menyu: "ussd menyu",
        tafsif: "menyu oynasi ochiladi"

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


export let mobiuzNavInfoUSSD = [

    {
        period : "ussd kodlar",
        Info :  mobiuzNavUSSDInfoDaily,
    },

    {
        period : "xizmatlar ",
        Info :  mobiuzNavUSSDInfoManthly,
    },

    {
        period : "pullik xizmatlar",
        Info : mobiuzNavUSSDInfoYearly
    }


]

















