let btn = document.getElementById('btn');
let contentTop = document.getElementById('content-top');
let main = document.getElementById('main');

btn.addEventListener('click', (e) => {
  btn.style.display = 'none'
  main.style.display = 'block'
  main.style.transition = '2s'
  contentTop.style.marginTop = '-37%'
  contentTop.style.transition = '5s'
});
