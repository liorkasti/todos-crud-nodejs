import React from 'react';
import Filter from './Filter';
import ButtonWrapper from './ButtonWrapper';

export default function FilterBar(props) {
    const { count, filter, changeFilter } = props;

    return (
        <div className="filter-bar">
            <div className="clearfix">
                <div className="pull-left buttons">
                    <ButtonWrapper {...props} />
                </div>

                <div className="pull-left">
                    <Filter {...{ filter, changeFilter }} />
                </div>
                <label className="pull-right">
                    {`(${count}) רשימת הלקוחות שלך`}
                </label>
            </div>
        </div>
    );
}
