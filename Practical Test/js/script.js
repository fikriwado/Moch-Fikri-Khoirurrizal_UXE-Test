// ---------------- Start Functional Slider ----------------
const wrapSlider = document.querySelector('.wrapper-slider');
const btnSlider = document.querySelectorAll('.btn-slider');
const sliderItems = document.querySelector('.slider-items');
const numberOfSliderItems = document.querySelectorAll('.slider-items .card');
const sliderOffset = numberOfSliderItems.length * (numberOfSliderItems[0].offsetWidth + 20);
let translateX = 0;

btnSlider.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'previous') {
            if (translateX > -30 && translateX < 30) translateX = 4;
            else translateX += 30;
        } else {
            if (translateX > (wrapSlider.offsetWidth - sliderOffset)) translateX -= 30;
            else translateX = (wrapSlider.offsetWidth - sliderOffset) + 16;
        }

        sliderItems.style.transform = `translateX(${translateX}px)`;

        if (translateX < 0) btnSlider[0].style.display = 'block';
        else btnSlider[0].style.display = 'none';

        if (translateX === (wrapSlider.offsetWidth - sliderOffset) + 16) btnSlider[1].style.display = 'none';
        else btnSlider[1].style.display = 'block';
    });
});
// ---------------- ./End Functional Slider ----------------


// ---------------- Start Functional Collapse ----------------
const btnCollapse = document.getElementById('collapse-footer');
const contentCollapse = document.getElementById('content-collapse-footer');

btnCollapse.addEventListener('click', (e) => {
    e.preventDefault();
    contentCollapse.classList.toggle('active');
    btnCollapse.classList.toggle('active');

    if (btnCollapse.innerHTML === 'Collapse all <i class="fa-solid fa-angle-up"></i>') {
        btnCollapse.innerHTML = 'Show all <i class="fa-solid fa-angle-down"></i>';
    } else {
        btnCollapse.innerHTML = 'Collapse all <i class="fa-solid fa-angle-up"></i>';
    }
});
// ---------------- ./End Functional Collapse ----------------


// ---------------- ./End Functional Back To Top ----------------
const rootElement = document.documentElement;
const btnBackTop = document.querySelector('.back-to-top');

btnBackTop.addEventListener('click', () => {
    rootElement.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// ---------------- ./End Functional Back To Top ----------------