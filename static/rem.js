let tid = 0;

const pxToRem = () => {
    let width = document.body.getBoundingClientRect().width;
    width = width > 540 ? 540 : width;
    const rem = width * 100 / 540;
    document.querySelector('html').style.fontSize = rem + 'px';
}

window.addEventListener("DOMContentLoaded", function (e) {
    pxToRem();
}, false);

window.addEventListener("resize", function () {
    clearTimeout(tid); //防止执行两次
    tid = setTimeout(pxToRem, 100);
}, false);

