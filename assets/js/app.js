let tab_1 = document.querySelector(".tab_1");
let tab_2 = document.querySelector(".tab_2");
let tab_3 = document.querySelector(".tab_3");
let text = document.querySelector(".text");
let text_disp = document.querySelector(".text_to_show");
let text_disp_1 = document.querySelector(".text_to_show_1");
let text_disp_2 = document.querySelector(".text_to_show_2");
tab_1.classList.add("bordr");
tab_1.style.color = "black";
tab_2.style.color = "#808080";
tab_3.style.color = "#808080";

tab_1.addEventListener("click", () => {
    let disp_text = window.getComputedStyle(text).display;
    if (disp_text === "none") {
        text_disp_1.style.display = "none";
        text_disp_2.style.display = "none";
        text.style.display = "block";
        tab_1.classList.add("bordr");
        tab_2.classList.remove("bordr");
        tab_3.classList.remove("bordr");
        tab_1.style.color = "black";
        tab_2.style.color = "#808080";
        tab_3.style.color = "#808080";
    }
});

tab_2.addEventListener("click", () => {
    let disp_text = window.getComputedStyle(text_disp_1).display;
    if (disp_text === "none") {
        text_disp_2.style.display = "none";
        text_disp_1.style.display = "block";
        text.style.display = "none";
        tab_1.classList.remove("bordr");
        tab_2.classList.add("bordr");
        tab_3.classList.remove("bordr");
        tab_1.style.color = "#808080";
        tab_2.style.color = "black";
        tab_3.style.color = "#808080";
    }
});

tab_3.addEventListener("click", () => {
    let disp_text = window.getComputedStyle(text_disp_2).display;
    if (disp_text === "none") {
        text_disp_1.style.display = "none";
        text_disp_2.style.display = "block";
        text.style.display = "none";
        tab_1.classList.remove("bordr");
        tab_2.classList.remove("bordr");
        tab_3.classList.add("bordr");
        tab_1.style.color = "#808080";
        tab_2.style.color = "#808080";
        tab_3.style.color = "black";
    }
});
