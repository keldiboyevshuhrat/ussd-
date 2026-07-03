

import { beelineNavInfoMb } from "./navComponiyaInfoBeline.js";
import { beelineNavInfoTarif } from "./navComponiyaInfoBeelineTarif.js";
import { beelineNavInfoSms } from "./navComponiyaInfoBeelineSms.js";
import { beelineNavInfoDaqiqa } from "./navComponiyaInfoBeelineDaqiqa.js";
import { beelineNavInfoAcsiyaVaYangiliklar } from "./navComponiyaInfoBeelineAcsiyaVaYangiliklar.js";
import {beelineNavInfoUSSD} from "./navComponiyaInfoBelineUSSD.js";


export let companiyaTypeBeeline = {

    name: "beeline",
    mb: beelineNavInfoMb,
    tarif: beelineNavInfoTarif,
    sms: beelineNavInfoSms,
    daqiqa: beelineNavInfoDaqiqa,
    news: beelineNavInfoAcsiyaVaYangiliklar,
    ussd : beelineNavInfoUSSD ,
}