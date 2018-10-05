//------------------------- перевод "кнопочи" в центр
function PressButton(But) {
  document.getElementById(But).style.justifyContent = "center";
}
//------------------------- проверка заполненности формы
function CheckForm() {
  var flagName = true;
  var flagEmail = true;
  var flagPhone = true;
  var flagSex = false;

  var InputName = document.getElementById("name").value;
  var InputEmail = document.getElementById("email").value;
  var InputPhone = document.getElementById("phone").value;
  var InputSex = document.getElementsByName('sex');

  InputName.replace(/^\s+|\s+$/g, '');

  if (!InputName) {
    flagName = false;
  }

  InputEmail.replace(/^\s+|\s+$/g, '');

  if (!InputEmail) {
    flagEmail = false;
  }

  if (!isNaN(parseFloat(InputPhone)) && isFinite(InputPhone)) {

    if (InputPhone.length > 13) {
      flagPhone = false;
      alert("слишком длинный");
    } else {
      flagPhone = true;
    }
  }

  for (var i = 0; i < 2; i++) {
    if (InputSex[i].checked) {
      flagSex = true;
    }
  }

  if (!flagPhone || !flagSex || !flagEmail || !flagName) {
    var Button = document.getElementById("butt");
    Button.disabled = "true";
    document.body.style.cursor = "default";
    Button.style.backgroundColor = "gray";
    Button.className = "swing";
  }
}