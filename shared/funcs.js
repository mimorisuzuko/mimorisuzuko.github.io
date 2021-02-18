import moment from 'moment';

export const getUsbVersion = () => {
    const current = new Date();
    const currentYear = current.getFullYear();
    const currentBirthday = moment(`${currentYear}0206`);
    const a = currentYear - 1995;
    const b = currentBirthday.diff(current, 'seconds');
    const c = currentBirthday.diff(`${currentYear - 1}0206`, 'seconds');
    const d = Math.floor((a - b / c) * 100) / 100;

    return `USB${d}`;
};
