const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Função para encolher o NO e aumentar o YES
function clickNo() {
  // Diminuir o botão NO
  const noStyle = window.getComputedStyle(noBtn);
  let noSize = parseInt(noStyle.fontSize); // tamanho atual
  if (noSize > 10) { // limita para não desaparecer completamente
    noSize -= 2;
    noBtn.style.fontSize = noSize + 'px';
    noBtn.style.padding = (parseInt(noBtn.style.padding || 15) - 1) + 'px 30px';
  }

  // Aumentar o botão YES
  const yesStyle = window.getComputedStyle(yesBtn);
  let yesSize = parseInt(yesStyle.fontSize);
  if (yesSize < 200) { // limita o tamanho máximo
    yesSize += 5;
    yesBtn.style.fontSize = yesSize + 'px';
    yesBtn.style.padding = (parseInt(yesBtn.style.padding || 15) + 2) + 'px 30px';
  }
}

// Quando clicar no NO
noBtn.addEventListener('click', clickNo);

// Quando clicar no YES
yesBtn.addEventListener('click', () => {
  alert("Yay! Você aceitou ser meu Valentine! 💖");
});
