
let m_d_section_click = document.querySelectorAll(".m-d-section-click i");
let m_d_section_click_lastChild = document.querySelectorAll(".m-d-section-click  p:last-child");
let mainDataSection1 = document.querySelectorAll(".m-d-section-1");

let sim_cart = document.querySelectorAll(".sim-cart");

m_d_section_click.forEach((e) => {

    e.addEventListener("click", (item) => {

        mainWindow()

    })

})



export function mainWindow() {
    window.location.href = "../../../ussdCode.html";
}


if (!localStorage.getItem("m_d_section_click_lastChild")) {
    localStorage.setItem("m_d_section_click_lastChild", "internet poket")
}

let m_d_section_click_lastChild_name = localStorage.getItem("m_d_section_click_lastChild");

m_d_section_click_lastChild.forEach((r) => {


    r.textContent = m_d_section_click_lastChild_name;

})



function somCartOnOff() {

    sim_cart.forEach((i) => {
        i.classList.toggle("on-off-sim-cart-attention");
    })

}

window.somCartOnOff = somCartOnOff,

sim_cart.forEach((i) => {

    i.addEventListener("click", () => {

        window.somCartOnOff();
    })

})





