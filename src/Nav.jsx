import React, { Component } from 'react';
import { css } from 'emotion';
import { pinkColor } from './style';
import autobind from 'autobind-decorator';
import { getUsbVersion } from '../shared/funcs';

const Skewed = ({ children }) => {
    return (
        <div
            className={css({
                display: 'inline-block',
                transform: 'skew(-45deg)',
                padding: '0.5rem 0',
                color: 'white',
                marginLeft: -1,
                ':hover': {
                    color: pinkColor,
                    backgroundColor: 'white'
                }
            })}
        >
            <div
                className={css({
                    borderRight: '1px solid white',
                    padding: '0.625rem 1.1rem'
                })}
            >
                <div
                    className={css({
                        transform: 'skew(45deg)',
                        textDecoration: 'none'
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

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
                    color: 'white'
                })}
            >
                <a
                    id='usb-version'
                    className={css({
                        fontWeight: 600
                    })}
                    href='#'
                >
                    <Skewed>{usbVersion}</Skewed>
                </a>
                <a href='#publications'>
                    <Skewed>Publications</Skewed>
                </a>
                <a href='#awards'>
                    <Skewed>Awards</Skewed>
                </a>
                <a href='#education'>
                    <Skewed>Education</Skewed>
                </a>
                <a href='#work'>
                    <Skewed>Work</Skewed>
                </a>
                <a href='#others'>
                    <Skewed>Others</Skewed>
                </a>
            </nav>
        );
    }
}

export default Nav;
