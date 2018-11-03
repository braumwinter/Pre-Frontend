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

  this.AddSumm = function (summ) {
    this.balance += summ;
  }
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

  this.AddSumm = function (summ) {
    this.balance += summ;
  }
}

//========================================================================================================

var One = new SavingsAccount(+1000, 'aktiv', 'no');
One.number = '1';
One.name = 'admin';
One.pin = 'admin';
One.dateRegistration = new Date(2011, 10, 1);
One.typeDeposit = 'накопительный';
var Two = new RatedAccount(+0, 'disabl', 'no');
Two.number = '2';
Two.name = 'noadmin';
Two.pin = 'noadmin';
Two.dateRegistration = new Date(2007, 05, 12);
Two.typeDeposit = 'расчетный';
var Three = new SavingsAccount(+9000, 'aktiv', 'no');
Three.number = '3';
Three.name = 'Tom';
Three.pin = 'Atom';
Three.dateRegistration = new Date(2014, 02, 24);
Three.typeDeposit = 'накопительный';
var Four = new RatedAccount(+550, 'aktiv', 'no');
Four.number = '4';
Four.name = '###';
Four.pin = '###';
Four.dateRegistration = new Date(2000, 01, 01);
Four.typeDeposit = 'расчетный';
var Five = new SavingsAccount(+4800, 'aktiv', 'no');
Five.number = '5';
Five.name = '###';
Five.pin = '###';
Five.dateRegistration = new Date(2000, 01, 01);
Five.typeDeposit = 'накопительный';

var Arr = [One, Two, Three, Four, Five];
localStorage.setItem('account', -2);
var isRatedAccount = false;
var isSavingsAccount = false;

//=========================================================================================================

function CheckAccount() {
  var eName = document.getElementById("enterName").value;
  var ePassword = document.getElementById("enterPassword").value;

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

  for (var i = 0; i < Arr.length; i++) {
    if (Arr[i].getName() == eName) {
      if (Arr[i].getPin() == ePassword) {
        localStorage.setItem('account', i);
        MemoryAccount();
        document.location.href = "account.html";
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

function CreateAccount() {

  var rName = document.getElementById("registrationName").value;
  var rPin = document.getElementById("registrationPassword").value;
  var rPin2 = document.getElementById("registrationPassword2").value;
  var rType = document.getElementById("SelectAccount").value;
  var rSumm = document.getElementById("registrationSumm").value;

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
    document.location.href = "index.html";
  }
}

function Help() {
  alert(Arr[0].showName() + Arr[0].showPin() + Arr[1].showName() + Arr[1].showPin() + Arr[2].showName() + Arr[2].showPin());
}

//===========================================================================================================

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

function AddBalance() {
  var result = prompt("какую сумму вы желаете положить?", 0);

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

function WithdrawBalance() {
  if (localStorage.getItem('AccountBalance') == 0) {
    alert("у Вас нет средств на счету");
  } else {
    var result = prompt("какую сумму вы желаете снять?", 0);

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

function AddTable(string) {
  var myTable = document.getElementById('TableChange');

  var rws = myTable.rows;
  var lst = rws.length;

  var newRow = myTable.insertRow(-1);

  var newCell0 = newRow.insertCell(0);
  var newCell1 = newRow.insertCell(1);
  var newCell2 = newRow.insertCell(2);
  newCell0.innerHTML = string;
  newCell1.innerHTML = localStorage.getItem('AccountBalance');

  if (lst == 0) {
    newCell2.innerHTML = localStorage.getItem('AccountDate');
  } else {
    newCell2.innerHTML = new Date();
  }
}

function EditName() {
  var result = prompt("введите новое имя", localStorage.getItem('AccountName'));

  if (result === "") {
    alert('вы ничего не ввели');
  } else if (result) {
    if (/^[a-zA-z]{1}[a-zA-Z1-9]{3,20}$/.test(result)) {
      alert('имя не может содержать числа');
    } else {
      localStorage.setItem('AccountName', result);
      UpdateDate();
    }
  }
}

function EditPin() {
  var result = prompt("введите новый пин", 'new pin');

  if (result === "") {
    alert('вы ничего не ввели');
  } else if (result) {

    var result2 = prompt("повторите новый пин", 'repeat pin');
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

function DeleteAccount() {
  var result = confirm('вы действительно хотите удалить аккаунт?');

  if (result) {
    localStorage.setItem('AccountNumber', '');
    localStorage.setItem('AccountName', '');
    localStorage.setItem('AccountPin', '');
    localStorage.setItem('AccountDate', '');
    localStorage.setItem('AccountTypeDeposit', '');
    localStorage.setItem('AccountBalance', '');
    localStorage.setItem('AccountType', '');
    localStorage.setItem('AccountHistory', '');

    var table = document.getElementById("TableChange");
    var rowCount = table.rows.length;
    for (var i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
    }
    UpdateDate();
  }
}

function Exit() {
  Arr[localStorage.getItem('account')].setNumber() = localStorage.getItem('AccountNumber')
  Arr[localStorage.getItem('account')].setName() = localStorage.getItem('AccountName')
  Arr[localStorage.getItem('account')].setPin() = localStorage.getItem('AccountPin')
  Arr[localStorage.getItem('account')].setDateRegistration() = localStorage.getItem('AccountDate')
  Arr[localStorage.getItem('account')].setTypeDeposit() = localStorage.getItem('AccountTypeDeposit')
  Arr[localStorage.getItem('account')].setBalance() = localStorage.getItem('AccountBalance')
  Arr[localStorage.getItem('account')].setTypeAccount() = localStorage.getItem('AccountType')
  Arr[localStorage.getItem('account')].setHistoryChange() = localStorage.getItem('AccountHistory')

  document.location.href = "index.html";
}

function Info() {
  UpdateDate();
  AddTable('пополнить');
  var button = document.getElementById('AddBallanceButton');
  button.style.visibility = "visible";
  button = document.getElementById('WithdrawBalanceButton');
  button.style.visibility = "visible";
  button = document.getElementById('GroupEditButton');
  button.style.visibility = "visible";
  button = document.getElementById('DeleteAccountButton');
  button.style.visibility = "visible";
}