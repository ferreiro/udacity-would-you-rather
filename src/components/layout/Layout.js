import React, {PureComponent} from 'react';

import ConnectedHeader from '../../containers/ConnectedHeader';

export class Layout extends PureComponent {
    render() {
        const {children} = this.props;

        return (
            <div className="app">
                <ConnectedHeader />

                <div className="container">
                    <div className="container__wrapper">
                        {children}
                    </div>
                </div>
            </div>
        )
    }
}