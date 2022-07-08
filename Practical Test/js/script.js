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