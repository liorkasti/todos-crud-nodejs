import React from 'react';
import CheckBox from './CheckBox';
import Filter from './Filter';

export default function TaskData(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    // console.log(cell);

    return (
        <li>
            <div>
                {/* {item} */}
            </div>
        </li>
    );
}
