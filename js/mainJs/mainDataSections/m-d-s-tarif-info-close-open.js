

let m_d_s_t_1_icon = document.querySelectorAll(".m_d_s_t_1_icon");
let m_d_s_t = document.querySelectorAll(".m-d-s-t");

let isIconDeg = false

m_d_s_t_1_icon.forEach((item, i) => {

    item.addEventListener("click", () => {

        if (isIconDeg) {
            item.style = `
            transform: rotate(0deg);
            
            `

            m_d_s_t[i].style = `
            height : 60px;
          
                `


            isIconDeg = false;

        } else {
            item.style = `
            transform: rotate(50deg);
            

            `
            m_d_s_t[i].style = `
            height : max-content;
            overflow: hidden;
            
            
            `
            isIconDeg = true;
        }


    });
});
