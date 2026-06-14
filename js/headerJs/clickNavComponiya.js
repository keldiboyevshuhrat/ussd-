// path collors backgrounds and text colors
let header1 = document.querySelector("header");
let navColors = document.querySelector("nav");
let mainDataSections = document.querySelectorAll(".m-d-section-1");
let mainRestartSection = document.querySelector(".main-restart-section");
let footer1 = document.querySelector("footer");
let footerInfo = document.querySelectorAll(".f-info")
let headerLogoNameComponiya = document.getElementById("h-i-name");


/// get data and glovnoyeObjComponiya
import { glovnoyeObjComponiya } from "../data/glovnoyeObjComponiya.js";
import { componiyaData } from "../data/componiyaData/componiyaData.js";









navColors.style.backgroundColor = `${glovnoyeObjComponiya.colorNavB}`;
header1.style.backgroundColor = `${glovnoyeObjComponiya.colorB}`;
mainRestartSection.style.backgroundColor = glovnoyeObjComponiya.colorNavB;
mainDataSections.forEach(element => {
    element.style = `border : 2px solid ${glovnoyeObjComponiya.colorB}`
});
footer1.style.backgroundColor = glovnoyeObjComponiya.colorB;
footerInfo[2].style.backgroundColor = glovnoyeObjComponiya.colorB;




// logo name 
headerLogoNameComponiya.innerText = glovnoyeObjComponiya.componiyaName;


window.onClickComponiya = function (index) {



    let b1 = componiyaData[index].colorB;
    let n1 = componiyaData[index].colorNavB;

    navColors.style.backgroundColor = n1;
    header1.style.backgroundColor = b1;
    mainRestartSection.style.backgroundColor = n1;
    mainDataSections.forEach(element => {
        element.style = `border : 2px solid ${b1}`
    });
    footer1.style.backgroundColor = b1;
    footerInfo[2].style.backgroundColor = b1;


    // logo name
    headerLogoNameComponiya.innerText = componiyaData[index].componiyaName ;








}

