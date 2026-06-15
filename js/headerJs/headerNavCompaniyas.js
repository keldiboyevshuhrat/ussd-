
let componiya2 = document.querySelector(".componiya");
import { componiyaData } from "../data/componiyaData/componiyaData.js";



let componiyaDataArr = new Array();


componiyaDataArr = componiyaData;



function rasim1(newDivComponiya) {

    for (let i = 0; i < newDivComponiya.length; i++) {
        if (componiya2) {
            componiya2.innerHTML += `
        <div onclick="onClickComponiya(${i})" class="componiya-1 border-black"> 
        <img src="${newDivComponiya[i].img}" alt="${newDivComponiya[i].componiyaName}">
                    </div>
        
        `
        }

    }




}
rasim1(componiyaDataArr)

