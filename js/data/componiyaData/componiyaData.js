
import { companiyaTypeBeeline } from "../navComponiyaInfo/beline/beelineObjs.js";
import { companiyaTypeMobiuz } from "../navComponiyaInfo/mobiuz/mobiuzObjs.js";
import { companiyaTypeUsel } from "../navComponiyaInfo/usel/uselObjs.js";
import { companiyaTypeUztelecom } from "../navComponiyaInfo/uztelecom/uztelecomObjs.js";



export let componiyaData = [

    {
        id : 1,
        componiyaName: "uztelecom",
        img: "../../../rasimlar/uztelecom-rasim-companiya.jpg",
        colorB: " rgb(0, 125, 220)",
        colorNavB : " rgb(73, 176, 255)",
        companiyaType : companiyaTypeUztelecom,

    },
    {
        id : 2,
        componiyaName: "beeline",
        img: "../../../rasimlar/beline-nav-2.png",
        colorB: "rgb(227, 229, 63)",
        colorNavB : " rgb(237, 249, 73)",
        companiyaType : companiyaTypeBeeline,
    }
    , {
        id : 3,
        componiyaName: "mobiuz",
        img: "../../../rasimlar/mobiuz-nav.png",
        colorB: " rgb(206, 0, 40)",
        colorNavB : "rgb(255, 70, 70)",
        companiyaType : companiyaTypeMobiuz,
        
    }
    , {
        id : 4,
        componiyaName: "usel",
        img: "../../../rasimlar/usel-nav.png",
        colorB: " rgb(130, 47, 253)",
        colorNavB : "rgb(158, 47, 255)",
        companiyaType : companiyaTypeUsel,
    }




]