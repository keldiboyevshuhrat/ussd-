
// import { navSectionsInfoType } from "../../data/navComponiyaInfo/beline/navComponiyaInfoBeline.js";



let mainDataSection1 = document.querySelectorAll(".m-d-section-1");
let m_d_section_click = document.querySelectorAll(".m-d-section-click  p:last-child");


// let mmainDataSectionClickMain01 = document.querySelector(".m-d-section-1");


mainDataSection1.forEach((e) => {

    e.addEventListener("click", (i) => {
let str = i.currentTarget.textContent.trim();

        localStorage.setItem("m_d_section_click_lastChild" ,str )
        
        

        switch (i.currentTarget.textContent.trim()) {


            case "tariflar":
                localStorage.setItem("clickMeText", "1")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-tariflar.html";
                break;
            case "internet paketlar":
                localStorage.setItem("clickMeText", "2")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";
                break;
            case "daqiqa paketlar":
                localStorage.setItem("clickMeText", "3")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";
                break;
            case "sms paketlar":
                localStorage.setItem("clickMeText", "4")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";

                break;
            case "aksiya va yangiliklar":
                localStorage.setItem("clickMeText", "5")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-promationsAndNews.html";

                break;
            case "ussd kodlar va xizmatlar":
                localStorage.setItem("clickMeText", "6")
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-UssdCode.html";
                break;
            default:
                console.log("topilmadi");
        }






    })


})