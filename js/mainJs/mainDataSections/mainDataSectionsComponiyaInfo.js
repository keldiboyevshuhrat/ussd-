
// import { navSectionsInfoType } from "../../data/navComponiyaInfo/beline/navComponiyaInfoBeline.js";

let mainDataSection1 = document.querySelectorAll(".m-d-section-1");

// let mmainDataSectionClickMain01 = document.querySelector(".m-d-section-1");


mainDataSection1.forEach((e) => {

    e.addEventListener("click", (i) => {

        



        

        switch (i.currentTarget.textContent.trim()) {

        
            case "tariflar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-tariflar.html";
                break;
            case "internet paketlar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";
                break;
            case "daqiqa paketlar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";
                break;
            case "sms paketlar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-click.html";

                break;
            case "aksiya va yangiliklar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-promationsAndNews.html";

                break;
            case "ussd kodlar va xizmatlar":
                window.location.href = "../../../html/mainHtml/m-d-sections/m-d-s-UssdCode.html";
                break;
            default:
                console.log("topilmadi");
        }






    })


})