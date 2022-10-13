/*** link--rd **/
const $links = document.querySelectorAll('.link--rd');

$links.forEach((item) => {
    const text = item.innerText;
    item.innerHTML += `<span data-letters="${text}"></span><span data-letters="${text}"></span>`
});