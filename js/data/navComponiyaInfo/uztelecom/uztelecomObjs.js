

import { uztelecomNavInfoMb } from "./navComponiyaInfoUztelecomMb.js";
import { uztelecomNavInfoTarif } from "./navComponiyaInfoUztelecomTarif.js";
import { uztelecomNavInfoSms } from "./navComponiyaInfoUztelecomSms.js";
import { uztelecomNavInfoDaqiqa } from "./navComponiyaInfoUztelecomDaqiqa.js";
import { uztelecomNavInfoAcsiyaVaYangiliklar } from "./navComponiyaInfoUztelecomAcsiyaVaYangiliklar.js";
import { uztelecomNavInfoUSSD } from "./navComponiyaInfoUztelecomUSSD.js";


export let companiyaTypeUztelecom = {

    name: "usel",
    mb: uztelecomNavInfoMb,
    tarif: uztelecomNavInfoTarif,
    sms: uztelecomNavInfoSms,
    daqiqa: uztelecomNavInfoDaqiqa,
    news: uztelecomNavInfoAcsiyaVaYangiliklar,
    ussd: uztelecomNavInfoUSSD,
}