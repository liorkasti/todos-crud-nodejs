import React from 'react';
import CheckBox from './CheckBox';

export default function TodoTitle(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <div className="pull-right" >
            <label>
                {/* <CheckBox checked={data.completed} onChange={handleChange} className="pull-right" /> */}
                שם משתמש                
                {/* {data.text} */}
            </label>
            <CheckBox className="checkbox"/>
        </div>
    );
}
