
(() => {
  'use strict'
  const periodYields = new Map([
    [0.5, 0.04],
    [1, 0.05],
    [2, 0.06],
    [5, 0.1],
  ]);

  let input = document.getElementById('deposit');
  let period = document.getElementById('period');
  let result = document.getElementById('result');

  input.addEventListener('input', event => {
    displayReturn();
  });

  period.addEventListener('change', event => {
    displayReturn();
  });

  function displayReturn() {
    let sum = input.value;
    if (sum < 1) { return; }

    let selected = period.options[period.selectedIndex].value;
    let periodInYears = convertPeriod(selected);
    let expectedReturn = calculateReturn(sum, periodInYears);
    let roundedReturn = parseFloat(expectedReturn).toFixed(2);
    result.classList.add("alert");
    result.innerText = `Nach ${selected}(n) haben Sie ${roundedReturn} CHF bei uns angespart`;
  }

  function convertPeriod(option) {
    let periodKeys = Array.from(periodYields.keys());
    switch (option) {
      case '0.5 Jahre':
        return periodKeys[0];
      case '1 Jahre':
        return periodKeys[1];
      case '2 Jahre':
        return periodKeys[2];
      case '5 Jahre':
        return periodKeys[3];
    }
  }

  function calculateReturn(sum, periodInYears) {
    let yearlyYield = periodYields.get(periodInYears);
    return sum * periodInYears * yearlyYield;
  }


})()
