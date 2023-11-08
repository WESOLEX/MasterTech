const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const email = document.querySelector('#email');
const msg = document.querySelector('#message');
const btnSend = document.querySelector('.send-btn');

const msgStatus = document.querySelector('.msg-status');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');
	formBox.classList.add('error');
	errorMsg.textContent = msg;
};

const clearError = input => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};

const checkForm = inputs => {
	inputs.forEach(input => {
		if (input.value === '') {
			showError(input, input.placeholder);
		} else {
			clearError(input);
		}
	});
};

const checkMail = email => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'E-mail jest niepoprawny');
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll('.input-box');
	let errorCount = 0;

	allInputs.forEach(el => {
		if (el.classList.contains('error')) {
			errorCount += 1;
			console.log(errorCount);
		}
	});
};

btnSend.addEventListener('click', e => {
	console.log('test');
	e.preventDefault();
	checkForm([username, phone, email, msg]);
	checkMail(email);
	checkErrors();
});
