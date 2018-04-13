// 没有嵌套关系的组件通信
import React, {Component} from 'react'
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';
import emitter from '../events'
class ListItem2 extends Component {
    static defaultProps = {
        checked: false
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>
                <input
                    type="checkbox"
                    checked={this.props.checked}
                    onChange={this.props.onChange}/>
                <span>{this.props.value}</span>
            </li>
        )
    }
}

class List2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: this.props.list.map(entry => ({
                text: entry.text,
                checked: entry.checked || false,
            }))
        }
    }

    onItemChange(entry) {
        const { list } = this.state;

        this.setState({
            list: list.map(prevEntry => ({
                text: prevEntry.text,
                checked: prevEntry.text === entry.text ? !prevEntry.checked : prevEntry.checked,
            }))
        })
        console.log(entry)
        emitter.emit('ItemChange', entry);
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map((entry, index) => (
                        <ListItem2 
                            key={`list-${index}`}
                            value={entry.text}
                            checked={entry.checked}
                            onChange={this.onItemChange.bind(this, entry)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default List2
