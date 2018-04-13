import React, {Component} from 'react'

class Input extends Component {
    constructor(porps) {
        super(porps);

        // bind事件

        this.handleInputChange = this
            .handleInputChange
            .bind(this);
        this.handleTextareaChange = this
            .handleTextareaChange
            .bind(this);

        this.state = {
            inputValue: '',
            textareaValue: ''
        }
    }

    handleInputChange(e) {
        this.setState({inputValue: e.target.value})
    }

    handleTextareaChange(e) {
        this.setState({textareaValue: e.target.value})
    }

    render() {
        const {inputValue, textareaValue} = this.state;

        return (
            <div>
                <p>单行输入框：<input type="text" value={inputValue} onChange={this.handleInputChange}/></p>
                <p>多行输入框：
                    <textarea name="" id="" cols="30" rows="5" value={textareaValue} onChange={this.handleTextareaChange}></textarea>
                </p>
            </div>
        )
    }
}

export default Input;