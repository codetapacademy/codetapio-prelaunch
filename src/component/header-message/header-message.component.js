import React from 'react';
import TimeCounter from '../time-counter';

const HeaderMessage = ({message}) => (
    <div className="header-message">
        <div className="header-message__title">
            {message}
            {/* I want to add a count down and a count up timer that updates every second
             */}
            <TimeCounter time={'2018-11-10 17:00'}/>
        </div>
    </div>
);

export default HeaderMessage;