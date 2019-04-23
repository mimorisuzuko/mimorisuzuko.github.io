import React from 'react';
import { css } from 'emotion';
import { pinkColor } from './style';

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

const Nav = () => {
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
				USB00.00
			</a>
			<a href='#publications' className={linkBaseStyke}>
				Publications
			</a>
			<a href='#news' className={linkBaseStyke}>
				News
			</a>
		</nav>
	);
};

export default Nav;
