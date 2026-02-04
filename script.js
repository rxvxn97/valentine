const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

// Função para mover o botão NO aleatoriamente
function moveNoBtn() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  // Aumenta o botão YES
  const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = (currentSize + 2) + 'px';
}

// Quando o mouse entra no NO, ele foge
noBtn.addEventListener('mouseenter', moveNoBtn);

// Quando o YES é clicado, mostra mensagem
yesBtn.addEventListener('click', () => {
  alert("Yay! Você aceitou ser meu Valentine! 💖");
});
