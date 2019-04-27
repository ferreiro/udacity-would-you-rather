import React, {PureComponent} from 'react';

import {Header} from '../header/Header';

export class Layout extends PureComponent {
    render() {
        const {children} = this.props;

        return (
            <div className="app">
                <Header />

                <div className="container">
                    <div className="container__wrapper">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}