const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const result = document.querySelector('.result');
  const msg = document.querySelector('.msg');

  //   ---------------------------------getting values from input-----------------------------
  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);

  //   ---------------------------------checking BMI------------------------------------------
  if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `${weight} enter a valid weight please.`;
  } else if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `${height} enter a valid height please.`;
  } else {
    // -------------------- calculating BMI------------------------------------------------
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span> your BMI is ${bmi}.</span>`;

    //   now showing the msg
    if (bmi < 18.5) {
      msg.innerHTML = `According to WHO standards you are under weight. Since you have ${bmi} BMI.`;
    } else if (bmi > 18.5 && bmi < 24.5) {
      msg.innerHTML = `According to WHO standards you have normal weight. Since you have ${bmi} BMI.`;
    } else if (bmi > 24.5) {
      msg.innerHTML = `According to WHO standards you are over weight. Since you have ${bmi} BMI.`;
    }
  }
});
