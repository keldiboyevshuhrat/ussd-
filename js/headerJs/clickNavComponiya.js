// path collors backgrounds and text colors
let header1 = document.querySelector("header");
let navColors = document.querySelectorAll("nav");
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






//    
//   
//    
//   







if (!JSON.parse(localStorage.getItem("componiyaData"))) {

    localStorage.setItem("componiyaData", JSON.stringify(componiyaData));
}
let localStorageGetItemComponiyaData = JSON.parse(localStorage.getItem("componiyaData"));



onclickComponiya.forEach((e) => {

    e.addEventListener("click", (i) => {
        let obj = new Object;

        localStorageGetItemComponiyaData.forEach((e2) => {
            if (i.currentTarget.getAttribute("name") == e2.componiyaName) {
                obj = e2;
                localStorage.setItem("newObjCompiniya", JSON.stringify(e2));
            }

        })



        switch (obj.componiyaName) {
            case "uztelecom":
                colorsUSSd(obj.colorB, obj.colorNavB, obj.componiyaName)
                break;
            case "beeline":
                colorsUSSd(obj.colorB, obj.colorNavB, obj.componiyaName)
                break;
            case "usel":
                colorsUSSd(obj.colorB, obj.colorNavB, obj.componiyaName)
                break;
            case "mobiuz":
                colorsUSSd(obj.colorB, obj.colorNavB, obj.componiyaName)
                break;
            default:
                console.log("topilmadi");
        }

    })

})




let getItemObjComponiya = JSON.parse(localStorage.getItem("newObjCompiniya"))
    ? JSON.parse(localStorage.getItem("newObjCompiniya"))
    : new Object;





Object.keys(getItemObjComponiya).length !== 0
    ? colorsUSSd(getItemObjComponiya.colorB, getItemObjComponiya.colorNavB, getItemObjComponiya.componiyaName)
    : colorsUSSd("green", "green", "noComponiya");














function colorsUSSd(colorBody, colorNav, componiyaNameF) {




    if (footer1) {
        footer1.style.backgroundColor = colorBody;
    }

    if (navColors) {
        navColors.forEach((e) => {
            e.style.backgroundColor = colorNav;
          
        })

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










