
/*** link--rd **/
const $links = document.querySelectorAll('.link--rd');

$links.forEach((item) => {
    const text = item.innerText;
    item.innerHTML += `<span data-letters="${text}"></span><span data-letters="${text}"></span>`
});

/** menu highlight **/
    $links.forEach((item, nb) => {
        setTimeout(() => {
            item.classList.add('hover')
            setTimeout(() => {
                item.classList.remove('hover')
            }, 800)
        }, 3000 + (nb * 1000));
    })

/*** parallax **/

// The parallax function
const parallax = () => {
    const elementsFooter = document.querySelector('.footer--wrapper')
    if ('undefined' !== elementsFooter) {
        let y = elementsFooter.offsetTop + elementsFooter.scrollHeight - window.scrollY - window.innerHeight
        if (1) {
            /*
            TweenMax.to(elementsFooter, 0, {
                transform: 'translate3d(0, -' + (0.2 * y) + 'px ,0)'
            })*/
            elementsFooter.style.transform = 'translate3d(0, -' + (0.2 * y) + 'px ,0)'
        }

    }
}

window.addEventListener('scroll', throttle(parallax, 1));

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

/*** effect appears **/
AOS.init();

/** textwrapper **/
var textWrapper = document.querySelector('.appears--letter-1');
textWrapper.style.opacity="0";
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

setTimeout(() => {
    textWrapper.style.opacity="1";
    anime.timeline({loop: true})
        .add({
            targets: '.line-wrapper .line',
            scaleY: [0,1],
            opacity: [0.5,1],
            easing: "easeOutExpo",
            duration: 700
        })
        .add({
            targets: '.line-wrapper .line',
            translateX: [0, document.querySelector('.appears--letter-1').getBoundingClientRect().width + 10],
            easing: "easeOutExpo",
            duration: 700,
            delay: 100
        }).add({
        targets: '.line-wrapper .letter',
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i+1)
    }).add({
        targets: '.line-wrapper',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
}, 2000)


/*** GSAP **/
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 0.8,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
});


