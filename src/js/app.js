/* eslint-disable no-console */
// TODO: write code here

console.log('app.js bundled');

const btn = document.querySelector('.collapse');
const collapseContainer = document.querySelector('.foldingField');

btn.addEventListener('click', () => {
  collapseContainer.classList.toggle('hidden');
  collapseContainer.classList.toggle('collapse_container');
});
