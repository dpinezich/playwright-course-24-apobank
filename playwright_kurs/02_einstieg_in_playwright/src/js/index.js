(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation');

  // Prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
    }, false);
  })

  const registerBtn = document.getElementById('register');
  registerBtn.addEventListener('click', () => {
    Array.from(forms).forEach(form => {
      form.classList.add('was-validated')
    })
    printToConsole();
  })

  function printToConsole() {
    console.log("Bewerbung gesendet");
    console.warn("Verbindung ist langsam");
    console.error("Etwas ging schief");

    throw new Error("Fehler");
  }

  const inputs = document.getElementsByClassName('form-control');
  const clearBtn = document.getElementById('clear');
  clearBtn.addEventListener('click', () => {
    if (confirm('Alle Inhalte löschen? Sicher?')) {
      Array.from(inputs).forEach(input => input.value = '');
    }

  });

  const saveBtn = document.getElementById('save');
  saveBtn.addEventListener('click', () => {
    Array.from(inputs).forEach(input => {
      localStorage.setItem(input.getAttribute('id'), input.value);
    });
  });

  document.addEventListener("DOMContentLoaded", function () {

    Array.from(inputs).forEach(input => {
      let storedValue = localStorage.getItem(input.getAttribute('id'));
      if (storedValue) {
        input.value = storedValue;
      }
    });

  });
})()



$(document).ready(function () {

  $('#success-story').click(function () {
    if ($("#textarea").attr("disabled")) {
      $('#textarea').removeAttr("disabled");
    } else {
      $('#textarea').prop('disabled', true);
      $('#textarea').val("");
    }
  });
});