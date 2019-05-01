import React from 'react';
import { css } from 'emotion';
import Nav from './Nav';
import { pinkColor } from './style';
import lodashMap from 'lodash/map';
import Head from './Head';
import Publications from './Publications';
import News from './News';
import Script from './components/Script';
import Img from './components/Img';

const FaListItem = ({ icon, children }) => (
	<li>
		<span className='fa-li'>
			<i className={icon} />
		</span>
		{children}
	</li>
);
const renderFaList = (items) =>
	lodashMap(items, ({ iconClassName, contentJsx }) => (
		<FaListItem icon={iconClassName}>{contentJsx}</FaListItem>
	));

const App = () => (
	<html lang='ja'>
		<Head />
		<body
			className={css({
				fontFamily:
					'"Helvetica Neue", Helvetica, Arial, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif'
			})}
		>
			<Nav />
			<main
				className={css({
					maxWidth: 960,
					marginLeft: 'auto',
					marginRight: 'auto',
					padding: '1rem',
					boxSizing: 'border-box',
					a: {
						color: pinkColor
					},
					h2: {
						color: pinkColor
					}
				})}
			>
				<div className='row'>
					<div className='col-md-4'>
						<div className='box'>
							<Img
								src='assets/me.jpg'
								css={css({
									display: 'block',
									width: '100%',
									borderRadius: '50%'
								})}
							/>
						</div>
					</div>
					<div className='col-md-8'>
						<div className='box'>
							<p
								className={css({
									fontSize: '2rem'
								})}
							>
								Hiroki Usuba /{' '}
								<small
									className={css({
										color: 'gray'
									})}
								>
									薄羽 大樹
								</small>
							</p>
							<ul className='fa-ul'>
								{renderFaList([
									{
										iconClassName: 'fa fa-birthday-cake',
										contentJsx: '1995/02/06'
									},
									{
										iconClassName: 'fa fa-envelope',
										contentJsx: 'hrky0206(at)gmail.com'
									},
									{
										iconClassName: 'fa fa-graduation-cap',
										contentJsx: 'Meiji University (D1)'
									},
									{
										iconClassName: 'fa fa-flask',
										contentJsx: (
											<a href='https://miyashita.com'>
												Miyashita Lab
											</a>
										)
									},
									{
										iconClassName: 'fa fa-briefcase',
										contentJsx:
											'ex-YUKAI Engineering Inc.; part time'
									},
									{
										iconClassName: 'fa fa-briefcase',
										contentJsx:
											'ex-Wantedly, Inc.; internship; web frontend'
									},
									{
										iconClassName: 'fa fa-briefcase',
										contentJsx:
											'ex-Knocknote Inc.; part time; web frontend'
									},
									{
										iconClassName: 'fa fa-briefcase',
										contentJsx:
											'Yahoo! JAPAN Research; internship'
									},
									{
										iconClassName: 'fab fa-twitter',
										contentJsx: (
											<a href='https://twitter.com/HirokiUsuba'>
												HirokiUsuba
											</a>
										)
									},
									{
										iconClassName: 'fab fa-facebook',
										contentJsx: (
											<a href='https://www.facebook.com/hrky0206'>
												hrky0206
											</a>
										)
									},
									{
										iconClassName: 'fab fa-github',
										contentJsx: (
											<a href='https://github.com/mimorisuzuko'>
												@mimorisuzuko
											</a>
										)
									},
									{
										iconClassName: 'fab fa-google',
										contentJsx: (
											<a href='https://scholar.google.co.jp/citations?user=JxA4JoIAAAAJ'>
												Scholar
											</a>
										)
									},
									{
										iconClassName:
											'fas fa-external-link-alt',
										contentJsx: (
											<a href='https://www.wantedly.com/users/17860447'>
												Wantedly
											</a>
										)
									},
									{
										iconClassName:
											'fas fa-external-link-alt',
										contentJsx: (
											<a href='http://mimorisuzuko.hatenablog.com/'>
												Blog
											</a>
										)
									}
								])}
							</ul>
							<ul className='fa-ul'>
								{renderFaList([
									{
										iconClassName: 'fas fa-heart',
										contentJsx:
											'Human-Computer Interaction; Pointing; GUIs'
									},
									{
										iconClassName: 'fas fa-heart',
										contentJsx:
											'JavaScript; React; Electron'
									},
									{
										iconClassName: 'fas fa-heart',
										contentJsx: 'Voice actress; IDOL'
									}
								])}
							</ul>
						</div>
					</div>
				</div>
				<h2 id='publications'>Publications</h2>
				<Publications />
				<h2 id='news'>News</h2>
				<News />
			</main>
			<script
				defer
				src='https://use.fontawesome.com/releases/v5.0.6/js/all.js'
			/>
			<Script
				src='assets/index.js'
				babelOptions={{
					presets: ['@babel/preset-env']
				}}
			/>
		</body>
	</html>
);

export default App;
