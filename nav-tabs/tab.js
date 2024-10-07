const tabBtn = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".content");

tabBtn.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    const underLine = document.querySelector(".line");
    tabBtn.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    underLine.style.width = e.target.offsetWidth + "px";
    underLine.style.left = e.target.offsetLeft + "px";
    content.forEach((data) => data.classList.replace("block", "hidden"));
    content[i].classList.replace("hidden", "block");
  });
});
