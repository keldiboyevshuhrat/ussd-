






window.tarifOchishYopish = tarifOchishYopish;
function tarifOchishYopish(fteg) {

    let m_d_s_t_1_icon = document.querySelectorAll(".m_d_s_t_1_icon");
    let m_d_s_t = document.querySelectorAll(".m-d-s-t");
    let m_d_s_t_1 = document.querySelectorAll(".m-d-s-t-1");

    let isIconDeg = false;
    let isOldIndex = 0;





    console.log(fteg);


    m_d_s_t_1_icon.forEach((t) => {
        if (t.parentElement.parentElement == fteg) {

            if (fteg.style.height) {
                t.style = `
        transform: rotate(0deg);
        
        `

                fteg.style = `
        height : 60px;
      
            `


                fteg.style.height = "";

            } else {
                t.style = `
        transform: rotate(50deg);
        

        `
                fteg.style = `
        height : max-content;
        overflow: hidden;
        
        
        `

            }
        }
    })















}



