import moment from 'moment';

const $usbVersion = document.getElementById('usb-version');

const loop = () => {
	const current = new Date();
	const currentYear = current.getFullYear();
	const currentBirthday = moment(`${currentYear}0206`);
	const a = currentYear - 1995;
	const b = currentBirthday.diff(current, 'seconds');
	const c = currentBirthday.diff(`${currentYear - 1}0206`, 'seconds');
	const d = (a - b / c).toFixed(2);
	const usb = `USB${d}`;

	$usbVersion.innerText = usb;
	document.title = usb;
	requestAnimationFrame(loop);
};

loop();
