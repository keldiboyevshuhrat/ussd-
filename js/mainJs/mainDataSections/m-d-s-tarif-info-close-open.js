






window.tarifOchishYopish = tarifOchishYopish;
function tarifOchishYopish(fteg) {

    let m_d_s_t_1_icon = document.querySelectorAll(".m_d_s_t_1_icon");
    let m_d_s_t = document.querySelectorAll(".m-d-s-t");
    let m_d_s_t_1 = document.querySelectorAll(".m-d-s-t-1");

    let isIconDeg = false;
    let isOldIndex = 0;





    console.log(fteg.parentElement.style.height);


    m_d_s_t_1_icon.forEach((t) => {
        if (t.parentElement == fteg) {

            if (fteg.parentElement.style.height) {
                t.classList.replace("fa-solid", "fa-brands");
                t.classList.replace("fa-right-to-bracket", "fa-stack-overflow");
                t.style = "transform: rotate(0deg);"
                // <i class="fa-brands fa-stack-overflow"></i>
                // <i class="fa-solid fa-right-to-bracket"></i>

                fteg.parentElement.style = `
        height : 60px;
      
            `


                fteg.parentElement.style.height = "";

            } else {
                t.classList.replace("fa-brands", "fa-solid");
                t.classList.replace("fa-stack-overflow", "fa-right-to-bracket");
                t.style = "transform: rotate(90deg);"

                fteg.parentElement.style = `
        height : max-content;
        overflow: hidden;
        
        
        `

            }
        }
    })















}



