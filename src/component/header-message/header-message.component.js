import React from 'react';

const HeaderMessage = ({message}) => (
    <div className="header-message">
        <div className="header-message__title">
            {message}
        </div>
    </div>
);

export default HeaderMessage;