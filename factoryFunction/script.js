function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    text: text,
    element,
  }
}

const btnComprar = createButton('Comprar');
const btnVender = createButton('Vender');

console.log(btnComprar, btnVender)