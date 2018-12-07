// зашел ли админ
localStorage.setItem('isAdmin', false);
// был ли выполнен вход в систему
localStorage.setItem('isEnter', false);
// имя вошедшего
localStorage.setItem('name', 'name');
// Email
localStorage.setItem('isEmail', false);

//=======================или кнопки, или приветствие
function ChangeHeader() {
	// кнопки, если вход не выполнен
	if (localStorage.getItem('isEnter') == 'false') {
		// очистить Див
		let Div = document.getElementById('header_enter_buttons');
		Div.innerHTML = '';

		// создать див для кнопоки Входа
		let DivButHeadEnter = document.createElement('div');
		Div.appendChild(DivButHeadEnter);

		// кнопка Вход
		let ButHeadEnter = document.createElement('button');
		ButHeadEnter.type = 'button';
		ButHeadEnter.id = 'enter_button';
		ButHeadEnter.className = 'btn my-2 mx-2 px-sm-3 px-xs-2';
		ButHeadEnter.onclick = function () {
			ModalForm('ВХОД');
		}
		ButHeadEnter.innerHTML = 'вход';
		DivButHeadEnter.appendChild(ButHeadEnter);

		// див для кнопки Регистрации
		let DivButHeadRegistr = document.createElement('div');
		Div.appendChild(DivButHeadRegistr);

		// кнопка Регистрации
		let ButHeadRegistr = document.createElement('button');
		ButHeadRegistr.type = 'button';
		ButHeadRegistr.id = 'registration_button';
		ButHeadRegistr.className = 'btn my-2 mx-2 px-sm-3 px-xs-2';
		ButHeadRegistr.onclick = function () {
			ModalForm('РЕГИСТРАЦИЯ');
		}
		ButHeadRegistr.innerHTML = 'регистрация';
		DivButHeadRegistr.appendChild(ButHeadRegistr);
		// кнопка для админа или приветствие для гостя
	} else {
		// очистить див
		let Div = document.getElementById('header_enter_buttons');
		Div.innerHTML = '';

		// див приветсвия для гостя или кнопки админа
		let DivWelcom = document.createElement('div');
		Div.appendChild(DivWelcom);

		// кнопка для админа
		if (localStorage.getItem('isAdmin') == 'true') {
			let AdminButton = document.createElement('button');
			AdminButton.type = 'button';
			AdminButton.className = 'btn my-2 mx-2 px-sm-3 px-xs-2';
			AdminButton.innerHTML = 'редактировать';
			AdminButton.onclick = function () {
				document.location.href = 'product_management.html';
			}
			DivWelcom.appendChild(AdminButton);
			// приветствие для гостя
		} else {
			let Welcom = document.createElement('p');
			Welcom.innerHTML = 'Добро пожаловать, ' + localStorage.getItem('name');
			DivWelcom.appendChild(Welcom);
		}
		// див для кнопки выхода
		let DivOutput = document.createElement('div');
		Div.appendChild(DivOutput);

		// кнопка Выход
		let ButtonOutput = document.createElement('button');
		ButtonOutput.type = 'button';
		ButtonOutput.className = 'btn my-2 mx-2 px-sm-3 px-xs-2';
		ButtonOutput.innerHTML = 'выход';
		ButtonOutput.onclick = function () {
			localStorage.setItem('isEnter', false);
			ChangeHeader(); // перерисовать заголовок при выходе из аккаунта
		}
		DivOutput.appendChild(ButtonOutput);
	}
}

// =====================footer
function ChangeFooter() {
	// находим Футер
	let Footer = document.getElementById('footerSubscription');

	// если емейл не был введен
	if (localStorage.getItem('isEmail') == 'false') {
		// див для строчки про подписку
		let DivStringSub = document.createElement('div');
		DivStringSub.className = 'col-lg-6 col-md-6 col-sm-12 col-12';
		Footer.appendChild(DivStringSub);

		// подпишись на нас
		let StringSub = document.createElement('h2');
		StringSub.innerHTML = 'подпишись на нашу рассылку';
		DivStringSub.appendChild(StringSub);

		// див для поля ввода
		let DivInput = document.createElement('div');
		DivInput.className = 'col-lg-6 col-md-6 col-sm-12 col-12 align-self-center';
		Footer.appendChild(DivInput);

		// див для рабочей группы
		let DivInputGroup = document.createElement('div');
		DivInputGroup.className = 'input-group input-group-lg';
		DivInput.appendChild(DivInputGroup);

		// поле ввода
		let Input = document.createElement('input');
		Input.id = 'InputEmail';
		Input.type = 'text';
		Input.className = 'form-control';
		Input.placeholder = 'Ваш e-mail';
		Input.label = 'Ваш e-mail';
		DivInputGroup.appendChild(Input);

		// див для кнопки ввода
		let DivInputButton = document.createElement('div');
		DivInputButton.className = 'input-group-append';
		DivInputGroup.appendChild(DivInputButton);

		// кнопка Подписки
		let Button = document.createElement('button');
		Button.id = 'subscribe_button';
		Button.className = 'btn btn-light px-sm-3 px-xs-2';
		Button.type = 'button';
		Button.onclick = function () {
			Subscription();
		}
		Button.innerHTML = 'Подписаться';
		DivInputButton.appendChild(Button);
		// если уже был введен e-mail
	} else {
		Footer.style.display = 'none';
	}
}

// =======================форма для входа/регистрации
function ModalForm(string) {
	// слой затемнения
	let darkLayer = document.createElement('div');
	darkLayer.id = 'shadow';
	document.body.appendChild(darkLayer);

	// переменные для окна и кнопки
	let modalWin;
	let modalBtn;

	// или Вход или Регистрация или Информация
	switch (string) {
		case 'ВХОД':
			modalWin = document.getElementById('LoginFormEnter');
			modalBtn = document.getElementById('BtnCancelFormEnter');
			break;
		case 'РЕГИСТРАЦИЯ':
			modalWin = document.getElementById('LoginFormRegistration');
			modalBtn = document.getElementById('BtnCancelFormRegistration');
			break;
		case 'empty':
			modalWin = document.getElementById('FormEmailEmpty');
			modalBtn = document.getElementById('BtnEmailEmpty');
			break;
		case 'error':
			modalWin = document.getElementById('FormEmailError');
			modalBtn = document.getElementById('BtnEmailError');
			break;
		case 'tnx':
			modalWin = document.getElementById('FormEmailSuccess');
			modalBtn = document.getElementById('BtnEmailSuccess');
			break;
		case 'order':
			modalWin = document.getElementById('OrderGoods');
			modalBtn = document.getElementById('BtnOrderGoodsCansel');
			break;
		default:
			alert('Ой!');
	}

	// делаем окно видимым
	modalWin.style.display = 'block';

	// при клике на фон - фон исчезает и окно становится невидимым
	darkLayer.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		modalWin.style.display = 'none';
	}

	// при клике на кнопку отмены - фон исчезает и окно становится невидимым
	modalBtn.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		modalWin.style.display = 'none';
	}
}

// кнопка Входа
function Enter() {
	// находим слой затемнения
	let darkLayer = document.getElementById('shadow');
	// находим окно
	let FormWindow = document.getElementById('LoginFormEnter');

	// проверка вводов
	let tempL = document.getElementById('InputLoginFormEnter').value;
	let tempP = document.getElementById('InputPasswordFormEnter').value;

	// если вошел админ
	if (tempL == 'admin' && tempP == 'admin') {
		localStorage.setItem('isAdmin', true);
		AdminForm();
	} else {
		localStorage.setItem('isEnter', true);
	}

	// убрать кнопки - поместить надпись или кнопку
	let Form = document.getElementById('header_enter_buttons');
	Form.innerHTML = '';
	let Div = document.createElement('div');
	Form.appendChild(Div);

	// кнопка редактирования для админа
	if (localStorage.getItem('isAdmin') == 'true') {
		let AdminButton = document.createElement('button');
		AdminButton.id = 'AdminButton';
		AdminButton.type = 'button';
		AdminButton.className = 'btn my-2 mx-2';
		AdminButton.innerHTML = 'редактировать';
		AdminButton.onclick = function () {
			document.location.href = "management_menu.html";
		}
		Div.appendChild(AdminButton);
		// или добро пожаловать гость
	} else {
		let P = document.createElement('p');
		P.innerHTML = 'Добро пожаловать, ' + tempL;
		Div.appendChild(P);
	}

	// выключить окно
	darkLayer.parentNode.removeChild(darkLayer);
	FormWindow.style.display = 'none';
}

// кнопка регистрации
function EnterReg() {
	// находим слой затемнения
	let darkLayer = document.getElementById('shadow');
	// находим окно
	let FormWindow = document.getElementById('LoginFormRegistration');
	// вход выполнен
	localStorage.setItem('isEnter', true);
	// емейл был введен
	localStorage.setItem('isEmail', true);
	// берем введенное имя
	let tempL = document.getElementById('InputLoginFormRegistration').value;

	// убрать кнопки - поместить надпись 
	let Form = document.getElementById('header_enter_buttons');
	Form.innerHTML = '';
	let Div = document.createElement('div');
	Form.appendChild(Div);
	let P = document.createElement('p');
	P.innerHTML = 'Добро пожаловать, ' + tempL;
	Div.appendChild(P);

	// выключить окно
	darkLayer.parentNode.removeChild(darkLayer);
	FormWindow.style.display = 'none';
}

//====================переход на страницу авторизации администратора
function AdminForm() {
	// подхватываем слой затемнения
	let darkLayer = document.getElementById('shadow');
	// находим и изменяем окно
	let FormWindow = document.getElementById('LoginFormEnter');
	FormWindow.innerHTML = '';

	// кнопка авторизации
	let ButtonAutoriz = document.createElement('button');
	ButtonAutoriz.className = 'btn btn-lg btn-light btn-block my-3';
	ButtonAutoriz.innerHTML = 'авторизация';
	ButtonAutoriz.onclick = function () {
		document.location.href = "admin_authorization.html";
	}
	FormWindow.appendChild(ButtonAutoriz);

	// кнопка отмены
	let ButtonCancel = document.createElement('button');
	ButtonCancel.className = 'btn btn-lg btn-light btn-block my-3';
	ButtonCancel.innerHTML = 'отмена';
	ButtonCancel.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		FormWindow.style.display = 'none';
	}
	FormWindow.appendChild(ButtonCancel);

	// при клике на фон - фон и окно исчезают
	darkLayer.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		FormWindow.style.display = 'none';
	}
}

//====================подписка
function Subscription() {
	// проверка правильности ввода e-mail
	let Email = document.getElementById('InputEmail').value;
	let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

	// если поле пустое
	if (Email == '') {
		ModalForm('empty');
	} else if (reg.test(Email) == false) {
		// если неверный ввод
		ModalForm('error');
	} else {
		// если верны ввод
		ModalForm('tnx');
	}
}

// показать информацию в карточках
function ShowMainInfoCard(string) {
	// вычисляем ширину экрана
	let ClientWidth = $(window).width();

	//если экран маленький, то загружаем другое окошко
	if (ClientWidth <= 767) {
		$('#main_info_name').collapse('hide');
		$('#main_info_connection').collapse('hide');
		$('#main_info_attribute').collapse('hide');

		switch (string) {
			case 'InfoName':
				document.location.href = 'card_info.html#MainInfoCardName';
				break;
			case 'InfoConnection':
				document.location.href = 'card_info.html#MainInfoCardConnection';
				break;
			case 'InfoAttribute':
				document.location.href = 'card_info.html#MainInfoCardAttribute';
				break;
			default:
				alert('Ой!');
		}
	} else {
		// если большой, то позываем один информер, а остальные скрыты
		switch (string) {
			case 'InfoName':
				$('#main_info_name').collapse('show');
				$('#main_info_connection').collapse('hide');
				$('#main_info_attribute').collapse('hide');
				break;
			case 'InfoConnection':
				$('#main_info_name').collapse('hide');
				$('#main_info_connection').collapse('show');
				$('#main_info_attribute').collapse('hide');
				break;
			case 'InfoAttribute':
				$('#main_info_name').collapse('hide');
				$('#main_info_connection').collapse('hide');
				$('#main_info_attribute').collapse('show');
				break;
			default:
				alert('Ой!');
		}
	}
}

// ============================== страница авторизации админа
// кнопка выхода Админа
function ExitAdmin() {
	// администратор вышел
	localStorage.setItem('isAdmin', false);
	// и на главную страницу
	document.location.href = 'index.html';
}

// выслать код
// проверки на совпадение нет
function Code() {
	if (document.getElementById('login_admin').value == '' || document.getElementById('password_admin').value == '') {
		alert('заполните все поля!');
	} else {
		// сделать кнопку кода недоступной
		document.getElementById('send_code_button').setAttribute('disabled', '');
		// сделать поле кода и кнопку Входа доступными
		document.getElementById('code_admin').removeAttribute('disabled');
		document.getElementById('code_admin_button').removeAttribute('disabled');
		// "высланный" код
		alert('7778');
	}
}

// проверка кода
let Count = 0; // счетчик попыток
function CheckCode() {
	let CodeValue = document.getElementById('code_admin').value;
	if (Count < 1) {
		if (CodeValue == 7778) {
			alert('доступ разрешён');
			document.location.href = 'management_menu.html';
		} else {
			alert('неверный код');
		}
	} else {
		alert('досуп запрещён');
		document.getElementById('label_code_admin').style.display = 'none';
		document.getElementById('code_admin').setAttribute('disabled', '');
		document.getElementById('code_admin').style.display = 'none';
		document.getElementById('code_admin_button').setAttribute('disabled', '');
		document.getElementById('code_admin_button').style.display = 'none';

		Count++;
	}
}

//============================добавление товара
// очистка формы и скрытие ненужных форм
function FormEnterObjectHidden() {
	// очистка главной формы
	document.getElementById('NameEnterOject').value = '';
	document.getElementById('MainFotoEnterOject').value = '';
	document.getElementById('SecondFotoEnterOject').value = '';
	document.getElementById('ThirdFotoEnterOject').value = '';
	document.getElementById('CostEnterOject').value = '';
	document.getElementById('QuantityEnterOject').value = '';
	document.getElementById('OriginEnterOject').value = '';
	document.getElementById('EffectEnterOject').value = '';
	document.getElementById('DescriptionEnterOject').value = '';

	// очистка select 'форма артифакта' ('тип артефакта' у всех пересекается по значениям)
	let FormSelect = document.getElementById('FormArtifactEnterOject');
	let SelectRow = FormSelect.options;
	while (SelectRow.length > 0) {
		SelectRow[SelectRow.length - 1] = null;
	}

	// очистка формы Оружия
	document.getElementById('BladeLength').value = '';
	document.getElementById('WeightWeapon').value = '';
	document.getElementById('UsersWeapon').value = '';

	// очистка формы Брони
	document.getElementById('WeightArmor').value = '';
	document.getElementById('UsersArmor').value = '';

	// скрытие елементов
	document.getElementById('EnterOject').style.display = 'none';
	document.getElementById('EnterWeapon').style.display = 'none';
	document.getElementById('EnterArmor').style.display = 'none';
	document.getElementById('EnterSpell').style.display = 'none';
}

// добавить Оружие
function ShowEnterWeapon() {
	FormEnterObjectHidden();
	document.getElementById('EnterOject').style.display = 'block';
	document.getElementById('EnterWeapon').style.display = 'block';

	// заполнить select 'форма артифакта'
	let TypeArtifact = document.getElementById('FormArtifactEnterOject');
	let AddOption = document.createElement('option');
	AddOption.text = 'меч';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'копье';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'трезубец';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'молот';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'прочее';
	TypeArtifact.appendChild(AddOption);
}

// добавить Броню
function ShowEnterArmor() {
	FormEnterObjectHidden();
	document.getElementById('EnterOject').style.display = 'block';
	document.getElementById('EnterArmor').style.display = 'block';

	// заполнить select 'форма артифакта'
	let TypeArtifact = document.getElementById('FormArtifactEnterOject');
	let AddOption = document.createElement('option');
	AddOption.text = 'доспех';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'прочее';
	TypeArtifact.appendChild(AddOption);
}

// добавить Свитки
function ShowEnterSpell() {
	FormEnterObjectHidden();
	document.getElementById('EnterOject').style.display = 'block';
	document.getElementById('EnterSpell').style.display = 'block';

	// заполнить select 'форма артифакта'
	let TypeArtifact = document.getElementById('FormArtifactEnterOject');
	let AddOption = document.createElement('option');
	AddOption.text = 'заклинание';
	TypeArtifact.appendChild(AddOption);
	AddOption = document.createElement('option');
	AddOption.text = 'зелье';
	TypeArtifact.appendChild(AddOption);
}

// "добавление" товара
function AddProduct() {
	let NameObject = document.getElementById('NameEnterOject').value;
	alert(NameObject + ' успешно добавлен');
	FormEnterObjectHidden();
}

//=======================================карточка товара
function CardProductShow(obj) {
	// див в который будет цепляться карточка товара
	let DivForCard = document.getElementById('Products');

	// растягиваемый див для карточки
	let FlexDiv = document.createElement('div');
	FlexDiv.className = 'd-flex align-items-stretch col-lg-4 col-md-4 col-sm-6 col-12 p-2';
	DivForCard.appendChild(FlexDiv);

	// карточка
	let Card = document.createElement('div');
	Card.id = 'CardProduct';
	Card.className = 'card d-flex align-items-stretch';
	FlexDiv.appendChild(Card);

	// хедер
	let CardHeader = document.createElement('div');
	CardHeader.className = 'card-header text-center';
	CardHeader.innerHTML = '<b>' + obj.getName + '</b>';
	Card.appendChild(CardHeader);

	// фото
	let CardFoto = document.createElement('img');
	CardFoto.className = 'card-img-top';
	CardFoto.src = obj.getFoto1;
	CardFoto.alt = obj.getName;
	Card.appendChild(CardFoto);

	// тело
	let CardBody = document.createElement('div');
	CardBody.className = 'card-body';
	Card.appendChild(CardBody);

	// краткое описание
	let CardDescription = document.createElement('ul');
	CardDescription.className = 'list-group list-group-flush text-center';
	CardBody.appendChild(CardDescription);

	// форма артефакта и тип
	let CardFormArt = document.createElement('li');
	CardFormArt.className = 'list-group-item';
	CardFormArt.innerHTML = '<b>' + obj.getForm_artifact + '</b>: ' + ' ' + obj.getType_artifact;
	CardDescription.appendChild(CardFormArt);

	// эффекты артефакта
	let CardTypeArt = document.createElement('li');
	CardTypeArt.className = 'list-group-item';
	CardTypeArt.innerHTML = obj.getEffects;
	CardDescription.appendChild(CardTypeArt);

	// цена
	let CardCost = document.createElement('div');
	CardCost.className = 'card-footer d-flex justify-content-center';
	CardCost.innerHTML = '<b>' + obj.getCost + '</b>' + ' септим';
	Card.appendChild(CardCost);

	// кнопка
	let CardButton = document.createElement('button');
	CardButton.className = 'btn btn-lg btn-block text-center py-3';
	CardButton.innerHTML = 'подробнее';
	Card.appendChild(CardButton);
}

// создание чекбокса
function CheckBoxProduct(IdString, ValueString) {
	// к чему будет цепляться чеккер
	let MainDivForm = document.getElementById('Product_category');

	//форма
	let CheckForm = document.createElement('div');
	CheckForm.className = 'form-check d-flex align-items-center';
	MainDivForm.appendChild(CheckForm);

	// ввод чекбокса
	let InputCheckForm = document.createElement('input');
	InputCheckForm.className = 'form-check-input';
	InputCheckForm.type = 'checkbox';
	InputCheckForm.value = '';
	InputCheckForm.id = IdString;
	CheckForm.appendChild(InputCheckForm);

	// надпись
	let LabelCheckForm = document.createElement('label');
	LabelCheckForm.className = 'form-check-label';
	LabelCheckForm.for = IdString;
	LabelCheckForm.innerHTML = ValueString;
	CheckForm.appendChild(LabelCheckForm);
}

//==============================================загрузка страницы со всей продукцией
// имитация кнопки 'все товары'
function AllProduct() {
	// очистка форм
	document.getElementById('Products').innerHTML = '';
	let MainDivForm = document.getElementById('Product_category');
	MainDivForm.innerHTML = '';

	// вывод всех товаров
	for (let i = 0; i < ArrWeapons.length; i++) {
		CardProductShow(ArrWeapons[i]);
	}
	for (let i = 0; i < ArrArmor.length; i++) {
		CardProductShow(ArrArmor[i]);
	}
	for (let i = 0; i < ArrSpell.length; i++) {
		CardProductShow(ArrSpell[i]);
	}

	// категории
	// для оружия
	CheckBoxProduct('CheckWeapon', 'оружие');
	// для для брони
	CheckBoxProduct('CheckArmor', 'доспехи');
	// для для свитков
	CheckBoxProduct('CheckSpell', 'свитки');

	// кнопка
	document.getElementById('FiltersButton').onclick = function () {
		AllFilters();
	}
}

// имитация кнопки 'оружие'
function WeaponsProduct(type) {
	// очистка форм
	document.getElementById('Products').innerHTML = '';
	let MainDivForm = document.getElementById('Product_category');
	MainDivForm.innerHTML = '';

	// вывод только оружия
	switch (type) {
		case 'all':
			{
				for (let i = 0; i < ArrWeapons.length; i++) {
					CardProductShow(ArrWeapons[i]);
				}
				break;
			}
		case 'sword':
			{
				for (let i = 0; i < ArrWeapons.length; i++) {
					if (ArrWeapons[i].getForm_artifact == 'меч') {
						CardProductShow(ArrWeapons[i]);
					}
				}
				break;
			}
		case 'spear':
			{
				for (let i = 0; i < ArrWeapons.length; i++) {
					if (ArrWeapons[i].getForm_artifact == 'копье') {
						CardProductShow(ArrWeapons[i]);
					}
				}
				break;
			}
		case 'trident':
			{
				for (let i = 0; i < ArrWeapons.length; i++) {
					if (ArrWeapons[i].getForm_artifact == 'трезубец') {
						CardProductShow(ArrWeapons[i]);
					}

				}
				break;
			}
		case 'other':
			{
				for (let i = 0; i < ArrWeapons.length; i++) {
					if (ArrWeapons[i].getForm_artifact != 'меч' && ArrWeapons[i].getForm_artifact != 'копье' && ArrWeapons[i].getForm_artifact != 'трезубец') {
						CardProductShow(ArrWeapons[i]);
					}

				}
				break;
			}
	}

	// категории
	// для мечей
	CheckBoxProduct('CheckWeaponSword', 'меч');
	// для копий
	CheckBoxProduct('CheckWeaponSpear', 'копьё');
	// для трезубцев
	CheckBoxProduct('CheckWeaponTrident', 'трезубец');
	// для прочего
	CheckBoxProduct('CheckWeaponOther', 'прочее');

	// кнопка
	document.getElementById('FiltersButton').onclick = function () {
		WeaponFilters();
	}
}

// имитация кнопки 'доспехи'
function ArmorProduct(type) {
	// очистка форм
	document.getElementById('Products').innerHTML = '';
	let MainDivForm = document.getElementById('Product_category');
	MainDivForm.innerHTML = '';

	// вывод только доспехов
	switch (type) {
		case 'all':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					CardProductShow(ArrArmor[i]);
				}
				break;
			}
		case 'kit':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					if (ArrArmor[i].getCategory == 'торс' && ArrArmor[i].getCategory == 'шлем' && ArrArmor[i].getCategory == 'поножи' && ArrArmor[i].getCategory == 'перчатки') {
						CardProductShow(ArrArmor[i]);
					}
				}
				break;
			}
		case 'shield':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					if (ArrArmor[i].getCategory == 'щит') {
						CardProductShow(ArrArmor[i]);
					}
				}
				break;
			}
		case 'torso':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					if (ArrArmor[i].getCategory == 'торс') {
						CardProductShow(ArrArmor[i]);
					}
				}
				break;
			}
		case 'helmet':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					if (ArrArmor[i].getCategory == 'шлем') {
						CardProductShow(ArrArmor[i]);
					}
				}
				break;
			}
		case 'other':
			{
				for (let i = 0; i < ArrArmor.length; i++) {
					if (ArrArmor[i].getCategory != 'шлем' && ArrArmor[i].getCategory != 'торс' && ArrArmor[i].getCategory != 'щит') {
						CardProductShow(ArrArmor[i]);
					}
				}
				break;
			}
	}

	// категории
	// для комплекта
	CheckBoxProduct('CheckArmorKit', 'комплект');
	// для щита
	CheckBoxProduct('CheckArmorShield', 'щит');
	// для торса
	CheckBoxProduct('CheckArmorTorso', 'торс');
	// для шлема
	CheckBoxProduct('CheckArmorHelmet', 'шлем');
	// для прочего
	CheckBoxProduct('CheckArmorOther', 'прочее');

	// кнопка
	document.getElementById('FiltersButton').onclick = function () {
		ArmorFilters();
	}
}

// имитация кнопки 'свитки'
function SpellProduct(type) {
	// очистка форм
	document.getElementById('Products').innerHTML = '';
	let MainDivForm = document.getElementById('Product_category');
	MainDivForm.innerHTML = '';

	// вывод только свитков
	switch (type) {
		case 'all':
			{
				for (let i = 0; i < ArrSpell.length; i++) {
					CardProductShow(ArrSpell[i]);
				}
				break;
			}
		case 'protective':
			{
				for (let i = 0; i < ArrSpell.length; i++) {
					if (ArrSpell[i].getImpact_type == 'защитный') {
						CardProductShow(ArrSpell[i]);
					}
				}
				break;
			}
		case 'attacking':
			{
				for (let i = 0; i < ArrSpell.length; i++) {
					if (ArrSpell[i].getImpact_type == 'атакующий') {
						CardProductShow(ArrSpell[i]);
					}
				}
				break;
			}
		case 'reinforcing':
			{
				for (let i = 0; i < ArrSpell.length; i++) {
					if (ArrSpell[i].getImpact_type == 'усиление') {
						CardProductShow(ArrSpell[i]);
					}
				}
				break;
			}
		case 'trap':
			{
				for (let i = 0; i < ArrSpell.length; i++) {
					if (ArrSpell[i].getImpact_type == 'ловушка') {
						CardProductShow(ArrSpell[i]);
					}
				}
				break;
			}
	}

	// категории
	// название у типа воздействия
	let CheckNameDiv = document.createElement('div');
	CheckNameDiv.className = 'text-center pt-3';
	MainDivForm.appendChild(CheckNameDiv);

	let CheckName = document.createElement('p');
	CheckName.innerHTML = '<u><b>по типу воздействия</u></b>'
	CheckNameDiv.appendChild(CheckName);

	// для защитных
	CheckBoxProduct('CheckSpellProtective', 'защитные');
	// для атакующих
	CheckBoxProduct('CheckSpellAttack', 'атакующие');
	// для усиливающих
	CheckBoxProduct('CheckSpellStrengthening', 'усиливающие');
	// для ловушек
	CheckBoxProduct('CheckSpellTrap', 'ловушки');

	// название у типа магии
	CheckNameDiv = document.createElement('div');
	CheckNameDiv.className = 'text-center pt-3';
	MainDivForm.appendChild(CheckNameDiv);

	CheckName = document.createElement('p');
	CheckName.innerHTML = '<u><b>по типу магии</b></u>'
	CheckNameDiv.appendChild(CheckName);

	// для защитных
	CheckBoxProduct('CheckSpellEarth', 'земля');
	// для атакующих
	CheckBoxProduct('CheckSpellWater', 'вода');
	// для усиливающих
	CheckBoxProduct('CheckSpellFire', 'огонь');
	// для ловушек
	CheckBoxProduct('CheckSpellAir', 'воздух');

	// название у уровня
	CheckNameDiv = document.createElement('div');
	CheckNameDiv.className = 'text-center pt-3';
	MainDivForm.appendChild(CheckNameDiv);

	CheckName = document.createElement('p');
	CheckName.innerHTML = '<u><b>по уровню</b></u>'
	CheckNameDiv.appendChild(CheckName);

	// для защитных
	CheckBoxProduct('CheckSpellFirst', 'I');
	// для атакующих
	CheckBoxProduct('CheckSpellSecond', 'II');
	// для усиливающих
	CheckBoxProduct('CheckSpellThird', 'III');
	// для ловушек
	CheckBoxProduct('CheckSpellFourth', 'IV');

	// кнопка
	document.getElementById('FiltersButton').onclick = function () {
		SpellFilters();
	}
}

//======================================имитация сортировки
// во всех товарах
function AllFilters() {
	// очистка товаров
	document.getElementById('Products').innerHTML = '';

	// если выбрано оружие
	if (document.getElementById('CheckWeapon').checked) {
		for (let i = 0; i < ArrWeapons.length; i++) {
			CardProductShow(ArrWeapons[i]);
		}
	}

	// если выбрана броня
	if (document.getElementById('CheckArmor').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			CardProductShow(ArrArmor[i]);
		}
	}

	// если выбраны свитки
	if (document.getElementById('CheckSpell').checked) {
		for (let i = 0; i < ArrSpell.length; i++) {
			CardProductShow(ArrSpell[i]);
		}
	}
}

// в оружии
function WeaponFilters() {
	// очистка формы
	document.getElementById('Products').innerHTML = '';

	// если выбраны мечи
	if (document.getElementById('CheckWeaponSword').checked) {
		for (let i = 0; i < ArrWeapons.length; i++) {
			if (ArrWeapons[i].getForm_artifact == 'меч') {
				CardProductShow(ArrWeapons[i]);
			}
		}
	}

	// если выбраны копья
	if (document.getElementById('CheckWeaponSpear').checked) {
		for (let i = 0; i < ArrWeapons.length; i++) {
			if (ArrWeapons[i].getForm_artifact == 'копье') {
				CardProductShow(ArrWeapons[i]);
			}
		}
	}

	// если выбраны трезубцы
	if (document.getElementById('CheckWeaponTrident').checked) {
		for (let i = 0; i < ArrWeapons.length; i++) {
			if (ArrWeapons[i].getForm_artifact == 'трезубец') {
				CardProductShow(ArrWeapons[i]);
			}

		}
	}

	// если выбрано прочее
	if (document.getElementById('CheckWeaponOther').checked) {
		for (let i = 0; i < ArrWeapons.length; i++) {
			if (ArrWeapons[i].getForm_artifact != 'меч' && ArrWeapons[i].getForm_artifact != 'копье' && ArrWeapons[i].getForm_artifact != 'трезубец') {
				CardProductShow(ArrWeapons[i]);
			}

		}
	}
}

// в доспехах
function ArmorFilters() {
	// очистка формы
	document.getElementById('Products').innerHTML = '';

	// если выбран комплект
	if (document.getElementById('CheckArmorKit').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			if (ArrArmor[i].getCategory == 'торс' && ArrArmor[i].getCategory == 'шлем' && ArrArmor[i].getCategory == 'поножи' && ArrArmor[i].getCategory == 'перчатки') {
				CardProductShow(ArrArmor[i]);
			}
		}
	}

	// если выбран щит
	if (document.getElementById('CheckArmorShield').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			if (ArrArmor[i].getCategory == 'щит') {
				CardProductShow(ArrArmor[i]);
			}
		}
	}

	// если выбран торс
	if (document.getElementById('CheckArmorTorso').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			if (ArrArmor[i].getCategory == 'торс') {
				CardProductShow(ArrArmor[i]);
			}
		}
	}

	// если выбран шлем
	if (document.getElementById('CheckArmorHelmet').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			if (ArrArmor[i].getCategory == 'шлем') {
				CardProductShow(ArrArmor[i]);
			}
		}
	}

	// если выбран прочее
	if (document.getElementById('CheckArmorOther').checked) {
		for (let i = 0; i < ArrArmor.length; i++) {
			if (ArrArmor[i].getCategory != 'шлем' && ArrArmor[i].getCategory != 'торс' && ArrArmor[i].getCategory != 'щит') {
				CardProductShow(ArrArmor[i]);
			}
		}
	}
}

// в свитках
function SpellFilters() {
	// очистка формы
	document.getElementById('Products').innerHTML = '';
	let ArrCheckSpellImpact = [];
	let ArrCheckSpellMagic = [];
	let ArrCheckSpellLevel = [];

	if (document.getElementById('CheckSpellProtective').checked) {
		ArrCheckSpellImpact.push('защитный');
	}
	if (document.getElementById('CheckSpellAttack').checked) {
		ArrCheckSpellImpact.push('атакующий');
	}
	if (document.getElementById('CheckSpellStrengthening').checked) {
		ArrCheckSpellImpact.push('усиление');
	}
	if (document.getElementById('CheckSpellTrap').checked) {
		ArrCheckSpellImpact.push('ловушка');
	}
	if (document.getElementById('CheckSpellEarth').checked) {
		ArrCheckSpellMagic.push('земли');
	}
	if (document.getElementById('CheckSpellWater').checked) {
		ArrCheckSpellMagic.push('воды');
	}
	if (document.getElementById('CheckSpellFire').checked) {
		ArrCheckSpellMagic.push('огня');
	}
	if (document.getElementById('CheckSpellAir').checked) {
		ArrCheckSpellMagic.push('воздуха');
	}
	if (document.getElementById('CheckSpellFirst').checked) {
		ArrCheckSpellLevel.push('1');
	}
	if (document.getElementById('CheckSpellSecond').checked) {
		ArrCheckSpellLevel.push('2');
	}
	if (document.getElementById('CheckSpellThird').checked) {
		ArrCheckSpellLevel.push('3');
	}
	if (document.getElementById('CheckSpellFourth').checked) {
		ArrCheckSpellLevel.push('4');
	}

	if (ArrCheckSpellImpact.length != 0 && ArrCheckSpellMagic.length == 0 && ArrCheckSpellLevel.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellImpact.length; j++) {
				if (ArrCheckSpellImpact[j] == ArrSpell[i].getImpact_type) {
					CardProductShow(ArrSpell[i]);
				}
			}
		}
	}

	if (ArrCheckSpellMagic.length != 0 && ArrCheckSpellImpact.length == 0 && ArrCheckSpellLevel.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellMagic.length; j++) {
				if (ArrCheckSpellMagic[j] == ArrSpell[i].getType_magic) {
					CardProductShow(ArrSpell[i]);
				}
			}
		}
	}

	if (ArrCheckSpellLevel.length != 0 && ArrCheckSpellImpact.length == 0 && ArrCheckSpellMagic.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellLevel.length; j++) {
				if (ArrCheckSpellLevel[j] == ArrSpell[i].getLevel) {
					CardProductShow(ArrSpell[i]);
				}
			}
		}
	}

	if (ArrCheckSpellImpact.length != 0 && ArrCheckSpellMagic.length != 0 && ArrCheckSpellLevel.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellImpact.length; j++) {
				if (ArrCheckSpellImpact[j] == ArrSpell[i].getImpact_type) {
					for (let x = 0; x < ArrCheckSpellMagic.length; x++) {
						if (ArrCheckSpellMagic[x] == ArrSpell[i].getType_magic) {
							CardProductShow(ArrSpell[i]);
						}
					}
				}
			}
		}
	}

	if (ArrCheckSpellMagic.length != 0 && ArrCheckSpellLevel.length != 0 && ArrCheckSpellImpact.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellMagic.length; j++) {
				if (ArrCheckSpellMagic[j] == ArrSpell[i].getType_magic) {
					for (let x = 0; x < ArrCheckSpellLevel.length; x++) {
						if (ArrCheckSpellLevel[x] == ArrSpell[i].getLevel) {
							CardProductShow(ArrSpell[i]);
						}
					}
				}
			}
		}
	}

	if (ArrCheckSpellLevel.length != 0 && ArrCheckSpellImpact.length != 0 && ArrCheckSpellMagic.length == 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellLevel.length; j++) {
				if (ArrCheckSpellLevel[j] == ArrSpell[i].getLevel) {
					for (let x = 0; x < ArrCheckSpellImpact.length; x++) {
						if (ArrCheckSpellImpact[x] == ArrSpell[i].getImpact_type) {
							CardProductShow(ArrSpell[i]);
						}
					}
				}
			}
		}
	}

	if (ArrCheckSpellImpact.length != 0 && ArrCheckSpellMagic.length != 0 && ArrCheckSpellLevel.length != 0) {
		for (let i = 0; i < ArrSpell.length; i++) {
			for (let j = 0; j < ArrCheckSpellImpact.length; j++) {
				if (ArrCheckSpellImpact[j] == ArrSpell[i].getImpact_type) {
					for (let x = 0; x < ArrCheckSpellMagic.length; x++) {
						if (ArrCheckSpellMagic[x] == ArrSpell[i].getType_magic) {
							for (let y = 0; y < ArrCheckSpellLevel.length; y++) {
								if (ArrCheckSpellLevel[y] == ArrSpell[i].getLevel) {
									CardProductShow(ArrSpell[i]);
								}
							}
						}
					}
				}
			}
		}
	}
}

//===================================информация об одном товаре
function InfoProductOne(obj = Mjolnir) {
	// меняем заголовок страницы
	document.title = obj.getName;
	// название товара
	document.getElementById('ProductCardName').innerHTML = obj.getName;

	// фото товара
	document.getElementById('FirstFotoProduct').src = obj.getFoto1;
	document.getElementById('SecondFotoProduct').src = obj.getFoto2;
	document.getElementById('ThirdFotoProduct').src = obj.getFoto3;

	// краткое описание
	document.getElementById('ProductCardForm').innerHTML = obj.getForm_artifact;
	document.getElementById('ProductCardType').innerHTML = obj.getType_artifact;
	document.getElementById('ProductCardEffect').innerHTML = obj.getEffects;
	document.getElementById('ProductCardCost').innerHTML = '<b>' + obj.getCost + '</b> септим'

	//вывод характеристик
	// если товар - оружие
	for (let i = 0; i < ArrWeapons.length; i++) {
		if (ArrWeapons[i].getName == obj.getName) {
			AddTableProd('форма артефакта', obj.getForm_artifact);
			AddTableProd('тип использования', obj.getType_use);
			AddTableProd('происхождение', obj.getOrigin);
			AddTableProd('эффекты', obj.getEffects);
			AddTableProd('знаменитые пользователи', obj.getUsers);
			AddTableProd('длина клинка<br>(для мечей)', obj.getBlade_length);
			AddTableProd('вес', obj.getWeight);
			AddTableProd('описание', obj.getDescription);
			AddTableProd('количество', obj.getQuantity);
		}
	}

	// если товар - свиток
	for (let i = 0; i < ArrSpell.length; i++) {
		if (ArrSpell[i].getName == obj.getName) {
			AddTableProd('форма артефакта', obj.getForm_artifact);
			AddTableProd('тип использования', obj.getType_artifact);
			AddTableProd('тип магии', obj.getType_magic);
			AddTableProd('тип воздействия', obj.getImpact_type);
			AddTableProd('уровень', obj.getLevel);
			AddTableProd('происхождение', obj.getOrigin);
			AddTableProd('описание', obj.getDescription);
			AddTableProd('количество', obj.getQuantity);
		}
	}

	// если товар - доспех
	for (let i = 0; i < ArrArmor.length; i++) {
		if (ArrArmor[i].getName == obj.getName) {
			AddTableProd('форма артефакта', obj.getForm_artifact);
			AddTableProd('категория', obj.getCategory);
			AddTableProd('тип использования', obj.getType_artifact);
			AddTableProd('происхождение', obj.getOrigin);
			AddTableProd('эффекты', obj.getEffects);
			AddTableProd('знаменитые пользователи', obj.getUsers);
			AddTableProd('вес', obj.getWeight);
			AddTableProd('описание', obj.getDescription);
			AddTableProd('количество', obj.getQuantity);
		}
	}
}

// добавить строчку в таблицу информации о товаре
function AddTableProd(StringName, StringDescription) {
	// находим таблицу
	let ProdTable = document.getElementById('ProductTableInfo');
	// создаем строчку
	let ProdTableRow = document.createElement('tr');
	ProdTable.appendChild(ProdTableRow);

	// название свойства
	let ProdTableName = document.createElement('th');
	ProdTableName.scope = 'row';
	ProdTableName.innerHTML = StringName;
	ProdTableRow.appendChild(ProdTableName);

	// описание
	let ProdTableDescription = document.createElement('td');
	ProdTableDescription.innerHTML = StringDescription;
	ProdTableRow.appendChild(ProdTableDescription);
}

//=============================в корзину
function InBasket() {
	// находим название товара
	let ProdName = document.getElementById('ProductCardName').innerHTML;

	// находим его товар в каталоге
	let Obj;

	for (let i = 0; i < ArrWeapons.length; i++) {
		if (ArrWeapons[i].getName == ProdName) {
			Obj = ArrWeapons[i];
		}
	}

	for (let i = 0; i < ArrArmor.length; i++) {
		if (ArrArmor[i].getName == ProdName) {
			Obj = ArrArmor[i];
		}
	}

	for (let i = 0; i < ArrSpell.length; i++) {
		if (ArrSpell[i].getName == ProdName) {
			Obj = ArrSpell[i];
		}
	}

	// 'добавим' товар в корзину
	// проверим есть ли товар на складе
	if (Obj.getQuantity > 0) {
		// изменить сумму
		let ProdSumm = +document.getElementById('SummBasket').innerHTML;
		ProdSumm += +Obj.getCost;
		document.getElementById('SummBasket').innerHTML = ProdSumm;

		// изменить количество
		let ProdQunt = +document.getElementById('QuantityBasket').innerHTML;
		ProdQunt += +1;
		document.getElementById('QuantityBasket').innerHTML = ProdQunt;

		// уменьшить количество товара на складе
		Obj.ChangeQuantity(Obj.getQuantity -= +1);

		// изменить отображение количества на странице
		let ProdTable = document.getElementById('ProductTableInfo');
		let CountTable = ProdTable.rows.length;
		ProdTable.deleteRow(CountTable - 1);

		AddTableProd('количество', Obj.getQuantity);
	} else {
		ModalForm('order');
	}
}

// предзаказ недостающего количества товара
function PreOrderProduct() {
	modalWin = document.getElementById('OrderGoods');
	modalBtn = document.getElementById('BtnOrderGoodsCansel');

	// подхватываем слой затемнения
	let darkLayer = document.getElementById('shadow');
	// находим и изменяем окно
	let FormWindow = document.getElementById('OrderGoods');
	FormWindow.innerHTML = '';

	// создаем форму
	let FormOrder = document.createElement('form');
	FormWindow.appendChild(FormOrder);

	// группу ввода для количества
	let GroupInput = document.createElement('div');
	GroupInput.className = 'form-group';
	FormOrder.appendChild(GroupInput);

	// надпись
	let Label = document.createElement('label');
	Label.for = 'QuantityProdOrder';
	Label.innerHTML = 'введите количество';
	GroupInput.appendChild(Label);

	// поле ввода
	let Input = document.createElement('input');
	Input.type = 'number';
	Input.className = 'form-control form-control-lg';
	Input.id = 'QuantityProdOrder';
	Input.placeholder = 'количество товара';
	GroupInput.appendChild(Input);

	// если емейл не был введен
	if (localStorage.getItem('isEmail') === 'false') {
		// группу ввода для емейла
		GroupInput = document.createElement('div');
		GroupInput.className = 'form-group';
		FormOrder.appendChild(GroupInput);

		// надпись
		Label = document.createElement('label');
		Label.for = 'EmailProdOrder';
		Label.innerHTML = 'введите e-mail';
		GroupInput.appendChild(Label);

		// поле ввода
		Input = document.createElement('input');
		Input.type = 'number';
		Input.className = 'form-control form-control-lg';
		Input.id = 'EmailProdOrder';
		Input.placeholder = 'e-mail';
		GroupInput.appendChild(Input);
	}

	// кнопка заказать
	let ButtonOk = document.createElement('button');
	ButtonOk.type = 'submit';
	ButtonOk.className = 'btn btn-lg btn-block my-3 SomeBtn';
	ButtonOk.innerHTML = 'заказать';
	ButtonOk.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		FormWindow.style.display = 'none';
	}
	FormWindow.appendChild(ButtonOk);

	// кнопка отмены
	let ButtonCancel = document.createElement('button');
	ButtonCancel.className = 'btn btn-lg btn-light btn-block my-3';
	ButtonCancel.innerHTML = 'отмена';
	ButtonCancel.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		FormWindow.style.display = 'none';
	}
	FormWindow.appendChild(ButtonCancel);

	// при клике на фон - фон и окно исчезают
	darkLayer.onclick = function () {
		darkLayer.parentNode.removeChild(darkLayer);
		FormWindow.style.display = 'none';
	}
}

//======================================корзина (работает, если не удалять строки)
function AddBasket() {
	AddTableBasket(Mjolnir);
	AddTableBasket(BabrEBayan);
}

// добавить строчку в таблицу корзины
function AddTableBasket(Obj) {
	// находим таблицу
	let ProdTable = document.getElementById('ProdBasket');
	// строка, в которую добавляется товар
	let CountRow = ProdTable.rows.length;

	// создаем строчку
	let ProdTableRow = document.createElement('tr');
	ProdTable.appendChild(ProdTableRow);

	// ячейка для картинки
	let ProdTableImg = document.createElement('th');
	ProdTableImg.className = 'col-1';
	ProdTableImg.scope = 'row';
	ProdTableRow.appendChild(ProdTableImg);

	// картинка
	let TableImg = document.createElement('img');
	TableImg.src = Obj.getFoto1;
	TableImg.style.height = '4rem';
	ProdTableImg.appendChild(TableImg);

	// название
	let ProdTableName = document.createElement('td');
	ProdTableName.className = 'col-2 p-auto';
	ProdTableName.innerHTML = '<h2>' + Obj.getName + '</h2>';
	ProdTableRow.appendChild(ProdTableName);

	// цена
	let ProdTableCost = document.createElement('td');
	ProdTableCost.className = 'col-1 p-auto';
	ProdTableCost.innerHTML = '<p>' + Obj.getCost + '</p>';
	ProdTableRow.appendChild(ProdTableCost);

	// количество
	let ProdTableQuant = document.createElement('td');
	ProdTableQuant.className = 'col-1 p-auto';
	ProdTableQuant.innerHTML = 1;
	ProdTableRow.appendChild(ProdTableQuant);

	// ячейка для кнопок
	let ProdTableAdd = document.createElement('td');
	ProdTableAdd.className = 'col-2 offset-4';
	ProdTableRow.appendChild(ProdTableAdd);

	// кнопка удалить товар
	let ProdTableRemoveBut = document.createElement('button');
	ProdTableRemoveBut.id = 'some_button_cat';
	ProdTableRemoveBut.type = 'button';
	ProdTableRemoveBut.className = 'btn btn-lg m-2 float-right';
	ProdTableRemoveBut.innerHTML = 'удалить';
	ProdTableRemoveBut.onclick = function () {
		BasketProd(CountRow, 'rem');
	}
	ProdTableAdd.appendChild(ProdTableRemoveBut);

	// кнопка меньше товара
	let ProdTableDelBut = document.createElement('button');
	ProdTableDelBut.id = 'some_button_admin';
	ProdTableDelBut.type = 'button';
	ProdTableDelBut.className = 'btn btn-lg m-2 float-right';
	ProdTableDelBut.innerHTML = 'меньше';
	ProdTableDelBut.onclick = function () {
		BasketProd(CountRow, 'del');
	}
	ProdTableAdd.appendChild(ProdTableDelBut);

	// кнопка больше товара
	let ProdTableAddBut = document.createElement('button');
	ProdTableAddBut.id = 'some_button_admin';
	ProdTableAddBut.type = 'button';
	ProdTableAddBut.className = 'btn btn-lg m-2 float-right';
	ProdTableAddBut.innerHTML = 'больше';
	ProdTableAddBut.onclick = function () {
		BasketProd(CountRow, 'add');
	}
	ProdTableAdd.appendChild(ProdTableAddBut);

	// изменить сумму
	let ProdSumm = +document.getElementById('SummBasket').innerHTML;
	ProdSumm += +Obj.getCost;
	document.getElementById('SummBasket').innerHTML = ProdSumm;

	// изменить количество
	let ProdQunt = +document.getElementById('QuantityBasket').innerHTML;
	ProdQunt += +1;
	document.getElementById('QuantityBasket').innerHTML = ProdQunt;

	// уменьшить количество товара на складе
	Obj.ChangeQuantity(Obj.getQuantity -= +1);
}

// редактирование товара (не работает если удалить строку)
function BasketProd(number, action) {
	// находим таблицу
	let ProdTable = document.getElementById('ProdBasket');
	// название товара находится во второй ячейке
	let NameObj = ProdTable.rows[number].cells[1].innerHTML;
	// количество товара, которе уже заказано в четвертой
	let QuantObj = ProdTable.rows[number].cells[3].innerHTML;

	// выщемливаем название
	NameObj = NameObj.replace('<h2>', '');
	NameObj = NameObj.replace('</h2>', '');

	// ищем объект в базе
	let Obj;

	for (let i = 0; i < ArrWeapons.length; i++) {
		if (ArrWeapons[i].getName == NameObj) {
			Obj = ArrWeapons[i];
		}
	}

	for (let i = 0; i < ArrArmor.length; i++) {
		if (ArrArmor[i].getName == NameObj) {
			Obj = ArrArmor[i];
		}
	}

	for (let i = 0; i < ArrSpell.length; i++) {
		if (ArrSpell[i].getName == NameObj) {
			Obj = ArrSpell[i];
		}
	}

	// переменные для суммы и количества товара в кнопочке корзины
	let ProdSumm;
	let ProdQunt;

	// действие
	switch (action) {
		// добавить количество товара
		case 'add':
			{
				if (QuantObj <= Obj.getQuantity) {
					// меняем количество в таблице
					ProdTable.rows[number].cells[3].innerHTML = +QuantObj + 1;

					// изменить сумму
					ProdSumm = +document.getElementById('SummBasket').innerHTML;
					ProdSumm += +Obj.getCost;
					document.getElementById('SummBasket').innerHTML = ProdSumm;

					// изменить количество
					ProdQunt = +document.getElementById('QuantityBasket').innerHTML;
					ProdQunt += +1;
					document.getElementById('QuantityBasket').innerHTML = ProdQunt;
				} else {
					alert('в наличии больше нет');
				}
				break;
			}

			// уменьшить количество товара
		case 'del':
			{
				if (QuantObj > 0) {
					// меняем количество в таблице
					ProdTable.rows[number].cells[3].innerHTML = +QuantObj - 1;

					// изменить сумму
					ProdSumm = +document.getElementById('SummBasket').innerHTML;
					ProdSumm -= +Obj.getCost;
					document.getElementById('SummBasket').innerHTML = ProdSumm;

					// изменить количество
					ProdQunt = +document.getElementById('QuantityBasket').innerHTML;
					ProdQunt -= +1;
					document.getElementById('QuantityBasket').innerHTML = ProdQunt;
				} else {
					alert('меньше никак');
				}
				break;
			}

			// удалить товар
		case 'rem':
			{
				// изменить сумму
				ProdSumm = +document.getElementById('SummBasket').innerHTML;
				ProdSumm = ProdSumm - (+Obj.getCost * QuantObj);
				document.getElementById('SummBasket').innerHTML = ProdSumm;

				// изменить количество
				ProdQunt = +document.getElementById('QuantityBasket').innerHTML;
				ProdQunt -= +QuantObj;
				document.getElementById('QuantityBasket').innerHTML = ProdQunt;

				// удалить строку
				ProdTable.deleteRow(number);
				break;
			}
	}
}

//====================================категории
function AddCategory() {
	let NameCat = document.getElementById('NameNewCat').value;

	if (NameCat == '') {
		alert('вы ничего не ввели');
	} else {
		// находим куда будем добавлять
		let MainDiv = document.getElementById('ContainerCateg');

		// создаем разделяющую линию 
		MainDiv.appendChild(document.createElement('hr'));

		// создаем строку
		let RowDiv = document.createElement('div');
		RowDiv.className = 'row my-3';
		MainDiv.appendChild(RowDiv);

		// создаем столбец для кнопок кнопками
		let ColDiv = document.createElement('div');
		ColDiv.className = 'col-lg-5 col-md-4 col-sm-12 col-12 my-auto mx-auto text-center';
		RowDiv.appendChild(ColDiv);

		// строка для первой кнопки
		let RowBut = document.createElement('div');
		RowBut.className = 'row';
		ColDiv.appendChild(RowBut);

		// столбец для первой кнопки
		let ColBut = document.createElement('div');
		ColBut.className = 'col-12 my-2';
		RowBut.appendChild(ColBut);

		// кнопка
		let But = document.createElement('button');
		But.id = 'some_button_admin';
		But.className = 'btn btn-lg';
		But.innerHTML = 'сохранить<br>' + NameCat;
		ColBut.appendChild(But);

		// столбец для ввода подкатегории
		ColBut = document.createElement('div');
		ColBut.className = 'col-12 my-2';
		RowBut.appendChild(ColBut);

		// группа для ввода подкатегории
		let InputGroup = document.createElement('div');
		InputGroup.className = 'input-group input-group-lg';
		ColBut.appendChild(InputGroup);

		// поле ввода
		let Input = document.createElement('input');
		Input.className = 'form-control form-control-lg';
		Input.type = 'text';
		Input.placeholder = 'название группы';
		InputGroup.appendChild(Input);

		// див для кнопки
		let DivBut = document.createElement('div');
		DivBut.className = 'input-group-append';
		InputGroup.appendChild(DivBut);

		// кнопка
		But = document.createElement('button');
		But.id = 'some_button_cat';
		But.className = 'btn btn-lg';
		But.innerHTML = 'добавить группу';
		DivBut.appendChild(But);

		// создаем столбец поля ввода категорий
		ColDiv = document.createElement('div');
		ColDiv.className = 'col-lg-7 col-md-8 col-sm-12 col-12 m-auto p-2';
		RowDiv.appendChild(ColDiv);

		// строка для ввода категорий
		let RowArea = document.createElement('div');
		RowArea.className = 'row';
		ColDiv.appendChild(RowArea);

		// столбец для ввода категорий
		ColArea = document.createElement('div');
		ColArea.className = 'col-12';
		RowArea.appendChild(ColArea);

		// группа для ввода подкатегории
		InputGroup = document.createElement('div');
		InputGroup.className = 'input-group';
		ColArea.appendChild(InputGroup);

		// поле ввода
		let Area = document.createElement('textarea');
		Area.className = 'form-control form-control-lg';
		Area.rows = '7';
		InputGroup.appendChild(Area);
	}
}

// добавление группы подкатегорий
function AddSubcategory(name) {
	// перемнные для главного Дива и введенного названия
	let MainDiv;
	let NameCat;

	// находим место добавления группы подкатегорий
	switch (name) {
		case 'weapon':
			{
				MainDiv = document.getElementById('CatWeapon');
				NameCat = document.getElementById('CatWeaponName').value;
				break;
			}
		case 'armor':
			{
				MainDiv = document.getElementById('CatArmor');
				NameCat = document.getElementById('CatArmorName').value;
				break;
			}
		case 'spell':
			{
				MainDiv = document.getElementById('CatSpell');
				NameCat = document.getElementById('CatSpellName').value;
				break;
			}
	}

	if (NameCat == '') {
		alert('вы ничего не ввели');
	} else {
		// создаем строку
		let RowDiv = document.createElement('div');
		RowDiv.className = 'row';
		MainDiv.appendChild(RowDiv);

		// создаем столбец
		let ColDiv = document.createElement('div');
		ColDiv.className = 'col-12';
		RowDiv.appendChild(ColDiv);

		// название подкатегории
		let NameHeader = document.createElement('h3');
		NameHeader.className = 'text-center';
		NameHeader.innerHTML = NameCat;
		ColDiv.appendChild(NameHeader);

		// див для поля ввода
		let DivText = document.createElement('div');
		DivText.className = 'input-group';
		ColDiv.appendChild(DivText);

		// поле ввода
		let Area = document.createElement('textarea');
		Area.className = 'form-control form-control-lg';
		Area.rows = '7';
		DivText.appendChild(Area);
	}
}

//=========================CLASSES=========================================================
// имя, фото, цена, количество, происхождение, тип артефакта, форма артефакта, эффекты, описание характеристик
class Product {
	constructor(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description) {
		this.name = name;
		this.foto1 = foto1;
		this.foto2 = foto2;
		this.foto3 = foto3;
		this.cost = cost;
		this.quantity = quantity;
		this.origin = origin;
		this.type_artifact = type_artifact;
		this.form_artifact = form_artifact;
		this.effects = effects;
		this.description = description;
	}

	set setName(name) {
		this.name = name;
	}
	set setFoto1(foto1) {
		this.foto1 = foto1;
	}
	set setFoto2(foto2) {
		this.foto2 = foto2;
	}
	set setFoto3(foto3) {
		this.foto3 = foto3;
	}
	set setCost(cost) {
		this.cost = cost;
	}
	set setQuantity(quantity) {
		this.quantity = quantity;
	}
	set setOrigin(origin) {
		this.origin = origin;
	}
	set setType_artifact(type_artifact) {
		this.type_artifact = type_artifact;
	}
	set setForm_artifact(form_artifact) {
		this.form_artifact = form_artifact;
	}
	set setEffects(effects) {
		this.effects = effects;
	}
	set setDescription(description) {
		this.description = description;
	}

	get getName() {
		return this.name;
	}
	get getFoto1() {
		return this.foto1;
	}
	get getFoto2() {
		return this.foto2;
	}
	get getFoto3() {
		return this.foto3;
	}
	get getCost() {
		return this.cost;
	}
	get getQuantity() {
		return this.quantity;
	}
	get getOrigin() {
		return this.origin;
	}
	get getType_artifact() {
		return this.type_artifact;
	}
	get getForm_artifact() {
		return this.form_artifact;
	}
	get getEffects() {
		return this.effects;
	}
	get getDescription() {
		return this.description;
	}

	ChangeQuantity(int) {
		this.quantity = int;
	}
}

// длина клинка, тип использования, вес, пользователи
class Weapons extends Product {
	constructor(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description, blade_length, type_use, weight, users) {
		super(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description);
		this.blade_length = blade_length;
		this.type_use = type_use;
		this.weight = weight;
		this.users = users;
	}

	set setBlade_length(blade_length) {
		this.blade_length = blade_length;
	}
	set setType_use(type_use) {
		this.type_use = type_use;
	}
	set setWeight(weight) {
		this.weight = weight;
	}
	set setUsers(users) {
		this.users = users;
	}

	get getBlade_length() {
		return this.blade_length;
	}
	get getType_use() {
		return this.type_use;
	}
	get getWeight() {
		return this.weight;
	}
	get getUsers() {
		return this.users;
	}
}

// категория, вес, пользователи
class Armor extends Product {
	constructor(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description, category, weight, users) {
		super(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description);
		this.category = category;
		this.weight = weight;
		this.users = users;
	}

	set setCategory(category) {
		this.category = category;
	}
	set setWeight(weight) {
		this.weight = weight;
	}
	set setUsers(users) {
		this.users = users;
	}

	get getCategory() {
		return this.category;
	}
	get getWeight() {
		return this.weight;
	}
	get getUsers() {
		return this.users;
	}
}

// тип магии, уровень, тип воздействия
class Spell extends Product {
	constructor(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description, type_magic, level, impact_type) {
		super(name, foto1, foto2, foto3, cost, quantity, origin, type_artifact, form_artifact, effects, description);
		this.type_magic = type_magic;
		this.level = level;
		this.impact_type = impact_type;
	}

	set setType_magic(type_magic) {
		this.type_magic = type_magic;
	}
	set setLevel(level) {
		this.level = level;
	}
	set setImpact_type(impact_type) {
		this.impact_type = impact_type;
	}

	get getType_magic() {
		return this.type_magic;
	}
	get getLevel() {
		return this.level;
	}
	get getImpact_type() {
		return this.impact_type;
	}
}

// temp let
let TempName;
let TempFoto1;
let TempFoto2;
let TempFoto3;
let TempCost;
let TempQuantity;
let TempOrigin;
let TempType_artifact;
let TempForm_artifact;
let TempEffects;
let TempDescription;
let TempBlade_length;
let TempType_use;
let TempWeight;
let TempUsers;
let TempCategory;
let TempType_magic;
let TempLevel;
let TempImpact_type;

// ================================мечи

// Бальмунг
TempName = 'Бальмунг';
TempFoto1 = 'img/product/Balmung1.png';
TempFoto2 = 'img/product/Balmung2.png';
TempFoto3 = 'img/product/Balmung3.png';
TempCost = '200';
TempQuantity = '4';
TempOrigin = 'германо-скандинавская мифологиия';
TempType_artifact = 'боевой';
TempForm_artifact = 'меч';
TempEffects = 'игнорирование прочности';
TempDescription = 'Однажды Зигфрид встретил под горой двух королей Нибелунгов: Шильбунга и Нибелунга, которые делили клад, когда-то зарытый ими. Короли предложили Зигфриду поделить его между ними, а в награду они бы дали ему «Меч Нибелунгов». Зигфрид поделил клад, но братья короли остались недовольны дележом. Расправиться с Зигфридом они призвали двенадцать великанов, но Зигфрид тут же отсек им головы Бальмунгом, а затем, перебив семьсот Нибелунгов, поразил двух братьев королей и победил могучего карлика Альбриха, который поклялся быть ему верным слугой.';
TempBlade_length = '140';
TempType_use = 'рубящий';
TempWeight = '3400';
TempUsers = 'Зигфрид, Хаген';
let Balmung = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Дюрандаль
TempName = 'Дюрандаль';
TempFoto1 = 'img/product/Durandal1.png';
TempFoto2 = 'img/product/Durandal2.png';
TempFoto3 = 'img/product/Durandal3.png';
TempCost = '220';
TempQuantity = '1';
TempOrigin = 'французские средневековые легенды';
TempType_artifact = 'боевой';
TempForm_artifact = 'меч';
TempEffects = 'не тупится';
TempDescription = 'Выкован кузнецом Галаном (или по другим сказаниям — кузнецом Мадельгером из Регенсбурга, Мунификаном). Вручён Карлом Великим своему рыцарю после принесения им присяги. В рукояти мощехранилище (кровь св. Василия, нетленный зуб св. Петра, власы Дионисия Парижского, Божия человека, обрывок ризы Приснодевы Марии).';
TempBlade_length = '120';
TempType_use = 'рубящий';
TempWeight = '3000';
TempUsers = 'Карл Великий, Роланд';
let Durandal = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Каладболг
TempName = 'Каладболг';
TempFoto1 = 'img/product/Kaladbold1.png';
TempFoto2 = 'img/product/Kaladbold2.png';
TempFoto3 = 'img/product/Kaladbold3.png';
TempCost = '230';
TempQuantity = '5';
TempOrigin = 'ирландские легенды';
TempType_artifact = 'боевой, усиливающий';
TempForm_artifact = 'меч';
TempEffects = 'увеличивает силу';
TempDescription = 'Отождествляется с Экскалибуром более позднего времени. Обладает достаточной силой, чтобы срезать три холма.';
TempBlade_length = '110';
TempType_use = 'рубящий';
TempWeight = '4500';
TempUsers = 'Фергус';
let Kaladbold = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Меч-кладенец
TempName = 'Меч-кладенец';
TempFoto1 = 'img/product/SwordKladenets1.png';
TempFoto2 = 'img/product/SwordKladenets2.png';
TempFoto3 = 'img/product/SwordKladenets3.png';
TempCost = '400';
TempQuantity = '32';
TempOrigin = 'русский фольклор';
TempType_artifact = 'боевой, усиливающий';
TempForm_artifact = 'меч';
TempEffects = 'игнорирование неуязвимости';
TempDescription = 'Меч–кладенец, помощник мужественных героев многих русских сказок, мечта любого воина. Если верить старинным легендам это оружие помогает победить в любом бою. Его использовали многие знаменитые богатыри из русских былин. Только таким мечом можно победить большинство сказочных чудовищ и злодеев, которые для других видов оружия остаются неуязвимыми.';
TempBlade_length = '160';
TempType_use = 'рубящий';
TempWeight = '4800';
TempUsers = 'Князь Олег Вещий, Святогор, Илья Муромец, Добрыня Никитич, Иван Царевич, и пр.';
let SwordKladenets = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Экскалибур
TempName = 'Экскалибур';
TempFoto1 = 'img/product/Excalibur1.png';
TempFoto2 = 'img/product/Excalibur2.png';
TempFoto3 = 'img/product/Excalibur3.png';
TempCost = '360';
TempQuantity = '2';
TempOrigin = 'британские мифы';
TempType_artifact = 'боевой, усиливающий';
TempForm_artifact = 'меч';
TempEffects = 'игнорирование прочности';
TempDescription = 'Легендарный меч короля Артура, которому часто приписываются мистические и волшебные свойства. Его ножны останавливают кровотечение.';
TempBlade_length = '120';
TempType_use = 'рубящий';
TempWeight = '2000';
TempUsers = 'король Артур';
let Excalibur = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Гламдринг
TempName = 'Гламдринг';
TempFoto1 = 'img/product/Glamdring1.png';
TempFoto2 = 'img/product/Glamdring2.png';
TempFoto3 = 'img/product/Glamdring3.png';
TempCost = '275';
TempQuantity = '0';
TempOrigin = 'Дж. Р. Р. Толкин';
TempType_artifact = 'боевой';
TempForm_artifact = 'меч';
TempEffects = 'светится';
TempDescription = 'Гламдринг в переводе с синдарина означает «Молотящий врагов». Гоблины называют его просто «Колотун», но уточнено, что корень glam означает не «враг» («враги), а «орк» («орки»). Как и все мечи эльфийской работы, Гламдринг светится синим или белым огнём, если орки находятся рядом.';
TempBlade_length = '130';
TempType_use = 'рубяще-колющий';
TempWeight = '1800';
TempUsers = 'Гондолин Тургон, Гэндальф';
let Glamdring = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Тоцука-но цуруги
TempName = 'Тоцука-но цуруги';
TempFoto1 = 'img/product/TocukaNoCurugi1.png';
TempFoto2 = 'img/product/TocukaNoCurugi2.png';
TempFoto3 = 'img/product/TocukaNoCurugi3.png';
TempCost = '190';
TempQuantity = '3';
TempOrigin = 'японская мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'меч';
TempEffects = 'игнорирование божественности';
TempDescription = 'Этим мечом Сусаноо отрубил все головы и хвосты Ямата-но ороти(восьмиглавый и восьмихвостый великий змей). Кроме этого, меч был использован Идзанаги(в синтоизме бог творения) для убийства бога Огня.';
TempBlade_length = '120';
TempType_use = 'рубящий';
TempWeight = '1800';
TempUsers = 'бог Ветра Сусаноо';
let TocukaNoCurugi = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

//==========================================древковое оружие
// Копьё Афины
TempName = 'Копьё Афины';
TempFoto1 = 'img/product/AthenaSpear1.png';
TempFoto2 = 'img/product/AthenaSpear2.png';
TempFoto3 = 'img/product/AthenaSpear3.png';
TempCost = '150';
TempQuantity = '6';
TempOrigin = 'древнегреческая мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'копье';
TempEffects = 'неизветно';
TempDescription = 'От его удара об землю при споре с Посейдоном за владычество над будущим городом Афины выросла первая олива.';
TempBlade_length = '';
TempType_use = 'колющий';
TempWeight = '2500';
TempUsers = 'Афина';
let AthenaSpear = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Копьё Гора
TempName = 'Копьё Гора';
TempFoto1 = 'img/product/GorSpear1.png';
TempFoto2 = 'img/product/GorSpear2.png';
TempFoto3 = 'img/product/GorSpear3.png';
TempCost = '135';
TempQuantity = '8';
TempOrigin = 'древнеегипетская мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'копье';
TempEffects = 'неизветно';
TempDescription = 'Копьё, которое благословила богиня Нейт. С божественным оружием Гор, которого называют также «гарпунщиком», преследует тифонические силы в образе бегемотов. Для защиты на пути в потусторонний мир мертвым дают с собой маленькие фигурки копий.';
TempBlade_length = '';
TempType_use = 'колющий';
TempWeight = '1800';
TempUsers = 'Гор';
let GorSpear = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Гунгнир
TempName = 'Гунгнир';
TempFoto1 = 'img/product/Gugnir1.png';
TempFoto2 = 'img/product/Gugnir2.png';
TempFoto3 = 'img/product/Gugnir3.png';
TempCost = '320';
TempQuantity = '7';
TempOrigin = 'германо-скандинавская мифология';
TempType_artifact = 'боевой, усиливающий';
TempForm_artifact = 'копье';
TempEffects = 'игнорирование прочности';
TempDescription = 'ОбладаЕт волшебным свойством поражать любую цель, пробивая самые толстые щиты и панцири и разбивая на куски самые закалённые мечи.';
TempBlade_length = '';
TempType_use = 'колющий';
TempWeight = '3300';
TempUsers = 'Один';
let Gugnir = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Карр Белаиг Дургин
TempName = 'Карр Белаиг Дургин';
TempFoto1 = 'img/product/KarrBelaigDurgin1.png';
TempFoto2 = 'img/product/KarrBelaigDurgin2.png';
TempFoto3 = 'img/product/KarrBelaigDurgin3.png';
TempCost = '175';
TempQuantity = '5';
TempOrigin = 'кельтская мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'копье';
TempEffects = 'собственная воля';
TempDescription = 'Может убивать по собственной воле (по другой версии, убивает благодаря контролю над ним демона, убивавшего всех, кто пробовал пройти, не предложив приношение («Aided Máelodrán meic Dímma Chróin»)).';
TempBlade_length = '';
TempType_use = 'колющий';
TempWeight = '3100';
TempUsers = 'Маэлодран';
let KarrBelaigDurgin = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Трезубец Посейдона
TempName = 'Трезубец Посейдона';
TempFoto1 = 'img/product/PoseidonTrident1.png';
TempFoto2 = 'img/product/PoseidonTrident2.png';
TempFoto3 = 'img/product/PoseidonTrident3.png';
TempCost = '410';
TempQuantity = '3';
TempOrigin = 'древнегреческая мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'трезубец';
TempEffects = 'магия';
TempDescription = 'Вызывает землетрясения и порождает лошадей своим ударом о твердь. Сделан киклопами. Символ морской стихии, грома и бури.';
TempBlade_length = '';
TempType_use = 'магический';
TempWeight = '7600';
TempUsers = 'Посейдон';
let PoseidonTrident = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// Ваджра
TempName = 'Ваджра';
TempFoto1 = 'img/product/Vajra1.png';
TempFoto2 = 'img/product/Vajra2.png';
TempFoto3 = 'img/product/Vajra3.png';
TempCost = '600';
TempQuantity = '12';
TempOrigin = 'Индийская мифология и буддизм';
TempType_artifact = 'боевой';
TempForm_artifact = 'трезубец';
TempEffects = 'магия';
TempDescription = 'Это мощное оружие, соединяющее в себе свойства меча, булавы и копья. Имеет символическую аналогию с алмазом — может резать что угодно, но не сам себя — и с молнией — непреодолимая сила. Возможности ваджры непредсказуемы: если ей сражается громовержец, то это просто мощное наступательное оружие, а если кто-то из буддистского пантеона — от них можно ожидать любой восточной магии.';
TempBlade_length = '';
TempType_use = 'магический, психологический';
TempWeight = '800';
TempUsers = 'Индра';
let Vajra = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

//==================================прочее
// Мьёльнир
TempName = 'Мьёльнир';
TempFoto1 = 'img/product/Mjolnir1.png';
TempFoto2 = 'img/product/Mjolnir2.png';
TempFoto3 = 'img/product/Mjolnir3.png';
TempCost = '480';
TempQuantity = '8';
TempOrigin = 'германо-скандинавская мифология';
TempType_artifact = 'боевой';
TempForm_artifact = 'молот';
TempEffects = 'гром и молния';
TempDescription = 'Молот может становился метательным оружием, которое всегда поражает цель и возвращается обратно в руки метателя. Он настолько мощное оружие, что его удар вызывает молнии и гром. Мьёльнир способен не только убивать, но и оживлять';
TempBlade_length = '';
TempType_use = 'ударный';
TempWeight = '';
TempUsers = 'Тор';
let Mjolnir = new Weapons(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempBlade_length, TempType_use, TempWeight, TempUsers);

// ===============================================доспехи
// Бабр-е Байан
TempName = 'Бабр-е Байан';
TempFoto1 = 'img/product/BabrEBayan1.png';
TempFoto2 = 'img/product/BabrEBayan2.png';
TempFoto3 = 'img/product/BabrEBayan3.png';
TempCost = '230';
TempQuantity = '4';
TempOrigin = 'персидский народный эпос';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = 'частичная неуязвимость';
TempDescription = 'Непроницаем для оружия, огня и воды.';
TempWeight = '27500';
TempUsers = 'Рустам';
TempCategory = 'торс, шлем, поножи, перчатки';
let BabrEBayan = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// панцирь Ахилла
TempName = 'панцирь Ахилла';
TempFoto1 = 'img/product/Ahill1.png';
TempFoto2 = 'img/product/Ahill2.png';
TempFoto3 = 'img/product/Ahill3.png';
TempCost = '60';
TempQuantity = '12';
TempOrigin = 'героические сказания древних греков';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = '';
TempDescription = 'Доспехи, скованные искусной рукой самого Гефеста.';
TempWeight = '10000';
TempUsers = 'Ахилл';
TempCategory = 'торс';
let AhillArmor = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// шлем Ахилла
TempName = 'шлем Ахилла';
TempFoto1 = 'img/product/Ahill1.png';
TempFoto2 = 'img/product/Ahill2.png';
TempFoto3 = 'img/product/Ahill3.png';
TempCost = '40';
TempQuantity = '16';
TempOrigin = 'героические сказания древних греков';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = '';
TempDescription = 'Доспехи, скованные искусной рукой самого Гефеста.';
TempWeight = '2500';
TempUsers = 'Ахилл';
TempCategory = 'шлем';
let AhillHelmet = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// поножи Ахилла
TempName = 'поножи Ахилла';
TempFoto1 = 'img/product/Ahill1.png';
TempFoto2 = 'img/product/Ahill2.png';
TempFoto3 = 'img/product/Ahill3.png';
TempCost = '30';
TempQuantity = '14';
TempOrigin = 'героические сказания древних греков';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = '';
TempDescription = 'Доспехи, скованные искусной рукой самого Гефеста.';
TempWeight = '1600';
TempUsers = 'Ахилл';
TempCategory = 'поножи';
let AhillLeggings = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// щит Ахилла
TempName = 'щит Ахилла';
TempFoto1 = 'img/product/Ahill1.png';
TempFoto2 = 'img/product/Ahill2.png';
TempFoto3 = 'img/product/Ahill3.png';
TempCost = '50';
TempQuantity = '22';
TempOrigin = 'героические сказания древних греков';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = '';
TempDescription = 'Доспехи, скованные искусной рукой самого Гефеста.';
TempWeight = '6600';
TempUsers = 'Ахилл';
TempCategory = 'щит';
let AhillShield = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Мегин-гьорд
TempName = 'Мегин-гьорд';
TempFoto1 = 'img/product/Tor1.png';
TempFoto2 = 'img/product/Tor2.png';
TempFoto3 = 'img/product/Tor3.png';
TempCost = '80';
TempQuantity = '9';
TempOrigin = 'скандинавская мифология';
TempType_artifact = 'усиливающий';
TempForm_artifact = 'доспех';
TempEffects = 'увеличивает силу';
TempDescription = 'Является частью доспеха Тора, увеличивает силу вдвое.';
TempWeight = '800';
TempUsers = 'Тор';
TempCategory = 'пояс';
let MeginGjord = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Иарнгрейпер
TempName = 'Иарнгрейпер';
TempFoto1 = 'img/product/Tor1.png';
TempFoto2 = 'img/product/Tor2.png';
TempFoto3 = 'img/product/Tor3.png';
TempCost = '50';
TempQuantity = '13';
TempOrigin = 'скандинавская мифология';
TempType_artifact = 'специальный';
TempForm_artifact = 'доспех';
TempEffects = 'удерживание Мьёльнира';
TempDescription = 'Железные рукавицы, без которых нельзя удержать рукоять раскалённого докрасна молота Мьёльнира';
TempWeight = '2300';
TempUsers = 'Тор';
TempCategory = 'перчатки';
let Iarngreyper = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Таларии
TempName = 'Таларии';
TempFoto1 = 'img/product/Talarii1.png';
TempFoto2 = 'img/product/Talarii2.png';
TempFoto3 = 'img/product/Talarii3.png';
TempCost = '180';
TempQuantity = '18';
TempOrigin = 'древнегреческая мифология';
TempType_artifact = 'специальный';
TempForm_artifact = 'доспех';
TempEffects = 'полет';
TempDescription = 'Дают возможность подниматься в воздух.';
TempWeight = '200';
TempUsers = 'Гермес';
TempCategory = 'обувь';
let Talarii = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Сапоги-скороходы
TempName = 'Сапоги-скороходы';
TempFoto1 = 'img/product/SevenLeagueBoots1.png';
TempFoto2 = 'img/product/SevenLeagueBoots2.png';
TempFoto3 = 'img/product/SevenLeagueBoots3.png';
TempCost = '120';
TempQuantity = '6';
TempOrigin = 'славянские сказки';
TempType_artifact = 'специальный';
TempForm_artifact = 'доспех';
TempEffects = 'скорость';
TempDescription = 'Надевший сапоги получает способность передвигаться с большой скоростью: каждый сделанный шаг переносит владельца сапог на значительное расстояние (отсюда «семимильные», то есть как вариант, каждый шаг равняется семи милям).';
TempWeight = '600';
TempUsers = '';
TempCategory = 'обувь';
let SevenLeagueBoots = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Пояс Афродиты
TempName = 'Пояс Афродиты';
TempFoto1 = 'img/product/AphroditeBelt1.png';
TempFoto2 = 'img/product/AphroditeBelt2.png';
TempFoto3 = 'img/product/AphroditeBelt3.png';
TempCost = '90';
TempQuantity = '66';
TempOrigin = 'греческая мифология';
TempType_artifact = 'специальный';
TempForm_artifact = 'доспех';
TempEffects = 'увеличивает привлекательность';
TempDescription = 'могущественный атрибут богини любви и красоты. Этот пояс обладает силой наделять того, кто его наденет, необычайной сексуальной привлекательностью.';
TempWeight = '150';
TempUsers = 'Афродита';
TempCategory = 'пояс';
let AphroditeBelt = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Шапочка из фольги
TempName = 'Шапочка из фольги';
TempFoto1 = 'img/product/FoilHat1.png';
TempFoto2 = 'img/product/FoilHat2.png';
TempFoto3 = 'img/product/FoilHat3.png';
TempCost = '10';
TempQuantity = '120';
TempOrigin = 'современность';
TempType_artifact = 'специальный';
TempForm_artifact = 'доспех';
TempEffects = 'защищает мозг и сознание от вредных излучений и влияний';
TempDescription = 'Некоторые люди верят в способность шапочек из фольги и других подобных устройств останавливать голоса в их головах и/или не позволять правительственным организациям, спецслужбам, инопланетянам, космическим лучам или сверхъестественным силам управлять сознанием против их воли. Эти люди полагают, что фольга отражает управляющие сигналы (например, от HAARP), передаваемые через внечувственное восприятие или через микроволновый слуховой эффект.';
TempWeight = '100';
TempUsers = '';
TempCategory = 'шлем';
let FoilHat = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

// Кольчуга из митриля
TempName = 'Кольчуга из митриля';
TempFoto1 = 'img/product/MithrilMail1.png';
TempFoto2 = 'img/product/MithrilMail2.png';
TempFoto3 = 'img/product/MithrilMail3.png';
TempCost = '500';
TempQuantity = '8';
TempOrigin = 'Дж. Р. Р. Толкин';
TempType_artifact = 'защитный';
TempForm_artifact = 'доспех';
TempEffects = 'неразрушимо';
TempDescription = 'Невероятная лёгкость в сочетании с невероятной прочностью и благородным блеском.';
TempWeight = '400';
TempUsers = ' Бильбо Бэггинсом, Фродо Бэггинса';
TempCategory = 'торс';
let MithrilMail = new Armor(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempCategory, TempWeight, TempUsers);

//=============================заклинания

TempName = 'Щит';
TempFoto1 = 'img/product/Svitok1Earth1.png';
TempFoto2 = 'img/product/Svitok1Earth2.png';
TempFoto3 = 'img/product/Svitok1Earth3.png';
TempCost = '5';
TempQuantity = '50';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Союзники получают меньше урона от рукопашных атак';
TempType_magic = 'земли';
TempLevel = '1';
TempImpact_type = 'защитный';
let Svitok1Earth = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Зыбучий песок';
TempFoto1 = 'img/product/Svitok2Earth1.png';
TempFoto2 = 'img/product/Svitok2Earth2.png';
TempFoto3 = 'img/product/Svitok2Earth3.png';
TempCost = '8';
TempQuantity = '25';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Появляются песчаные ловушки, останавливающие после прикосновения к ним.';
TempType_magic = 'земли';
TempLevel = '2';
TempImpact_type = 'ловушка';
let Svitok2Earth = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Защита от земли';
TempFoto1 = 'img/product/Svitok3Earth1.png';
TempFoto2 = 'img/product/Svitok3Earth2.png';
TempFoto3 = 'img/product/Svitok3Earth3.png';
TempCost = '12';
TempQuantity = '38';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Уменьшает урон от заклинаний магии Земли ';
TempType_magic = 'земли';
TempLevel = '3';
TempImpact_type = 'защитный';
let Svitok3Earth = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Метеоритный дождь';
TempFoto1 = 'img/product/Svitok4Earth1.png';
TempFoto2 = 'img/product/Svitok4Earth2.png';
TempFoto3 = 'img/product/Svitok4Earth3.png';
TempCost = '16';
TempQuantity = '14';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Наносит урон камнями в небольшом радиусе';
TempType_magic = 'земли';
TempLevel = '4';
TempImpact_type = 'атакующий';
let Svitok4Earth = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Лечение';
TempFoto1 = 'img/product/Svitok1Water1.png';
TempFoto2 = 'img/product/Svitok1Water2.png';
TempFoto3 = 'img/product/Svitok1Water3.png';
TempCost = '6';
TempQuantity = '89';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Снимает действие всех негативных заклинаний и лечит';
TempType_magic = 'воды';
TempLevel = '1';
TempImpact_type = 'защитный';
let Svitok1Water = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Ледяная Молния';
TempFoto1 = 'img/product/Svitok2Water1.png';
TempFoto2 = 'img/product/Svitok2Water2.png';
TempFoto3 = 'img/product/Svitok2Water3.png';
TempCost = '8';
TempQuantity = '55';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Наносит урон льдои';
TempType_magic = 'воды';
TempLevel = '2';
TempImpact_type = 'атакующий';
let Svitok2Water = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Кольцо Холода';
TempFoto1 = 'img/product/Svitok3Water1.png';
TempFoto2 = 'img/product/Svitok3Water2.png';
TempFoto3 = 'img/product/Svitok3Water3.png';
TempCost = '12';
TempQuantity = '24';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Наносит урон в небольшом радиусе исключая центр';
TempType_magic = 'воды';
TempLevel = '3';
TempImpact_type = 'атакующий';
let Svitok3Water = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Клон';
TempFoto1 = 'img/product/Svitok4Water1.png';
TempFoto2 = 'img/product/Svitok4Water2.png';
TempFoto3 = 'img/product/Svitok4Water3.png';
TempCost = '24';
TempQuantity = '8';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Создает клон, который разрушается от любого воздействия';
TempType_magic = 'воды';
TempLevel = '4';
TempImpact_type = 'ловушка';
let Svitok4Water = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Защита от Огня';
TempFoto1 = 'img/product/Svitok1Fire1.png';
TempFoto2 = 'img/product/Svitok1Fire2.png';
TempFoto3 = 'img/product/Svitok1Fire3.png';
TempCost = '5';
TempQuantity = '42';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Уменьшает урон от магии Огня';
TempType_magic = 'огня';
TempLevel = '1';
TempImpact_type = 'защитный';
let Svitok1Fire = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Стена Огня';
TempFoto1 = 'img/product/Svitok2Fire1.png';
TempFoto2 = 'img/product/Svitok2Fire2.png';
TempFoto3 = 'img/product/Svitok2Fire3.png';
TempCost = '8';
TempQuantity = '31';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Создает небольшую стену огня, проход через которую, наносит урон';
TempType_magic = 'огня';
TempLevel = '2';
TempImpact_type = 'атакующий';
let Svitok2Fire = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Огненный шар';
TempFoto1 = 'img/product/Svitok3Fire1.png';
TempFoto2 = 'img/product/Svitok3Fire2.png';
TempFoto3 = 'img/product/Svitok3Fire3.png';
TempCost = '15';
TempQuantity = '47';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Урон огнём';
TempType_magic = 'огня';
TempLevel = '3';
TempImpact_type = 'атакующий';
let Svitok3Fire = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Огненный щит';
TempFoto1 = 'img/product/Svitok4Fire1.png';
TempFoto2 = 'img/product/Svitok4Fire2.png';
TempFoto3 = 'img/product/Svitok4Fire3.png';
TempCost = '16';
TempQuantity = '1';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Отражает часть нанесенного урона атакующему в ближнем бою';
TempType_magic = 'огня';
TempLevel = '4';
TempImpact_type = 'ловушка';
let Svitok4Fire = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Ускорение';
TempFoto1 = 'img/product/Svitok1Air1.png';
TempFoto2 = 'img/product/Svitok1Air2.png';
TempFoto3 = 'img/product/Svitok1Air3.png';
TempCost = '6';
TempQuantity = '53';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Увеличивает скорость';
TempType_magic = 'воздуха';
TempLevel = '1';
TempImpact_type = 'усиление';
let Svitok1Air = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Точность';
TempFoto1 = 'img/product/Svitok2Air1.png';
TempFoto2 = 'img/product/Svitok2Air2.png';
TempFoto3 = 'img/product/Svitok2Air3.png';
TempCost = '8';
TempQuantity = '26';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Увеличивает атаку стреляющего при стрельбе(не распространяется на ближний бой).';
TempType_magic = 'воздуха';
TempLevel = '2';
TempImpact_type = 'усиление';
let Svitok2Air = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Воздушный щит';
TempFoto1 = 'img/product/Svitok3Air1.png';
TempFoto2 = 'img/product/Svitok3Air2.png';
TempFoto3 = 'img/product/Svitok3Air3.png';
TempCost = '12';
TempQuantity = '14';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Уменьшает урон, получаемый от дальних атак';
TempType_magic = 'воздуха';
TempLevel = '3';
TempImpact_type = 'защитный';
let Svitok3Air = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

TempName = 'Цепная молния';
TempFoto1 = 'img/product/Svitok4Air1.png';
TempFoto2 = 'img/product/Svitok4Air2.png';
TempFoto3 = 'img/product/Svitok4Air3.png';
TempCost = '24';
TempQuantity = '36';
TempOrigin = 'Heroes of Might and Magic III';
TempType_artifact = 'заклинание';
TempForm_artifact = 'свиток';
TempEffects = 'магия';
TempDescription = 'Наносит урон четверым близко стоящим.';
TempType_magic = 'воздуха';
TempLevel = '4';
TempImpact_type = 'атакующий';
let Svitok4Air = new Spell(TempName, TempFoto1, TempFoto2, TempFoto3, TempCost, TempQuantity, TempOrigin, TempType_artifact, TempForm_artifact, TempEffects, TempDescription, TempType_magic, TempLevel, TempImpact_type);

let ArrWeapons = [Balmung, Durandal, Kaladbold, SwordKladenets, Excalibur, Glamdring, TocukaNoCurugi, AthenaSpear, GorSpear, Gugnir, KarrBelaigDurgin, PoseidonTrident, Vajra, Mjolnir];
let ArrArmor = [BabrEBayan, AhillArmor, AhillHelmet, AhillLeggings, AhillShield, MeginGjord, Iarngreyper, Talarii, SevenLeagueBoots, AphroditeBelt, FoilHat, MithrilMail];
let ArrSpell = [Svitok1Earth, Svitok2Earth, Svitok3Earth, Svitok4Earth, Svitok1Water, Svitok2Water, Svitok3Water, Svitok4Water, Svitok1Fire, Svitok2Fire, Svitok3Fire, Svitok4Fire, Svitok1Air, Svitok2Air, Svitok3Air, Svitok4Air];