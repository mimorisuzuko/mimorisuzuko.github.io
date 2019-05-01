import React, { Component } from 'react';
import { css } from 'emotion';
import { pinkColor } from './style';
import moment from 'moment';

const linkBaseStyke = css({
	color: 'inherit',
	textDecoration: 'none',
	display: 'inline-block',
	borderRight: '1px solid white',
	padding: '0.625rem 1.1rem',
	':hover': {
		textDecoration: 'underline'
	}
});

class Nav extends Component {
	static getUsbVersion() {
		const current = new Date();
		const currentYear = current.getFullYear();
		const currentBirthday = moment(`${currentYear}0206`);
		const a = currentYear - 1995;
		const b = currentBirthday.diff(current, 'seconds');
		const c = currentBirthday.diff(`${currentYear - 1}0206`, 'seconds');
		const d = (a - b / c).toFixed(2);

		return `USB${d}`;
	}

	constructor() {
		super();

		const usbVersion = Nav.getUsbVersion();

		if (typeof document !== 'undefined') {
			document.title = usbVersion;
		}

		this.state = { usbVersion };
	}

	render() {
		const {
			state: { usbVersion }
		} = this;

		return (
			<nav
				className={css({
					backgroundColor: pinkColor,
					padding: '0.75rem 1.5rem 0.75rem 0',
					color: 'white'
				})}
			>
				<a
					id='usb-version'
					className={css(linkBaseStyke, {
						fontWeight: 600
					})}
					href='#'
				>
					{usbVersion}
				</a>
				<a href='#publications' className={linkBaseStyke}>
					Publications
				</a>
				<a href='#news' className={linkBaseStyke}>
					News
				</a>
			</nav>
		);
	}
}

export default Nav;
