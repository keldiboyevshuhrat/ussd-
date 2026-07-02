

let m_d_s_tariflar = document.querySelector(".m-d-s-tariflar");
let m_d_s_c_nav = document.querySelectorAll(".m-d-s-c-nav");

let m_d_s_c_main_01 = document.querySelector(".m-d-s-c-main-01");

let m_d_s_c_nav_P = document.querySelectorAll(".m-d-s-c-nav p");


let localStorageGetItemComponiyaData = JSON.parse(localStorage.getItem("componiyaData"));
let getObjNew = JSON.parse(localStorage.getItem("newObjCompiniya"));



let getClickMeText = localStorage.getItem("clickMeText");


console.log(getObjNew.companiyaType.tarif[1]);


switch (Number(getClickMeText)) {
    case 1:

        tarifAll();


        break;
    case 2:

        paketAll("mb");
        break;
    case 3:
        paketAll("daqiqa")
        break;
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    default:
        console.log("getClickMeText ishlamadi ");
}
// localStorageGetItemComponiyaData.forEach(element => {



// });












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
            m_d_s_tariflar.innerHTML = "";


            getObjNew.companiyaType.tarif.forEach((info1) => {
                if (info1.period == item.currentTarget.textContent) {


                    info1.Info.forEach((info2) => {
                        console.log(info2);

                        let newDiv = document.createElement("div");
                        newDiv.setAttribute("onclick", "tarifOchishYopish(this)");
                        newDiv.classList.add("m-d-s-t", "border-black");
                        newDiv.innerHTML = `
                    <div class="m-d-s-t-1 border-black">
                        <h3 class="border-black">${info2.tarifName}</h3>
                        <i class=" m_d_s_t_1_icon fa-brands fa-telegram"></i>
                    </div>
                    <div class="m-d-s-t-2 border-black">
                        <div class="m-d-s-c-m-2-text border-black">
                            <p>abanet tolovi:</p>
                            <p>20,000 so'm</p>
                        </div>
                        <div class="m-d-s-c-m-2-text border-black">
                            <p>chiquvchi o'zbekiston bo'yicha</p>
                            <p>vip</p>
                        </div>
                        <div class="m-d-s-c-m-2-text border-black">
                            <p>mb</p>
                            <p>100</p>
                        </div>
                        <div class="m-d-s-c-m-2-text border-black">
                            <p>sms:</p>
                            <p>88</p>
                        </div>
                        <div class="m-d-s-c-m-2-text border-black">
                            <p>yoqish:</p>
                            <p>*122*97106324*123#</p>
                        </div>
        
                        <div class="m-d-s-t-2-exchange ">
                            <p>tarifni almashtirish</p>
                        </div >
                    </div>
                        `


                        m_d_s_tariflar.appendChild(newDiv);


                    })


                }

            })

        })

    })













}





/////////////     mb all ///////////////
function mbAll() {

    m_d_s_c_nav.forEach((p) => {

        p.innerHTML = "";
        getObjNew.companiyaType.mb.forEach((element) => {

            p.innerHTML += `
            <p>${element.period}</p>
            `




        })
    });





    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {



        e.addEventListener("click", (item) => {
            m_d_s_c_main_01.innerHTML = "";


            getObjNew.companiyaType.mb.forEach((info1) => {
                if (info1.period == item.currentTarget.textContent) {


                    info1.Info.forEach((info2) => {
                        console.log(info2);

                        let newDiv = document.createElement("div");
                        newDiv.setAttribute("onclick", "tarifOchishYopish(this)");
                        newDiv.classList.add("m-d-s-c-main", "border-black");
                        newDiv.innerHTML = `
        <div class="m-d-s-c-m-1 border-black" >
            <p class="m-d-s-c-m-1-value color-texts" >${info2.type}</p>
        </div>
        <div class="m-d-s-c-m-2 border-black">
            <div class="m-d-s-c-m-2-text border-black">
                <p>narxi:</p>
                <p>20,000 so'm</p>
            </div>
            <div class="m-d-s-c-m-2-text border-black">
                <p>muddati</p>
                <p>30 kun</p>
            </div>
            <div class="m-d-s-c-m-2-text border-black">
                <p>yoqish:</p>
                <p>*122*97106324*123#</p>
            </div>

        </div>
                        `


                        m_d_s_c_main_01.appendChild(newDiv);


                    })


                }

            })

        })

    })

}



console.log(getObjNew);

//////////////    daqiqa  //////////////// 
function paketAll(key) {


    m_d_s_c_nav.forEach((p) => {

        console.log(typeof getObjNew.companiyaType);
        p.innerHTML = "";
        getObjNew.companiyaType.key.forEach((element) => {

            p.innerHTML += `
            <p>${element.period}</p>
            `




        })
    });




    document.querySelectorAll(".m-d-s-c-nav p").forEach((e) => {

        e.addEventListener("click", (item) => {
            m_d_s_c_main_01.innerHTML = "";


            getObjNew.companiyaType.key.forEach((info1) => {
                if (info1.period == item.currentTarget.textContent) {


                    info1.Info.forEach((info2) => {
                        console.log(info2);

                        let newDiv = document.createElement("div");
                        newDiv.setAttribute("onclick", "tarifOchishYopish(this)");
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
                <p>*122*97106324*123#</p>
            </div>

        </div>
                        `


                        m_d_s_c_main_01.appendChild(newDiv);


                    })


                }

            })

        })

    })

}