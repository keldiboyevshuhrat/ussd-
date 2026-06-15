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
let onclickComponiya = document.querySelectorAll(".onclickComponiya");


/// get data and glovnoyeObjComponiya
import { glovnoyeObjComponiya } from "../data/glovnoyeObjComponiya.js";
import { componiyaData } from "../data/componiyaData/componiyaData.js";


let glovnoyeObjComponiya_1 = glovnoyeObjComponiya;



//    
//   
//    
//     







// if (navColors) {
//     navColors.style.backgroundColor = glovnoyeObjComponiya_1.colorNavB;
// }
// if (footer1) {
//     footer1.style.backgroundColor = glovnoyeObjComponiya_1.colorB;
// }

// if (footerInfo) {
//     footerInfo[2].style.backgroundColor = glovnoyeObjComponiya_1.colorB;
// }

// if (headerLogoNameComponiya) {
//     headerLogoNameComponiya.forEach(e => {
//         e.textContent = glovnoyeObjComponiya_1.componiyaName
//     })
// }

// if (mainDataSections) {
//     mainDataSections.forEach(element => {
//         element.style = `border : 2px solid ${glovnoyeObjComponiya_1.colorB}`
//     });
// }

// if (mainRestartSection) {
//     mainRestartSection.style.backgroundColor = glovnoyeObjComponiya_1.colorNavB;
// }


// if (header1) {
//     header1.style.backgroundColor = glovnoyeObjComponiya_1.colorB;

// }


// if (mainDataSectionClick) {
//     mainDataSectionClick.forEach(e => {

//         e.style.backgroundColor = glovnoyeObjComponiya_1.colorB;
//     })

// }

// if (mainDataSectionTarif2Exchange) {
//     mainDataSectionTarif2Exchange.forEach(e => {
//         e.style.backgroundColor = glovnoyeObjComponiya_1.colorB
//     })
// }


// if (colorTexts) {
//     colorTexts.forEach(e => {
//         e.style.color = glovnoyeObjComponiya_1.colorB

//     })
// }












let ddd = false;



console.log("---------------");

onclickComponiya.forEach((item, i) => {
   
    item.addEventListener("click", () => {

        ddd = true;
       
    })
})

export let dddd1 = ddd;


setInterval(function () {
    console.log(ddd);
}, 5000)





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






