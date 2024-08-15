const benefitsList = document.querySelector('.benefits ul');
const benefitsItems = benefitsList.querySelectorAll('li');

benefitsItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    const content = item.querySelector('p');
    content.classList.toggle('show');
  });
});