export default function initToolTip() {


}

const toolTips = document.querySelectorAll('[data-tooltip]');

toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
})

function onMouseOver(e) {
    criarToolTipBox(this);
    console.log(onMouseOver)
}

function criarToolTipBox(element) {
    const toolTipBox = document.createElement('div');
    const text = element.getAttribute('aria-label')
    toolTipBox.classList.add('tooltip');
    toolTipBox.innerHTML = text;
}