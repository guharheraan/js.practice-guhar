const btns = document.querySelectorAll('.btn');
const body = document.querySelector('body');

// console.log(btns);
btns.forEach(function (btn) {
  //   console.log(btn);
  btn.addEventListener('click', function (a) {
    console.log(a);
    console.log(a.target);

    if (a.target.id === 'grey') {
      body.style.backgroundColor = '#808080';
    }
    if (a.target.id === 'green') {
      body.style.backgroundColor = '#adff2f';
    }
    if (a.target.id === 'blue') {
      body.style.backgroundColor = '#6c6cf8';
    }
    if (a.target.id === 'yellow') {
      body.style.backgroundColor = '#ffff00';
    }
    if (a.target.id === 'grandient') {
      body.style.backgroundColor = a.target.id;
    }
  });
});
