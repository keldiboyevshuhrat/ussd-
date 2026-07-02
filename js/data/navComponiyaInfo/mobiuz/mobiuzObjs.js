

import { mobiuzNavInfoMb } from "./navComponiyaInfoMobiuzMb.js";
import { mobiuzNavInfoTarif } from "./navComponiyaInfoMobiuzTarif.js";
import { mobiuzNavInfoSms } from "./navComponiyaInfoMobiuzSms.js";
import { mobiuzNavInfoDaqiqa } from "./navComponiyaInfoMobiuzDaqiqa.js";
import { mobiuzNavInfoAcsiyaVaYangiliklar } from "./navComponiyaInfoMobiuzAcsiyaVaYangiliklar.js";



export let companiyaTypeMobiuz = {

    name: "mobiuz",
    mb: mobiuzNavInfoMb,
    tarif: mobiuzNavInfoTarif,
    sms: mobiuzNavInfoSms,
    daqiqa: mobiuzNavInfoDaqiqa,
    news: mobiuzNavInfoAcsiyaVaYangiliklar,
}