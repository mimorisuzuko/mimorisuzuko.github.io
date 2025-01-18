export const usbVersion = () => {
	const current = new Date();
	const currentYear = current.getFullYear();
	const currentBirthday = new Date(currentYear, 1, 6);
	const a = currentYear - 1995;
	const b = currentBirthday.getTime() - current.getTime();
	const c =
		currentBirthday.getTime() - new Date(currentYear - 1, 1, 6).getTime();
	const d = Math.floor((a - b / c) * 100) / 100;

	return `USB${d}`;
};
