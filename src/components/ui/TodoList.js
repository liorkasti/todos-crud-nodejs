import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import TodoTitle from './TodoTitle';
import TodosHeader from './TodosHeader';
import { applyFilter, search } from '../../services/filter';

export default function TodoList(props) {
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } = props.actions;

    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    // console.log(list);

    return (
            <div className="container">
                <Header {...{ addNew, mode, query, setSearchQuery }} />
                <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                <div className="todolist">
                    {/* <tbody> */}
                        <TodosHeader {...{ items, changeStatus }} />
                        <FilteredList {...{ items, changeStatus }} />
                    {/* </tbody> */}
                    <Info {...{ mode }} />
                </div>
        </div>
    );
}
