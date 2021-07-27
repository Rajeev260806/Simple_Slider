
const slideValue = document.querySelector("span");
const inputSlider = document.querySelector("input");
inputSlider.oninput(()=>{
    let value = inputSlider.value;
    slideValue.textContent = value;
    styleValue.style.left = (value/2) + "%";
});
