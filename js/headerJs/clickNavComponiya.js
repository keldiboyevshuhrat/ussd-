// path collors backgrounds and text colors
let header1 = document.querySelector("header");
let navColors = document.querySelector("nav");
let mainDataSections = document.querySelectorAll(".m-d-section-1");
let mainRestartSection = document.querySelector(".main-restart-section");
let footer1 = document.querySelector("footer");
let footerInfo = document.querySelectorAll(".f-info")
let headerLogoNameComponiya = document.querySelectorAll("#h-i-name");
let mainDataSectionClick = document.querySelectorAll(".m-d-section-click");
let mainDataSectionTarif2Exchange = document.querySelectorAll(".m-d-s-t-2-exchange");
let colorTexts = document.querySelectorAll(".color-texts");


/// get data and glovnoyeObjComponiya
import { glovnoyeObjComponiya } from "../data/glovnoyeObjComponiya.js";
import { componiyaData } from "../data/componiyaData/componiyaData.js";


let glovnoyeObjComponiya_1 = glovnoyeObjComponiya;



//    
//   
//    
//     














window.onClickComponiya = function (i) {
    glovnoyeObjComponiya_1  = componiyaData[i];

   


}




function colors1() {

    let b1 = glovnoyeObjComponiya_1.colorB;
    let n1 = glovnoyeObjComponiya_1.colorNavB;



    if (navColors) {
        navColors.style.backgroundColor = n1;
    }
    if (footer1) {
        footer1.style.backgroundColor = b1;
    }

    if (footerInfo) {
        footerInfo[2].style.backgroundColor = b1;
    }

    if (headerLogoNameComponiya) {
        headerLogoNameComponiya.forEach(e => {
            e.textContent = glovnoyeObjComponiya_1.componiyaName
        })
    }

    if (mainDataSections) {
        mainDataSections.forEach(element => {
            element.style = `border : 2px solid ${b1}`
        });
    }

    if (mainRestartSection) {
        mainRestartSection.style.backgroundColor = n1;
    }


    if (header1) {
        header1.style.backgroundColor = b1;

    }


    if (mainDataSectionClick) {
        mainDataSectionClick.forEach(e => {

            e.style.backgroundColor = b1;
        })

    }

    if (mainDataSectionTarif2Exchange) {
        mainDataSectionTarif2Exchange.forEach(e => {
            e.style.backgroundColor = b1
        })
    }


    if (colorTexts) {
        colorTexts.forEach(e => {
            e.style.color = b1

        })
    }

}

setInterval(function () {
colors1();
})
