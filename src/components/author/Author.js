import React, {PureComponent} from 'react';

import './Author.scss';

export class Author extends PureComponent {
    render() {
        const {author} = this.props;
        const {name, avatarURL} = author;
    
        return (
            <div className="author">
                <img src={avatarURL} alt="" height="50px" />
                <span>{name}</span>
            </div>
        )
    }
}