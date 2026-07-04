

import { mainWindow } from "../mainJs/mainDataSections/mainWindow.js";
let sim_cart = document.querySelectorAll(".sim-cart");

let f_info = document.querySelectorAll(".f-info");

f_info.forEach((i, count) => {

    if (count == 1) {
        f_info[count].setAttribute("onclick", "somCartOnOff()")
    }


    i.addEventListener("click", (item) => {

        console.log(count);
        switch (count) {
            case 0:
                break;
                case 1:
                break;
            case 2:
                mainWindow();
                break;
            case 3:
                break;
                case 4:
                   
                break;
            default:
              
                break

        }

    })


})


