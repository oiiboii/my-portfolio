document.querySelector('.business-card').addEventListener('click', () => {
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
  
    cardFront.style.display = cardFront.style.display === 'none' ? 'block' : 'none';
    cardBack.style.display = cardBack.style.display === 'none' ? 'block' : 'none';
  });
  