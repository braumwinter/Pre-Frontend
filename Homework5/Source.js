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
function MyFlex() {
  //- очистка экрана
  var Mywidth = document.body.clientWidth;
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


  //-создание элементов
  var top1 = document.createElement('div');
  top1.innerHTML = "Рисунок поверхности носа кошки уникален, как отпечаток пальца у человека.";
  top1.style.backgroundColor = "red";
  top1.style.display = "flex";

  var top2 = document.createElement('div');
  top2.innerHTML = "Кошачье ухо поворачивается на 180 градусов. В каждом ухе у кошки 32 мускула, чтобы управлять ухом они используют двенадцать или более мускулов.";
  top2.style.backgroundColor = "orangered";
  top2.style.display = "flex";

  var content = document.createElement('div');
  content.innerHTML = "Ученые не знают точно, каким образом кошка мурлычет. Большинство ветеринаров считают, что кошка мурлычет вибрацией голосовых связок, расположенных глубоко в горле. Для этого мышцы гортани открывают и закрывают проход воздуха около 25 раз в секунду.";
  content.style.backgroundColor = "green";
  content.style.display = "flex";

  var footer1 = document.createElement('div');
  footer1.innerHTML = "Сэр Исаак Ньютон, открывший закон притяжения, также изобрел дверь для кошек.";
  footer1.style.backgroundColor = "goldenrod";
  footer1.style.display = "flex";


  var footer2 = document.createElement('div');
  footer2.innerHTML = "Общительные кошки следуют за Вами из комнаты в комнаты, чтобы контролировать ваши действия";
  footer2.style.backgroundColor = "blue";
  footer2.style.display = "flex";

  var footer3 = document.createElement('div');
  footer3.innerHTML = "Чем больше вы говорите с кошками, тем больше они говорят с Вами.";
  footer3.style.backgroundColor = "blueviolet";
  footer3.style.display = "flex";

  NewDiv.appendChild(top1);
  NewDiv.appendChild(top2);
  NewDiv.appendChild(content);
  NewDiv.appendChild(footer1);
  NewDiv.appendChild(footer2);
  NewDiv.appendChild(footer3);

  //- адаптация

  if (Mywidth < 600) {
    NewDiv.style.alignContent = "flex-start";

    content.style.height = "23%";
    content.style.width = "90%";
    content.style.borderStyle = "solid";
    content.style.borderColor = "white";
    content.style.borderBottom = "2%";
    content.style.borderTop = "2%";
    content.style.borderLeft = "0px";
    content.style.borderRight = "0px";
    content.style.overflowY = "auto";
    content.style.order = "-3";

    footer3.style.height = "23%";
    footer3.style.width = "90%";
    footer3.style.borderStyle = "solid";
    footer3.style.borderColor = "white";
    footer3.style.borderBottom = "2%";
    footer3.style.borderTop = "2%";
    footer3.style.borderLeft = "0px";
    footer3.style.borderRight = "0px";
    footer3.style.overflowY = "auto";
    footer3.style.order = "-2";

    top1.style.height = "46%";
    top1.style.width = "90%";
    top1.style.borderStyle = "solid";
    top1.style.borderColor = "white";
    top1.style.borderBottom = "2%";
    top1.style.borderTop = "2%";
    top1.style.borderLeft = "0px";
    top1.style.borderRight = "0px";
    top1.style.overflowY = "auto";
    top1.style.order = "-1";


    top2.style.height = "23%";
    top2.style.width = "90%";
    top2.style.borderStyle = "solid";
    top2.style.borderColor = "white";
    top2.style.borderBottom = "2%";
    top2.style.borderTop = "2%";
    top2.style.borderLeft = "0px";
    top2.style.borderRight = "0px";
    top2.style.overflowY = "auto";
    top2.style.order = "0";

    footer1.style.height = "23%";
    footer1.style.width = "90%";
    footer1.style.borderStyle = "solid";
    footer1.style.borderColor = "white";
    footer1.style.borderBottom = "2%";
    footer1.style.borderTop = "2%";
    footer1.style.borderLeft = "0px";
    footer1.style.borderRight = "0px";
    footer1.style.overflowY = "auto";
    footer1.style.order = "1";

    footer2.style.height = "23%";
    footer2.style.width = "90%";
    footer2.style.borderStyle = "solid";
    footer2.style.borderColor = "white";
    footer2.style.borderBottom = "2%";
    footer2.style.borderTop = "2%";
    footer2.style.borderLeft = "0px";
    footer2.style.borderRight = "0px";
    footer2.style.overflowY = "auto";
    footer2.style.order = "2";
  } else if (Mywidth > 601 && Mywidth < 900) {
    NewDiv.style.alignContent = "flex-start";
    top2.style.height = "10%";
    top2.style.width = "38%";
    top2.style.borderStyle = "solid";
    top2.style.borderColor = "white";
    top2.style.borderBottom = "2%";
    top2.style.borderTop = "2%";
    top2.style.borderLeft = "0px";
    top2.style.borderRight = "0px";
    top2.style.overflowY = "auto";
    top2.style.order = "-10";

    footer3.style.height = "10%";
    footer3.style.width = "58%";
    footer3.style.borderStyle = "solid";
    footer3.style.borderColor = "white";
    footer3.style.borderBottom = "2%";
    footer3.style.borderTop = "2%";
    footer3.style.borderLeft = "0px";
    footer3.style.borderRight = "0px";
    footer3.style.overflowY = "auto";
    footer3.style.order = "-9";

    top1.style.height = "50%";
    top1.style.width = "98%";
    top1.style.borderStyle = "solid";
    top1.style.borderColor = "white";
    top1.style.borderBottom = "2%";
    top1.style.borderTop = "2%";
    top1.style.borderLeft = "0px";
    top1.style.borderRight = "0px";
    top1.style.overflowY = "auto";
    top1.style.order = "-8";

    content.style.height = "38%";
    content.style.width = "48%";
    content.style.borderStyle = "solid";
    content.style.borderColor = "white";
    content.style.borderBottom = "2%";
    content.style.borderTop = "2%";
    content.style.borderLeft = "0px";
    content.style.borderRight = "0px";
    content.style.overflowY = "auto";
    content.style.order = "-7";


    footer2.style.height = "38%";
    footer2.style.width = "48%";
    footer2.style.borderStyle = "solid";
    footer2.style.borderColor = "white";
    footer2.style.borderBottom = "2%";
    footer2.style.borderTop = "2%";
    footer2.style.borderLeft = "0px";
    footer2.style.borderRight = "0px";
    footer2.style.overflowY = "auto";
    footer2.style.order = "-6";




    footer1.style.height = "50%";
    footer1.style.width = "98%";
    footer1.style.borderStyle = "solid";
    footer1.style.borderColor = "white";
    footer1.style.borderBottom = "2%";
    footer1.style.borderTop = "2%";
    footer1.style.borderLeft = "0px";
    footer1.style.borderRight = "0px";
    footer1.style.overflowY = "auto";
    footer1.style.order = "-5";


  } else {
    top1.style.height = "16%";
    top1.style.width = "33%";

    top2.style.height = "16%";
    top2.style.width = "63%";

    content.style.height = "50%";
    content.style.width = "98%";

    footer1.style.height = "18%";
    footer1.style.width = "31.3%";

    footer2.style.height = "18%";
    footer2.style.width = "31.3%";

    footer3.style.height = "18%";
    footer3.style.width = "31.3%";
  }
}