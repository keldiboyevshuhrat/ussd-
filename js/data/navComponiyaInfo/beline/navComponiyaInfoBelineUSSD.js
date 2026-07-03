

let beelineNavUSSDInfoDaily = [
    {
        ussdCode: "*100#",
        menyu: "balans va tarif",
        tafsif: "menyu oynasi ochiladi"

    },
   
]


/// oylik mb 
let beelineNavUSSDInfoManthly = [
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

///  

let beelineNavUSSDInfoYearly = [
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


/// beline ussd  qismi 


export let beelineNavInfoUSSD = [

    {
        period : "ussd kodlar",
        Info :  beelineNavUSSDInfoDaily,
    },

    {
        period : "xizmatlar ",
        Info :  beelineNavUSSDInfoManthly,
    },

    {
        period : "pullik xizmatlar",
        Info : beelineNavUSSDInfoYearly
    }


]

















