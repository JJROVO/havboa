const question = document.querySelector('.question');
const img = document.querySelector('.img');
const yesButton = document.querySelector('.yes-btn');
const noButton = document.querySelector('.no-btn');

yesButton.addEventListener('click', () => {
    question.innerHTML = 'Thank you so much!';
    img.src="https://i.pinimg.com/736x/76/f8/f9/76f8f92db68125e153d0212ec47f58b4.jpg";
    img.alt="Thank you so much!";
});
noButton.addEventListener('mouseover', () => {
  const noBtnRect = noButton.getBoundingClientRect();
  const maxx = window.innerWidth - noBtnRect.width;
  const maxy = window.innerHeight - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxx);
  const randomY = Math.floor(Math.random() * maxy);
  noButton.style.position = 'absolute';
  noButton.style.left = randomX + "px";
  noButton.style.top = randomY + "px";
});