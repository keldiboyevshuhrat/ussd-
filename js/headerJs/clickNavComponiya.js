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
let componiya = document.querySelector(".componiya");
let onclickComponiya = document.querySelectorAll(".onclickComponiya");

/// get data and glovnoyeObjComponiya
// import { glovnoyeObjComponiya } from "../data/glovnoyeObjComponiya.js";
import { componiyaData } from "../data/componiyaData/componiyaData.js";


navColors.style.backgroundColor = "red";



//    
//   
//    
//     





componiyaData.length >= 1
    ? colorsUSSd(componiyaData[0].colorB, componiyaData[0].colorNavB, componiyaData[0].componiyaName)
    : colorsUSSd("green", "green", "noComponiya");










onclickComponiya.forEach((e) => {

    e.addEventListener("click", (i) => {
        let obj = new Object;


        componiyaData.forEach((e2) => {
            if (i.currentTarget.getAttribute("name") == e2.componiyaName) {
                obj = e2;
            }

        })

        switch (obj.componiyaName) {
            case "uztelecom":
                break;
            case "beeline":

                colorsUSSd(obj.colorB, obj.colorNav, obj.componiyaName)







                console.log("beeline1");
                break;
            case "usel":
                console.log("usel1");
                break;
            case "mobiuz":
                console.log("mobiuz1");
                break;
            default:
                console.log("topilmadi");
        }







    })






})










function colorsUSSd(colorBody, colorNav, componiyaNameF) {



    
    if (footer1) {
        footer1.style.backgroundColor = colorBody;
    }

    if (navColors) {
        navColors.style.backgroundColor = colorNav;

    }

    if (footerInfo) {
        footerInfo[2].style.backgroundColor = colorBody;
    }

    if (headerLogoNameComponiya) {
        headerLogoNameComponiya.forEach(e => {
            e.textContent = componiyaNameF
        })
    }

    if (mainDataSections) {
        mainDataSections.forEach(element => {
            element.style = `border : 2px solid ${colorBody}`
        });
    }

    if (mainRestartSection) {
        mainRestartSection.style.backgroundColor = colorNav;
    }


    if (header1) {
        header1.style.backgroundColor = colorBody;

    }


    if (mainDataSectionClick) {
        mainDataSectionClick.forEach(e => {

            e.style.backgroundColor = colorBody;
        })

    }

    if (mainDataSectionTarif2Exchange) {
        mainDataSectionTarif2Exchange.forEach(e => {
            e.style.backgroundColor = colorBody;
        })
    }


    if (colorTexts) {
        colorTexts.forEach(e => {
            e.style.color = colorBody;

        })
    }



}






// window.location.href = "../../html/mainHtml/m-d-sections/m-d-s-click.html";













// glovnoyeObjComponiya_1 = componiyaData[i];



// let b1 = glovnoyeObjComponiya_1.colorB;
// let n1 = glovnoyeObjComponiya_1.colorNavB;



// if (navColors) {
//     navColors.style.backgroundColor = n1;
// }
// if (footer1) {
//     footer1.style.backgroundColor = b1;

// }

// if (footerInfo) {
//     footerInfo[2].style.backgroundColor = b1;
// }

// if (headerLogoNameComponiya) {
//     headerLogoNameComponiya.forEach(e => {
//         e.textContent = glovnoyeObjComponiya_1.componiyaName
//     })
// }

// if (mainDataSections) {
//     mainDataSections.forEach(element => {
//         element.style = `border : 2px solid ${b1}`
//     });
// }

// if (mainRestartSection) {
//     mainRestartSection.style.backgroundColor = n1;
// }


// if (header1) {
//     header1.style.backgroundColor = b1;

// }


// if (mainDataSectionClick) {
//     mainDataSectionClick.forEach(e => {

//         e.style.backgroundColor = b1;
//     })

// }

// if (mainDataSectionTarif2Exchange) {
//     mainDataSectionTarif2Exchange.forEach(e => {
//         e.style.backgroundColor = b1
//     })
// }


// if (colorTexts) {
//     colorTexts.forEach(e => {
//         e.style.color = b1

//     })
// }






