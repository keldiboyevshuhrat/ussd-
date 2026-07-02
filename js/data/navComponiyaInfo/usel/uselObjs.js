

import { uselNavInfoMb } from "./navComponiyaInfoUselMb.js";
import { uselNavInfoTarif } from "./navComponiyaInfoUselTarif.js";
import { uselNavInfoSms } from "./navComponiyaInfoUselSms.js";
import { uselNavInfoDaqiqa } from "./navComponiyaInfoUselDaqiqa.js";
import { uselNavInfoAcsiyaVaYangiliklar } from "./navComponiyaInfoUselAcsiyaVaYangiliklar.js";



export let companiyaTypeUsel = {

    name: "usel",
    mb: uselNavInfoMb,
    tarif: uselNavInfoTarif,
    sms: uselNavInfoSms,
    daqiqa: uselNavInfoDaqiqa,
    news: uselNavInfoAcsiyaVaYangiliklar,
}