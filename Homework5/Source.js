// ----------------------------------- анимация кнопок
// -------------------нажатие кнопки
function PressButton(But) {
  document.body.style.cursor = "pointer";
  if (But == 'button1') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button1_press.png')";
  }
  if (But == 'button2') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button2_press.png')";
  }
  if (But == 'button3') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button3_press.png')";
  }
}

// -------------------отпуск кнопки
function UpButton(But) {
  document.body.style.cursor = "pointer";
  if (But == 'button1') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button1_activ.png')";
  }
  if (But == 'button2') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button2_activ.png')";
  }
  if (But == 'button3') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button3_activ.png')";
  }
}

// -------------------активирование кнопки
function OverButton(But) {
  document.body.style.cursor = "pointer";
  if (But == 'button1') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button1_activ.png')";
  }
  if (But == 'button2') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button2_activ.png')";
  }
  if (But == 'button3') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button3_activ.png')";
  }
}

// -------------------спокойное состояние кнопки
function LeaveButton(But) {
  document.body.style.cursor = "default";
  if (But == 'button1') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button1.png')";
  }
  if (But == 'button2') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button2.png')";
  }
  if (But == 'button3') {
    document.getElementById(But).style.backgroundImage = "url('buttons/button3.png')";
  }
}

// ----------------------------------- переход по ссылке
function Link() {
  document.location.href = 'HomeWork5-2.html';
}

// ----------------------------------- смена стиля
var i = 0;

function ChangeStyle() {
  document.getElementById('buttons').style.width = "50%";
  document.getElementById('buttons').style.height = "50%";

  if (i == 0) {
    document.getElementById('conteiner').style.alignContent = "flex-start";
    document.getElementById('conteiner').style.justifyContent = "flex-start";
  }
  if (i == 1) {
    document.getElementById('conteiner').style.alignContent = "flex-end";
    document.getElementById('conteiner').style.justifyContent = "flex-start";
  }
  if (i == 2) {
    document.getElementById('conteiner').style.alignContent = "flex-end";
    document.getElementById('conteiner').style.justifyContent = "flex-end";
  }
  if (i == 3) {
    document.getElementById('conteiner').style.alignContent = "flex-start";
    document.getElementById('conteiner').style.justifyContent = "flex-end";
  }

  if (i == 4) {
    document.getElementById('buttons').style.width = "40%";
    document.getElementById('buttons').style.height = "70%";
    document.getElementById('conteiner').style.alignContent = "center";
    document.getElementById('conteiner').style.justifyContent = "center";
  }

  if (i < 4) {
    i++;
  } else {
    i = 0;
  }
}
// ----------------------------------- Flexbox
// создание элементов
function CreateFlex(obj, color) {
  obj.style.backgroundColor = color;
  obj.style.color = "white";
  obj.style.display = "flex";
  obj.style.text = "center";
  obj.style.padding = "1rem";
  obj.style.justifyContent = "center";
  obj.style.borderStyle = "solid";
  obj.style.borderSize = "1rem";
  obj.style.borderColor = "white";
  obj.style.overflowY = "auto";
}

// адаптация
function Adaptation(obj, Vheight, Vwidth, Vorder) {
  obj.style.height = Vheight;
  obj.style.width = Vwidth;
  obj.style.order = Vorder;
}

// возвращение к первоначальными размерам
function Dimensions(obj, Fheight, Fwidth) {
  obj.style.height = Fheight;
  obj.style.width = Fwidth;
}

// FLEX'ы
function MyFlex() {
  var Mywidth = document.body.clientWidth;
  //- очистка экрана

  document.body.style.cursor = "default";
  var NewDiv = document.getElementById('conteiner');
  NewDiv.innerHTML = '';
  NewDiv.style.backgroundColor = "white";

  //- задание свойств контейнера
  NewDiv.style.display = "flex";
  NewDiv.style.flexWrap = "wrap";
  NewDiv.style.justifyContent = "space-around";
  NewDiv.style.alignContent = "space-around";
  NewDiv.style.width = "100%";
  NewDiv.style.height = "100%";
  NewDiv.style.fontSize = "1.5rem";

  //-создание элементов
  var top1 = document.createElement('div');
  var top2 = document.createElement('div');
  var content = document.createElement('div');
  var footer1 = document.createElement('div');
  var footer2 = document.createElement('div');
  var footer3 = document.createElement('div');

  CreateFlex(top1, "red");
  CreateFlex(top2, "orangered");
  CreateFlex(content, "green");
  CreateFlex(footer1, "goldenrod");
  CreateFlex(footer2, "blue");
  CreateFlex(footer3, "blueviolet");

  top1.innerHTML = "Рисунок поверхности носа кошки уникален, как отпечаток пальца у человека.";
  top2.innerHTML = "Кошачье ухо поворачивается на 180 градусов. В каждом ухе у кошки 32 мускула, чтобы управлять ухом они используют двенадцать или более мускулов.";
  content.innerHTML = "Ученые не знают точно, каким образом кошка мурлычет. Большинство ветеринаров считают, что кошка мурлычет вибрацией голосовых связок, расположенных глубоко в горле. Для этого мышцы гортани открывают и закрывают проход воздуха около 25 раз в секунду.";
  footer1.innerHTML = "Сэр Исаак Ньютон, открывший закон притяжения, также изобрел дверь для кошек.";
  footer2.innerHTML = "Общительные кошки следуют за Вами из комнаты в комнаты, чтобы контролировать ваши действия";
  footer3.innerHTML = "Чем больше вы говорите с кошками, тем больше они говорят с Вами.";

  NewDiv.appendChild(top1);
  NewDiv.appendChild(top2);
  NewDiv.appendChild(content);
  NewDiv.appendChild(footer1);
  NewDiv.appendChild(footer2);
  NewDiv.appendChild(footer3);

  //- адаптация
  if (Mywidth < 600) {
    NewDiv.style.alignContent = "flex-start";

    Adaptation(content, "23%", "90%", "-3");
    Adaptation(footer3, "23%", "90%", "-2");
    Adaptation(top1, "46%", "90%", "-1");
    Adaptation(top2, "23%", "90%", "0");
    Adaptation(footer1, "23%", "90%", "1");
    Adaptation(footer2, "23%", "90%", "2");

  } else if (Mywidth > 601 && Mywidth < 900) {
    NewDiv.style.alignContent = "flex-start";

    Adaptation(top2, "10%", "38%", "-10");
    Adaptation(footer3, "10%", "58%", "-9");
    Adaptation(top1, "50%", "98%", "-8");
    Adaptation(content, "38%", "48%", "-7");
    Adaptation(footer2, "38%", "48%", "-8");
    Adaptation(footer1, "50%", "98%", "-7");

  } else {
    Dimensions(top1, "15%", "35%");
    Dimensions(top2, "15%", "65%");
    Dimensions(content, "60%", "100%");
    Dimensions(footer1, "18%", "33.3%");
    Dimensions(footer2, "18%", "33.3%");
    Dimensions(footer3, "18%", "33.3%");
  }
}
