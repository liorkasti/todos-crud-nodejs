import React from 'react';
import CheckBox from './CheckBox';
import Filter from './Filter';

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    // const {props.map(...data)};
    // console.log(data);
    // console.log(props);

    return (
        <div className={className}>
            <div className="rowitem">
                <td><CheckBox checked={data.completed} onChange={handleChange} /></td>
                <td className="item">{data.userName}</td>
                <td className="item">{data.creationDate}</td>
                <td className="item">{data.email}</td>
                <td className="item">{data.telephone}</td>
            </div>
        </div>
    );
}
