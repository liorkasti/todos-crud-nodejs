import update from 'immutability-helper';

/**
 * Get the list of todo items.
 * @return {Array}
 */
export function getAll() {
    return [
        {
            id: 1,
            text: 'Javascript',
            completed: false,
            userName: '1שם משתמש',
            telephone: '0526589595',
            email: 'name@doamin.com',
            creationDate: '14.08.2019',
        },
        {
            id: 2,
            text: 'React',
            completed: false,
            userName: '2שם משתמש',
            telephone: '0526589595',
            email: 'name@doamin.com',
            creationDate: '14.08.2019',
        },
        {
            id: 3,
            text: 'React App',
            completed: false,
            userName: '3שם משתמש',
            telephone: '0526589595',
            email: 'name@doamin.com',
            creationDate: '14.08.2019',
        },
        {
            id: 4,
            text: 'שם משתמש',
            completed: false,
            userName: '4שם משתמש',
            telephone: '0526589595',
            email: 'name@doamin.com',
            creationDate: '14.08.2019',
        },
        {
            id: 5,
            text: 'שם משתמש',
            completed: false,
            userName: '5שם משתמש',
            telephone: '0526589595',
            email: 'name@doamin.com',
            creationDate: '14.08.2019',
        }
    ]
}

export function getItemById(itemId) {
    return getAll().find(item => item.id === itemId);
}

export function updateStatus(items, itemId, completed) {
    let index = items.findIndex(item => item.id === itemId);

    // Returns a new list of data with updated item.
    return update(items, {
        [index]: {
            completed: {$set: completed}
        }
    });
}

/**
 * A counter to generate a unique id for a todo item.
 * Can remove this logic when the todo is created using backend/database logic.
 * @type {Number}
 */
let todoCounter = 1;

function getNextId() {
    return getAll().length + todoCounter++;
}

/**
 * Adds a new item on the list and returns the new updated list (immutable).
 *
 * @param {Array} list
 * @param {Object} data
 * @return {Array}
 */
export function addToList(list, data) {
    let item = Object.assign({
        id: getNextId()
    }, data);

    return list.concat([item]);
}
