

let m_d_s_tariflar = document.querySelector(".m-d-s-tariflar");
let m_d_s_c_nav = document.querySelectorAll(".m-d-s-c-nav");

let m_d_s_c_main_01 = document.querySelector(".m-d-s-c-main-01");

let m_d_s_c_nav_P = document.querySelectorAll(".m-d-s-c-nav p");


let localStorageGetItemComponiyaData = JSON.parse(localStorage.getItem("componiyaData"));
let getObjNew = JSON.parse(localStorage.getItem("newObjCompiniya"));



let getClickMeText = localStorage.getItem("clickMeText");





switch (Number(getClickMeText)) {
    case 1:

        if (m_d_s_tariflar) {
            tarifAll();

        }

        break;
    case 2:
        if (m_d_s_c_main_01) {
            infoAll(getObjNew.companiyaType.mb);
        }
        break;
    case 3:
        if (m_d_s_c_main_01) {
            infoAll(getObjNew.companiyaType.daqiqa)
        }
        break;
    case 4:
        if (m_d_s_c_main_01) {
            infoAll(getObjNew.companiyaType.sms)
        }

        break;
    case 5:
        if (m_d_s_tariflar) {
            aksiyaVaYAngiliklar(getObjNew.companiyaType.news);
        }

        break;
    case 6:

        if (m_d_s_tariflar) {

            ussdAll(getObjNew.companiyaType.ussd)
        }

        break;
    default:
        console.log("getClickMeText ishlamadi ");
}
// localStorageGetItemComponiyaData.forEach(element => {



// });





////////////////    tarif info  ////////////////
function tarifAll() {



    m_d_s_c_nav.forEach((p) => {
        getObjNew.companiyaType.tarif.forEach((element) => {


            p.innerHTML += `
            <p>${element.period}</p>
            `




        })
    });





    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {

        e.addEventListener("click", (item) => {
            clearColor();



            item.target.style = `
            transition: 1s;
            color : ${getObjNew.colorNavB};
            border-bottom: 2px solid ${getObjNew.colorNavB};
            `
            tarifAll2(item);
            colorText();
        })

    })

    tarifAll2("kunlik");


    function tarifAll2(item) {
        m_d_s_tariflar.innerHTML = "";


        getObjNew.companiyaType.tarif.forEach((info1) => {
            let tengEmas = "";

            typeof item == "string" ? tengEmas = item : tengEmas = item.currentTarget.textContent



            console.log(info1);
            if (info1.period == tengEmas) {


                info1.Info.forEach((info2) => {


                    let newDiv = document.createElement("div");
                    // newDiv.setAttribute("onclick", "");
                    newDiv.classList.add("m-d-s-t", "border-black");
                    newDiv.innerHTML = `
            <div class="m-d-s-t-1 border-black" onclick="tarifOchishYopish(this)" >
                <h3 class="border-black color-texts">${info2.tarifName}</h3>
                
                <i class="m_d_s_t_1_icon fa-brands fa-stack-overflow"></i>
            </div>
            <div class="m-d-s-t-2 border-black">
                <div class="m-d-s-c-m-2-text border-black">
                    <p>abanet tolovi:</p>
                    <p>${info2.abonentTolovi}</p>
                </div>
                <div class="m-d-s-c-m-2-text border-black">
                    <p>chiquvchi o'zbekiston bo'yicha</p>
                    <p>${info2.chiquvchiOzbekistonBoyicha}</p>
                </div>
                <div class="m-d-s-c-m-2-text border-black">
                    <p>mb</p>
                    <p>${info2.internet}</p>
                </div>
                <div class="m-d-s-c-m-2-text border-black">
                    <p>sms:</p>
                    <p>${info2.sms}</p>
                </div>
                <div class="m-d-s-c-m-2-text border-black">
                    <p>yoqish:</p>
                    <p>${info2.tarifAlmashtirish}</p>
                </div>

                <div class="m-d-s-c-m-2-text border-black">
                    <p>tarifdan tarqarida :</p>
                    <p>${info2.taridanTashqari}</p>
                </div>
                

                <div class="m-d-s-t-2-exchange " style="background-color:${getObjNew.colorNavB}" onclick="somCartOnOff()">
                    <p>tarifni almashtirish </p>
                </div >
            </div>
                `


                    m_d_s_tariflar.appendChild(newDiv);


                })


            }

        })
    }









}










//////////////    info all daqiqa , sms , mb        x3  //////////////// 
function infoAll(key) {


    m_d_s_c_nav.forEach((p) => {


        p.innerHTML = "";
        key.forEach((element) => {




            p.innerHTML += `
            <p>${element.period}</p>
            `




        })
    });




    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {





        e.addEventListener("click", (item) => {
            clearColor();



            item.target.style = `
            transition: 1s;
            color : ${getObjNew.colorNavB};
            border-bottom: 2px solid ${getObjNew.colorNavB};
            `



            infoAll2(item);
            colorText();
        })

    })


    infoAll2("kunlik");

    function infoAll2(item) {
        m_d_s_c_main_01.innerHTML = "";


        key.forEach((info1) => {
            let tengEmas = "";

            typeof item == "string" ? tengEmas = item : tengEmas = item.currentTarget.textContent

            console.log(info1);

            if (info1.period == tengEmas) {
                console.log(item);


                info1.Info.forEach((info2) => {


                    let newDiv = document.createElement("div");
                    newDiv.setAttribute("onclick", "somCartOnOff()");
                    newDiv.classList.add("m-d-s-c-main", "border-black");
                    newDiv.innerHTML = `
    <div class="m-d-s-c-m-1 border-black" >
        <p class="m-d-s-c-m-1-value color-texts" >${info2.type}</p>
    </div>
    <div class="m-d-s-c-m-2 border-black">
        <div class="m-d-s-c-m-2-text border-black">
            <p>narxi:</p>
            <p>${info2.narx}</p>
        </div>
        <div class="m-d-s-c-m-2-text border-black">
            <p>muddati</p>
            <p>${info2.mudat}</p>
        </div>
        <div class="m-d-s-c-m-2-text border-black">
            <p>yoqish:</p>
            <p>${info2.yoqish}</p>
        </div>

    </div>
                    `


                    m_d_s_c_main_01.appendChild(newDiv);


                })


            }

        })
    }

}






/////////////     aksiya va yangilik lar all ///////////////
function aksiyaVaYAngiliklar(key) {

    m_d_s_c_nav.forEach((p) => {

        p.innerHTML = "";
        key.forEach((element) => {
            p.innerHTML += `
            <p>${element.name}</p>
            `
        })
    });





    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {

        e.addEventListener("click", (item) => {


            clearColor();


            item.target.style = `
            transition: 1s;
            color : ${getObjNew.colorNavB};
            border-bottom: 2px solid ${getObjNew.colorNavB};
            `
            aksiyaVaYAngiliklar2(item)
            colorText();

        })

    })

    aksiyaVaYAngiliklar2("aksiyalar")

    function aksiyaVaYAngiliklar2(item) {
        m_d_s_tariflar.innerHTML = "";


        key.forEach((info1) => {


            let tengEmas = "";

            typeof item == "string" ? tengEmas = item : tengEmas = item.currentTarget.textContent


            if (info1.name == tengEmas) {

                info1.Info.forEach((info2) => {

                    let newDiv = document.createElement("div");
                    newDiv.setAttribute("onclick", "tarifOchishYopish(this)");
                    newDiv.classList.add("m-d-s-promationsAndNews", "border-black");
                    newDiv.innerHTML = `
                     
                    <h1 class="color-texts">${info2.malumot}</h1>
        
                    <p> ${info2.malumotPoragrf}</p>
               
                    `


                    m_d_s_tariflar.appendChild(newDiv);


                })


            }
        })


    }

}



///* *************************************************************************







function ussdAll(key) {

    m_d_s_c_nav.forEach((p) => {

        p.innerHTML = "";
        key.forEach((element) => {
            p.innerHTML += `
            <p>${element.period}</p>
            `

        })
    });





    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {



        e.addEventListener("click", (item) => {
            clearColor();



            item.target.style = `
            transition: 1s;
            color : ${getObjNew.colorNavB};
            border-bottom: 2px solid ${getObjNew.colorNavB};
            `
            ussdAll2(item);

            colorText();

        })

    })

    ussdAll2("ussd kodlar");



    function ussdAll2(item) {
        m_d_s_tariflar.innerHTML = "";

        console.log(m_d_s_tariflar);
        key.forEach((info1) => {

            let tengEmas = "";

            typeof item == "string" ? tengEmas = item : tengEmas = item.currentTarget.textContent




            if (info1.period == tengEmas) {

                info1.Info.forEach((info2) => {

                    console.log(info2 );
                    let newDiv = document.createElement("div");
                    newDiv.setAttribute("onclick", "somCartOnOff()");
                    newDiv.classList.add("m-d-s-ussdCode", "border-black");
                    newDiv.innerHTML = `
                   
                    <div class="m-d-s-ussdCode-1 border-black">
                        <p class="m-d-s-c-m-1-value color-texts">${info2.ussdCode}</p>
                    </div>
                    <div class="m-d-s-ussdCode-2 border-black">
                        <div class="m-d-s-ussdCode-2-text-1 border-black">
    
                            <p class="color-texts">
                                ${info2.menyu}
                            </p>
    
                            <i class="color-texts fa-solid fa-right-to-bracket"></i>
    
                        </div>
                        <div class="m-d-s-ussdCode-2-text-2 border-black">
                            <p>${info2.tafsif}</p>
    
                        </div>
    
    
                    </div>
    
             
                    
                    
                    `


                    m_d_s_tariflar.appendChild(newDiv);


                })


            }

        })
    }

}













function clearColor() {

    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {


        e.style = `
        transition: 1s;
        color : none; 
        border-bottom: none;
        `


    })


}


let count = 0;
document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {


    if (count == 0) {
        e.style = `
    transition: 1s;
    color : ${getObjNew.colorNavB};
    border-bottom: 2px solid ${getObjNew.colorNavB};
    `
        console.log(count);
        console.log(e);
        count++;
    }


})





colorText();
function colorText() {

    document.querySelectorAll(".color-texts").forEach((i) => {

        i.style.color = getObjNew.colorNavB

    })

}
