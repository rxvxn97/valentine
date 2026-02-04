const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');
const topGif = document.getElementById('topGif');

// Função para clicar no NO
function clickNo() {
  // Diminuir o botão NO
  let noSize = parseInt(window.getComputedStyle(noBtn).fontSize);
  if (noSize > 10) {
    noSize -= 2;
    noBtn.style.fontSize = noSize + 'px';
    noBtn.style.padding = (parseInt(noBtn.style.padding) - 1) + 'px 30px';
  }

  // Aumentar o botão YES
  let yesSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  if (yesSize < 200) {
    yesSize += 5;
    yesBtn.style.fontSize = yesSize + 'px';
    yesBtn.style.padding = (parseInt(yesBtn.style.padding) + 2) + 'px 30px';
  }
}

noBtn.addEventListener('click', clickNo);

// Função para clicar no YES
yesBtn.addEventListener('click', () => {
  // Limpar a tela
  container.innerHTML = `
    <img src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif" alt="Love GIF">
    <h1>Yay! You are my Valentine! 💖</h1>
  `;
  container.style.flexDirection = 'column';
});
