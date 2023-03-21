 // Notify me button ( if omnisend form visible, hide add to button form)
const notifyBlock = document.querySelector('.product-form__notify-form');
const formButtons = document.querySelector('.product-form__buy-buttons');

const observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
    if (mutation.type === 'childList' || (mutation.type === 'attributes' && mutation.attributeName === 'style')) {
        const childNodes = mutation.target.childNodes;
        if (childNodes.length > 0 && notifyBlock.style.display !== 'none') {
            formButtons.style.display = 'none';
        } else {
            formButtons.style.display = 'block';
        }
    }
});
});

observer.observe(notifyBlock, { childList: true,  attributes: true, attributeFilter: ['style'] });