import React from 'react';
import KeyCode from 'keycode-js';

class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value || ''
        };
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyUp(e) {
        const {addNew} = this.props;
        const text = this.state.value.trim();

        if (e.keyCode === KeyCode.KEY_RETURN && text) {
            addNew(text);
            this.setState({value: ''});
        }
    }

    render() {
        return (
            <input autoFocus
                type="text"
                className="form-control add-todo"
                value={this.state.value}
                onKeyUp={this.handleKeyUp.bind(this)}
                onChange={this.handleChange.bind(this)}
                placeholder=" הוספת משימה חדשה..."
            />
        );
    }
}

export default InputBox;
