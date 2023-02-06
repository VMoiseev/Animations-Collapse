// TODO: write code here

console.log('app.js bundled');

const btn = document.querySelector('.collapse');
const collapse_container = document.querySelector('.foldingField');

btn.addEventListener('click', () => {
  collapse_container.classList.toggle('hidden');
  collapse_container.classList.toggle('collapse_container');
});
