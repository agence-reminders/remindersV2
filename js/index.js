/*** link--rd **/
const $links = document.querySelectorAll('.link--rd');

$links.forEach((item) => {
    const text = item.innerText;
    item.innerHTML += `<span data-letters="${text}"></span><span data-letters="${text}"></span>`
});


/*** parallax **/

// The parallax function
const parallax = () => {
    const elements = document.querySelectorAll('.parallax')
    if ('undefined' !== elements && elements.length > 0) {
        elements.forEach( element => {
            let y = window.innerHeight - element.getBoundingClientRect().top
            if (y > 0) {
                element.style.transform = 'translate3d(0, -' + (0.1 * y) + 'px ,0)'
            }
        })
    }
}

parallax();

window.addEventListener('scroll', throttle(parallax, 14));

// pour optimiser les performances
function throttle(fn, wait) {
    let time = Date.now();
    return function() {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
};


