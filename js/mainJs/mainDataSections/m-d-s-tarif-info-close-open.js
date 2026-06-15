

let m_d_s_t_1_icon = document.querySelectorAll(".m_d_s_t_1_icon");
let m_d_s_t = document.querySelectorAll(".m-d-s-t");
let m_d_s_t_1 = document.querySelectorAll(".m-d-s-t-1");

let isIconDeg = false;
let isOldIndex = 0;

m_d_s_t_1.forEach((item, i) => {

    item.addEventListener("click", () => {


        if(isOldIndex != i){
            isIconDeg = false;
        }



        if (isIconDeg) {
            m_d_s_t_1_icon[i].style = `
            transform: rotate(0deg);
            
            `

            m_d_s_t[i].style = `
            height : 60px;
          
                `


            isIconDeg = false;

        } else {
            m_d_s_t_1_icon[i].style = `
            transform: rotate(50deg);
            

            `
            m_d_s_t[i].style = `
            height : max-content;
            overflow: hidden;
            
            
            `
            isIconDeg = true;
            isOldIndex = i ;
        }


    });
});
