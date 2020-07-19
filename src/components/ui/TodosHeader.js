import React from 'react';
import CheckBox from './CheckBox';

export default function TodosHeader(props) {
    // const {data, changeStatus} = props;
    // const handleChange = (checked) => changeStatus(data.id, checked);
    // const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <div  >
            <table className="todostitlestack">
                    <td><CheckBox /></td>
                    <td className="item"><label>שם משתמש</label></td>
                    <td className="item"><label>טלפון</label></td>
                    <td className="item"><label>מייל</label></td>
                    <td className="item"><label>תאריך יצירת משימה</label></td>
                    <td className="item"><label>פעולות</label></td>
            </table>
        </div>
    );
}
