

//import "../mainJs/mainDataSections/m_d_sections.js";
import "../mainJs/mainSectionsRestart/m_s_Restarts.js";
import "../mainJs/mainDataSections/m-d-s-tarif-info-close-open.js";
import "../headerJs/headerNavCompaniyas.js";
import "../headerJs/headerComponiyaName.js";
import "../headerJs/clickNavComponiya.js";
import "../headerJs/clickNavComponiya.js";
import "../mainJs/mainDataSections/mainDataSectionsComponiyaInfo.js"



let componiyaNav = document.querySelectorAll(".m-d-s-c-nav");
let getColorsNav = localStorage.getItem("componiyaColors");

// console.log(getColorsNav);


// window.addEventListener("storage", () => {

    
//     console.log("0000000000000000");
    
// })



componiyaNav.forEach((e) => {

    e.style.backgroundColor = getColorsNav;
    
})

let navColors = document.querySelector("nav");

console.log(navColors);
navColors.style.setProperty("background-color", "red", "important");









// setInterval(() => {
//     location.reload();
// }, 5000);