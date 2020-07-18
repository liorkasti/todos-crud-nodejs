import React from 'react';
import InputWrapper from './InputWrapper';

export default function Header(props) {
    return (
        <header className="header">
            <div className="pull-right">
                <h1 className="title">ניהול משימות</h1>
            </div>
            <div className="searchbar">
                <InputWrapper {...props} />
            </div>
        </header>
    );
}
