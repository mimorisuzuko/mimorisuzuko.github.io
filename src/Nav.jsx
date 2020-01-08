import React, { Component } from 'react';
import { css } from 'emotion';
import { pinkColor } from './style';
import autobind from 'autobind-decorator';
import { getUsbVersion } from '../shared/funcs';

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
    constructor() {
        super();

        this.state = { usbVersion: getUsbVersion() };
    }

    @autobind
    loop() {
        const usbVersion = getUsbVersion();

        document.title = usbVersion;
        this.setState({ usbVersion }, () => requestAnimationFrame(this.loop));
    }

    componentDidMount() {
        this.loop();
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
