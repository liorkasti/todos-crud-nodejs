import React from 'react';
import CheckBox from './CheckBox';
import Filter from './Filter';

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <li className={className}>
            <div className="checkbox">
                <label >
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    <div className="rowitem">
                        <span className="username">{data.userName}</span>
                        <span className="date">{data.creationDate}</span>
                        <span className="email">{data.email}</span>
                        <span className="tel">{data.telephone}</span>
                        {/* <CRUDAction className="filter"/> */}
                    </div>
                </label>
            </div>
        </li>
    );
}
