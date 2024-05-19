const text = "Olá, meu nome é Allan Kennedy e construo páginas web.";
let index = 0;

function typing() {
    const container = document.getElementById("cabecalhoText");
  container.textContent += text[index];
  index++;
  if (index < text.length) {
    setTimeout(typing, 100);
  }
}

typing();
