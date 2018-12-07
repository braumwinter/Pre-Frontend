// номер, имя пользователя, PIN, дата регистрации, тип вклада
function Account(number, name, pin, dateRegistration, typeDeposit) {
  this.number = number;
  this.name = name;
  this.pin = pin;
  this.dateRegistration = dateRegistration;
  this.typeDeposit = typeDeposit;

  this.setNumber = function (number) {
    this.number = number;
  }
  this.setName = function (name) {
    this.name = name;
  }
  this.setPin = function (pin) {
    this.pin = pin;
  }
  this.setDateRegistration = function (dateRegistration) {
    this.dateRegistration = dateRegistration;
  }
  this.setTypeDeposit = function (typeDeposit) {
    this.typeDeposit = typeDeposit;
  }

  this.getNumber = function () {
    return this.number;
  }
  this.getName = function () {
    return this.name;
  }
  this.getPin = function () {
    return this.pin;
  }
  this.getDateRegistration = function () {
    return this.dateRegistration;
  }
  this.getTypeDeposit = function () {
    return this.typeDeposit;
  }

  this.showNumber = function () {
    return 'номер ' + this.number + '\n';
  }
  this.showName = function () {
    return 'имя ' + this.name + '\n';
  }
  this.showPin = function () {
    return 'пин ' + this.pin + '\n';
  }
  this.showDateRegistration = function () {
    return 'дата регистрации ' + this.dateRegistration + '\n';
  }
  this.showTypeDeposit = function () {
    return 'тип вклада ' + this.typeDeposit + '\n';
  }

  this.ShowAccount = function () {
    this.showNumber();
    this.showName();
    this.showPin();
    this.showDateRegistration();
    this.showTypeDeposit();
  }
}

// баланс, тип пользователя (активный, заблокированный), история изменений
function RatedAccount(balance, typeAccount, historyChange) {
  Account.call(this);

  this.balance = balance;
  this.typeAccount = typeAccount;
  this.historyChange = historyChange;

  this.setBalance = function (balance) {
    this.balance = balance;
  }
  this.setTypeAccount = function (typeAccount) {
    this.typeAccount = typeAccount;
  }
  this.setHistoryChange = function (historyChange) {
    this.historyChange = historyChange;
  }

  this.getBalance = function () {
    return this.balance;
  }
  this.getTypeAccount = function () {
    return this.typeAccount;
  }
  this.getHistoryChange = function () {
    return this.historyChange;
  }

  this.showBalance = function () {
    return 'баланс ' + this.balance + '\n';
  }
  this.showTypeAccount = function () {
    return 'состояние счета ' + this.typeAccount + '\n';
  }
  this.showHistoryChange = function () {
    return 'история изменений ' + this.historyChange + '\n';
  }

  this.showRatedAccount = function () {
    this.showBalance;
    this.showTypeAccount;
    this.showHistoryChange;
  }

  let AddSumm = (summ) => {
    this.balance + summ
  };

  this.WithdrawSumm = function (summ) {
    if (+summ > +this.balance) {
      alert('недостаточно средств');
    } else {
      this.balance -= summ;
    }
  }
}

function SavingsAccount(balance, typeAccount, historyChange) {
  Account.call(this);

  this.balance = balance;
  this.typeAccount = typeAccount;
  this.historyChange = historyChange;

  this.setBalance = function (balance) {
    this.balance = balance;
  }
  this.setTypeAccount = function (typeAccount) {
    this.typeAccount = typeAccount;
  }
  this.setHistoryChange = function (historyChange) {
    this.historyChange = historyChange;
  }

  this.getBalance = function () {
    return this.balance;
  }
  this.getTypeAccount = function () {
    return this.typeAccount;
  }
  this.getHistoryChange = function () {
    return this.historyChange;
  }

  this.showBalance = function () {
    return 'баланс ' + this.balance + '\n';
  }
  this.showTypeAccount = function () {
    return 'состояние счета ' + this.typeAccount + '\n';
  }
  this.showHistoryChange = function () {
    return 'история изменений ' + this.historyChange + '\n';
  }

  let AddSumm = (summ) => {
    this.balance + summ;
  }
}

//========================================================================================================
// изначальные данные
let One = new SavingsAccount(+1000, 'aktiv', 'no');
One.number = '1';
One.name = 'admin';
One.pin = 'admin';
let day = [2011, 10, 1];
One.dateRegistration = new Date(...day);
One.typeDeposit = 'накопительный';

let Two = new RatedAccount(+0, 'disabl', 'no');
Two.number = '2';
Two.name = 'noadmin';
Two.pin = 'noadmin';
day = [2007, 05, 12];
Two.dateRegistration = new Date(...day);
Two.typeDeposit = 'расчетный';

let Three = new SavingsAccount(+9000, 'aktiv', 'no');
Three.number = '3';
Three.name = 'Tom';
Three.pin = 'Atom';
day = [2014, 02, 24];
Three.dateRegistration = new Date(...day);
Three.typeDeposit = 'накопительный';

let Four = new RatedAccount(+550, 'aktiv', 'no');
Four.number = '4';
Four.name = '###';
Four.pin = '###';
day = [2000, 01, 01];
Four.dateRegistration = new Date(...day);
Four.typeDeposit = 'расчетный';

let Five = new SavingsAccount(+4800, 'aktiv', 'no');
Five.number = '5';
Five.name = '###';
Five.pin = '###';
day = [2000, 01, 01];
Five.dateRegistration = new Date(...day);
Five.typeDeposit = 'накопительный';

let Arr = [One, Two, Three, Four, Five];
localStorage.setItem('account', -2);
let isRatedAccount = false;
let isSavingsAccount = false;

//=========================================================================================================
// проверка аккаунта
function CheckAccount() {
  let eName = document.getElementById("enterName").value;
  let ePassword = document.getElementById("enterPassword").value;

  isRatedAccount = localStorage.getItem('isRatedAccount');
  isSavingsAccount = localStorage.getItem('isSavingsAccount');
  if (isRatedAccount) {
    Arr[3].setName(localStorage.getItem('rName'));
    Arr[3].setPin(localStorage.getItem('rPin'));
    Arr[3].setDateRegistration(localStorage.getItem('rDate'));
    Arr[3].setBalance(localStorage.getItem('rSum'));
    Arr[3].setDateRegistration(localStorage.getItem('rDate'));
  }
  if (isSavingsAccount) {
    Arr[4].setName(localStorage.getItem('rName2'));
    Arr[4].setPin(localStorage.getItem('rPin2'));
    Arr[4].setDateRegistration(localStorage.getItem('rDate2'));
    Arr[4].setBalance(localStorage.getItem('rSum2'));
    Arr[4].setDateRegistration(localStorage.getItem('rDate'));
  }

  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i].getName() == eName) {
      if (Arr[i].getPin() == ePassword) {
        localStorage.setItem('account', i);
        MemoryAccount();
        AccountWindow();
      } else {
        localStorage.setItem('account', -1);
        alert('неверный пароль');
      }
    }
  }

  if (localStorage.getItem('account') == -2) {
    alert('неверное имя');
  }
}

// создание аккаунта
function CreateAccount() {
  let rName = document.getElementById("registrationName").value;
  let rPin = document.getElementById("registrationPassword").value;
  let rPin2 = document.getElementById("registrationPassword2").value;
  let rType = document.getElementById("SelectAccount").value;
  let rSumm = document.getElementById("registrationSumm").value;

  localStorage.setItem('isRatedAccount', false);
  localStorage.setItem('isSavingsAccount', false);

  if (rPin != rPin2) {
    alert('пароли не совпадают');
  } else {

    if (rType == 'расчетный') {
      localStorage.setItem('rName', rName);
      localStorage.setItem('rPin', rPin);
      localStorage.setItem('rType', rType);
      localStorage.setItem('rSum', rSumm);
      localStorage.setItem('rDate', new Date());

      localStorage.setItem('isRatedAccount', true);
    }

    if (rType == 'накопительный') {
      localStorage.setItem('rName2', rName);
      localStorage.setItem('rPin2', rPin);
      localStorage.setItem('rType2', rType);
      localStorage.setItem('rSum2', rSumm);
      localStorage.setItem('rDate', new Date());

      localStorage.setItem('isSavingsAccount', true);
    }

    alert('спасибо за регистрацию');
    MainWindow();
  }
}

// примеры пользователей
function Help() {
  alert(Arr[0].showName() + Arr[0].showPin() + Arr[1].showName() + Arr[1].showPin() + Arr[2].showName() + Arr[2].showPin());
}

//===========================================================================================================

// сохраненные данные
function MemoryAccount() {
  localStorage.setItem('AccountNumber', Arr[localStorage.getItem('account')].getNumber());
  localStorage.setItem('AccountName', Arr[localStorage.getItem('account')].getName());
  localStorage.setItem('AccountPin', Arr[localStorage.getItem('account')].getPin());
  localStorage.setItem('AccountDate', Arr[localStorage.getItem('account')].getDateRegistration());
  localStorage.setItem('AccountTypeDeposit', Arr[localStorage.getItem('account')].getTypeDeposit());
  localStorage.setItem('AccountBalance', Arr[localStorage.getItem('account')].getBalance());
  localStorage.setItem('AccountType', Arr[localStorage.getItem('account')].getTypeAccount());
  localStorage.setItem('AccountHistory', Arr[localStorage.getItem('account')].getHistoryChange());
}

localStorage.setItem('isFirst', true);

// обновить страницу
function UpdateDate() {
  document.getElementById("AccountNumber").innerHTML = localStorage.getItem('AccountNumber');
  document.getElementById("AccountName").innerHTML = localStorage.getItem('AccountName');
  document.getElementById("AccountDate").innerHTML = localStorage.getItem('AccountDate');
  document.getElementById("AccountTypeDeposit").innerHTML = localStorage.getItem('AccountTypeDeposit');
  document.getElementById("AccountBalance").innerHTML = +localStorage.getItem('AccountBalance');
  document.getElementById("AccountType").innerHTML = localStorage.getItem('AccountType');

  if (localStorage.getItem('isFirst') == true) {
    AddTable('пополнение');
    localStorage.setItem('isFirst', false);
  }
}

// положить на счет
function AddBalance() {
  let result = prompt("какую сумму вы желаете положить?", 0);

  if (result === "") {
    alert('пустое поле');
  } else if (result) {
    if (result.replace(/\d/g, '').length) {
      alert('вы ввели не только цифры');
    } else {
      result = +result + +localStorage.getItem('AccountBalance');
      localStorage.setItem('AccountBalance', result);
      UpdateDate();
      AddTable('пополнение');
    }
  }
}

// снять со счета
function WithdrawBalance() {
  if (localStorage.getItem('AccountBalance') == 0) {
    alert("у Вас нет средств на счету");
  } else {
    let result = prompt("какую сумму вы желаете снять?", 0);

    if (result === "") {
      alert('пустое поле');
    } else if (result) {
      if (result.replace(/\d/g, '').length) {
        alert('вы ввели не только цифры');
      } else {
        if (+result <= +localStorage.getItem('AccountBalance')) {
          result = +localStorage.getItem('AccountBalance') - +result;
          localStorage.setItem('AccountBalance', result);
          UpdateDate();
          AddTable('снятие');
        } else {
          alert("недостаточно средств");
        }
      }
    }
  }
}

// добавить изменение в таблицу
function AddTable(string) {
  let myTable = document.getElementById('TableChange');

  let rws = myTable.rows;
  let lst = rws.length;

  let newRow = myTable.insertRow(-1);

  let newCell0 = newRow.insertCell(0);
  let newCell1 = newRow.insertCell(1);
  let newCell2 = newRow.insertCell(2);
  newCell0.innerHTML = string;
  newCell1.innerHTML = localStorage.getItem('AccountBalance');

  if (lst == 0) {
    newCell2.innerHTML = localStorage.getItem('AccountDate');
  } else {
    newCell2.innerHTML = new Date();
  }
}

// редактировать имя
function EditName() {
  let result = prompt("введите новое имя", localStorage.getItem('AccountName'));

  if (result === "") {
    alert('вы ничего не ввели');
  } else if (result) {
    if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(result)) {
      localStorage.setItem('AccountName', result);
      UpdateDate();
    } else {
      alert('имя не может содержать числа');
    }
  }
}

// редактировать Pin
function EditPin() {
  let result = prompt("введите новый пин", 'new pin');

  if (result === "") {
    alert('вы ничего не ввели');
  } else if (result) {

    let result2 = prompt("повторите новый пин", 'repeat pin');
    if (result2 === "") {
      alert('вы ничего не ввели');
    } else if (result == result2) {
      localStorage.setItem('AccountPin', result);
      UpdateDate();
    } else {
      alert('неверный пин');
    }
  }
}

// удалить аккаунт
function DeleteAccount() {
  let result = confirm('вы действительно хотите удалить аккаунт?');

  if (result) {
    localStorage.setItem('AccountNumber', '');
    localStorage.setItem('AccountName', '');
    localStorage.setItem('AccountPin', '');
    localStorage.setItem('AccountDate', '');
    localStorage.setItem('AccountTypeDeposit', '');
    localStorage.setItem('AccountBalance', '');
    localStorage.setItem('AccountType', '');
    localStorage.setItem('AccountHistory', '');

    let table = document.getElementById("TableChange");
    let rowCount = table.rows.length;
    for (let i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    UpdateDate();
  }
}

// выход
function Exit() {
  Arr[localStorage.getItem('account')].setNumber(localStorage.getItem('AccountNumber'));
  Arr[localStorage.getItem('account')].setName(localStorage.getItem('AccountName'));
  Arr[localStorage.getItem('account')].setPin(localStorage.getItem('AccountPin'));
  Arr[localStorage.getItem('account')].setDateRegistration(localStorage.getItem('AccountDate'));
  Arr[localStorage.getItem('account')].setTypeDeposit(localStorage.getItem('AccountTypeDeposit'));
  Arr[localStorage.getItem('account')].setBalance(localStorage.getItem('AccountBalance'));
  Arr[localStorage.getItem('account')].setTypeAccount(localStorage.getItem('AccountType'));
  Arr[localStorage.getItem('account')].setHistoryChange(localStorage.getItem('AccountHistory'));

  MainWindow();
}

//====================================================================================================================
//====================================================================================================================

// главное меню
function MainWindow() {
  // изменение заголовка и очищение страницы
  document.title = 'Банк';
  let Headline = document.getElementById('Headline');
  Headline.className = 'navbar text-white justify-content-center';
  document.getElementById('MainMain').className = 'row mt-5 pt-5 myContainer align-items-center';
  let MainContainer = document.getElementById('MainContainer');
  MainContainer.className = 'col-4 offset-4';
  Headline.innerHTML = '';
  MainContainer.innerHTML = '';

  // навбар
  let Caption = document.createElement('h1');
  Caption.innerHTML = "Добро пожаловать в наш банк";
  Headline.appendChild(Caption);

  // кнопка Вход
  let ButtonEnter = document.createElement('button');
  ButtonEnter.className = 'btn btn-success btn-lg btn-block';
  ButtonEnter.innerHTML = "Вход";
  MainContainer.appendChild(ButtonEnter);
  ButtonEnter.onclick = function () {
    EnterWindow();
  }

  // кнопка Регистрации
  let ButtonRegistration = document.createElement('button');
  ButtonRegistration.className = 'btn btn-primary btn-lg btn-block';
  ButtonRegistration.innerHTML = "Регистрация";
  MainContainer.appendChild(ButtonRegistration);
  ButtonRegistration.onclick = function () {
    RegistrationWindow();
  }
}

// страница входа
function EnterWindow() {
  // изменение заголовка и очищение страницы
  document.title = 'Вход';
  let Headline = document.getElementById('Headline');
  Headline.className = 'navbar text-white justify-content-center';
  document.getElementById('MainMain').className = 'row mt-5 pt-5 myContainer align-items-center';
  let MainContainer = document.getElementById('MainContainer');
  MainContainer.className = 'col-4 offset-4';
  Headline.innerHTML = '';
  MainContainer.innerHTML = '';

  // навбар
  let Caption = document.createElement('h1');
  Caption.innerHTML = "Мы рады Вас видеть снова :)";
  Headline.appendChild(Caption);

  // создание формы для входа
  let FormEnter = document.createElement('form');
  FormEnter.className = 'p-4 myForm';
  MainContainer.appendChild(FormEnter);

  // имя
  let Div = document.createElement('div');
  Div.className = 'form-group';
  FormEnter.appendChild(Div);

  let Label = document.createElement('label');
  Label.innerHTML = 'Имя';
  Div.appendChild(Label);

  let Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'enterName';
  Input.placeholder = 'Имя';
  Input.type = 'text';
  Input.pattern = '[A-Za-zА-Яа-яЁё]{3,15}';
  Input.required = 'true';
  Div.appendChild(Input);

  // пароль
  Div = document.createElement('div');
  Div.className = 'form-group';
  FormEnter.appendChild(Div);

  Label = document.createElement('label');
  Label.innerHTML = 'Пароль';
  Div.appendChild(Label);

  Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'enterPassword';
  Input.placeholder = 'Пароль';
  Input.type = 'password';
  Input.required = 'true';
  Div.appendChild(Input);

  // кнопка Вход
  Div = document.createElement('div');
  Div.className = 'form-group row';
  FormEnter.appendChild(Div);

  let DivButton = document.createElement('div');
  DivButton.className = 'col-6';
  Div.appendChild(DivButton);

  let Button = document.createElement('button');
  Button.type = 'button';
  Button.className = 'btn btn-primary';
  Button.innerHTML = "Войти";
  Button.onclick = function () {
    CheckAccount();
  }
  DivButton.appendChild(Button);

  // кнопка примеры
  DivButton = document.createElement('div');
  DivButton.className = 'col-6 justify-content-end';
  Div.appendChild(DivButton);

  Button = document.createElement('button');
  Button.type = 'button';
  Button.className = 'btn btn-secondary';
  Button.innerHTML = "Примеры";
  Button.onclick = function () {
    Help();
  }
  DivButton.appendChild(Button);
}

// страница регистрации
function RegistrationWindow() {
  // изменение заголовка и очищение страницы
  document.title = 'Регистрация';
  let Headline = document.getElementById('Headline');
  document.getElementById('MainMain').className = 'row mt-3 align-items-center';
  let MainContainer = document.getElementById('MainContainer');
  MainContainer.className = 'col-6 offset-3';
  Headline.innerHTML = '';
  MainContainer.innerHTML = '';

  // навбар
  let Caption = document.createElement('h1');
  Caption.innerHTML = "Регистрация нового пользователя";
  Headline.appendChild(Caption);

  // создание формы для Регистрации
  let FormRegistration = document.createElement('form');
  FormRegistration.className = 'p-4 myForm';
  MainContainer.appendChild(FormRegistration);

  // имя
  let Div = document.createElement('div');
  Div.className = 'form-group';
  FormRegistration.appendChild(Div);

  let Label = document.createElement('label');
  Label.innerHTML = 'Имя';
  Div.appendChild(Label);

  let Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'registrationName';
  Input.placeholder = 'Имя';
  Input.type = 'text';
  Input.pattern = '[A-Za-zА-Яа-яЁё]{3,15}';
  Input.required = 'true';
  Div.appendChild(Input);

  // пароль
  Div = document.createElement('div');
  Div.className = 'form-group';
  FormRegistration.appendChild(Div);

  Label = document.createElement('label');
  Label.innerHTML = 'Пароль';
  Div.appendChild(Label);

  Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'registrationPassword';
  Input.placeholder = 'Пароль';
  Input.type = 'password';
  Input.required = 'true';
  Div.appendChild(Input);

  // повторить пароль
  Div = document.createElement('div');
  Div.className = 'form-group';
  FormRegistration.appendChild(Div);

  Label = document.createElement('label');
  Label.innerHTML = 'Пароль';
  Div.appendChild(Label);

  Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'registrationPassword2';
  Input.placeholder = 'Пароль';
  Input.type = 'password';
  Input.required = 'true';
  Div.appendChild(Input);

  // тип вклада
  Div = document.createElement('div');
  Div.className = 'form-group';
  FormRegistration.appendChild(Div);

  Label = document.createElement('label');
  Label.innerHTML = 'Тип вклада';
  Div.appendChild(Label);

  let Select = document.createElement('select');
  Select.className = 'form-control';
  Select.id = 'SelectAccount';
  Div.appendChild(Select);

  let Option = document.createElement('option');
  Option.innerHTML = 'расчетный';
  Select.appendChild(Option);

  Option = document.createElement('option');
  Option.innerHTML = 'расчетный';
  Select.appendChild(Option);

  // сумма 
  Div = document.createElement('div');
  Div.className = 'form-group';
  FormRegistration.appendChild(Div);

  Label = document.createElement('label');
  Label.innerHTML = 'Сумма';
  Div.appendChild(Label);

  Input = document.createElement('input');
  Input.className = 'form-control';
  Input.id = 'registrationSumm';
  Input.placeholder = 'Сумма';
  Input.type = 'number';
  Input.required = 'true';
  Div.appendChild(Input);

  // кнопка Регистрация
  Div = document.createElement('div');
  Div.className = 'form-group row justify-content-center';
  FormRegistration.appendChild(Div);

  let DivButton = document.createElement('div');
  Div.appendChild(DivButton);

  let Button = document.createElement('button');
  Button.type = 'button';
  Button.className = 'btn btn-primary';
  Button.innerHTML = "Регистрация";
  DivButton.appendChild(Button);
  Button.onclick = function () {
    CreateAccount();
  }
}

// окно информации об аккаунте
function AccountWindow() {
  // изменение заголовка и очищение страницы
  document.title = 'Личный кабинет';
  let Headline = document.getElementById('Headline');
  Headline.className = 'navbar text-white justify-content-between';
  document.getElementById('MainMain').className = 'row mt-5 myContainer align-items-center';
  let MainContainer = document.getElementById('MainContainer');
  MainContainer.className = 'col-6 offset-3';
  Headline.innerHTML = '';
  MainContainer.innerHTML = '';

  // навбар
  let Caption = document.createElement('h1');
  Caption.innerHTML = "Личный кабинет";
  Headline.appendChild(Caption);

  // кнопка пополнить счет
  let FormInfo = document.createElement('form');
  FormInfo.className = 'form-inline btn-group-vertical';
  Headline.appendChild(FormInfo);

  let ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'AddBallanceButton';
  ButtonInfo.className = 'btn btn-outline-warning';
  ButtonInfo.innerHTML = 'пополнить счет';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    AddBalance();
  }

  // кнопка снять деньги
  ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'WithdrawBalanceButton';
  ButtonInfo.className = 'btn btn-outline-warning';
  ButtonInfo.innerHTML = 'снять деньги';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    WithdrawBalance();
  }

  // кнопка редактировать Имя
  FormInfo = document.createElement('form');
  FormInfo.className = 'form-inline btn-group-vertical';
  Headline.appendChild(FormInfo);

  ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'EditNameButton';
  ButtonInfo.className = 'btn btn-outline-warning';
  ButtonInfo.innerHTML = 'редактировать Имя';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    EditName();
  }

  // кнопка редактировать Pin
  ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'EditPinButton';
  ButtonInfo.className = 'btn btn-outline-warning';
  ButtonInfo.innerHTML = 'редактировать Pin';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    EditPin()();
  }

  // кнопка удалить аккаунт
  FormInfo = document.createElement('form');
  FormInfo.className = 'form-inline';
  Headline.appendChild(FormInfo);

  ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'DeleteAccountButton';
  ButtonInfo.className = 'btn btn-outline-light my-2 my-sm-0';
  ButtonInfo.innerHTML = 'удалить';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    DeleteAccount();
  }

  // кнопка выход
  FormInfo = document.createElement('form');
  FormInfo.className = 'form-inline';
  Headline.appendChild(FormInfo);

  ButtonInfo = document.createElement('button');
  ButtonInfo.type = 'button';
  ButtonInfo.id = 'ButtonAccountDelete';
  ButtonInfo.className = 'btn btn-outline-secondary my-2 my-sm-0';
  ButtonInfo.innerHTML = 'Выход';
  FormInfo.appendChild(ButtonInfo);
  ButtonInfo.onclick = function () {
    Exit();
  }

  // таблица с информацией
  let DivTables = document.createElement('div');
  DivTables.className = 'row  mt-5 pt-5 myContainer align-items-center';
  MainContainer.appendChild(DivTables);

  let InfoTable = document.createElement('table');
  InfoTable.className = 'table table-reflow table-hover myForm';
  InfoTable.id = 'InfoAccountTable';
  DivTables.appendChild(InfoTable);

  // тело таблицы
  let BodyTable = document.createElement('tbody');
  InfoTable.appendChild(BodyTable);

  // номер
  let TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  let TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Номер";
  TableTr.appendChild(TableTh);

  let TableTd = document.createElement('td');
  TableTd.id = 'AccountNumber';
  TableTr.appendChild(TableTd);

  // имя
  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Имя";
  TableTr.appendChild(TableTh);

  TableTd = document.createElement('td');
  TableTd.id = 'AccountName';
  TableTr.appendChild(TableTd);

  // дата регистрации
  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Дата регистрации";
  TableTr.appendChild(TableTh);

  TableTd = document.createElement('td');
  TableTd.id = 'AccountDate';
  TableTr.appendChild(TableTd);

  // тип вклада
  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Тип вклада";
  TableTr.appendChild(TableTh);

  TableTd = document.createElement('td');
  TableTd.id = 'AccountTypeDeposit';
  TableTr.appendChild(TableTd);

  // баланс
  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Баланс";
  TableTr.appendChild(TableTh);

  TableTd = document.createElement('td');
  TableTd.id = 'AccountBalance';
  TableTr.appendChild(TableTd);

  // тип пользователя
  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'row';
  TableTh.innerHTML = "Тип пользователя";
  TableTr.appendChild(TableTh);

  TableTd = document.createElement('td');
  TableTd.id = 'AccountType';
  TableTr.appendChild(TableTd);

  // таблица вкладов
  DivTables = document.createElement('div');
  DivTables.className = 'row mt-5 pt-5 myContainer align-items-center';
  MainContainer.appendChild(DivTables);

  InfoTable = document.createElement('table');
  InfoTable.className = 'table table-reflow table-hover myForm';
  InfoTable.id = 'TableChange';
  DivTables.appendChild(InfoTable);

  // тело таблицы
  BodyTable = document.createElement('tbody');
  InfoTable.appendChild(BodyTable);

  TableTr = document.createElement('tr');
  BodyTable.appendChild(TableTr);

  TableTh = document.createElement('th');
  TableTh.scope = 'col';
  TableTh.innerHTML = "#";
  TableTr.appendChild(TableTh);

  TableTh = document.createElement('th');
  TableTh.scope = 'col';
  TableTh.innerHTML = "История изменений";
  TableTr.appendChild(TableTh);

  TableTh = document.createElement('th');
  TableTh.scope = 'col';
  TableTh.innerHTML = "Дата";
  TableTr.appendChild(TableTh);

  // заполнить таблицы первоначальными данными
  UpdateDate();
  AddTable('пополнить');
}