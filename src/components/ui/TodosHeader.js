import React from 'react';
import CheckBox from './CheckBox';

export default function TodosHeader(props) {
    // const {data, changeStatus} = props;
    // const handleChange = (checked) => changeStatus(data.id, checked);
    // const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');

    return (
        <div className="pull-right" >
            <div className="todostitlestack">                
                <label className="todostitle" >
                    <CheckBox />
                    <span className="firstrow">שם משתמש</span>
                    <span className="firstrow">טלפון</span>
                    <span className="firstrow">מייל</span>
                    <span className="datetitle">תאריך יצירת משימה</span>
                    <span className="firstrow">פעולות</span>
                </label>

            </div>
        </div>
    );
}
