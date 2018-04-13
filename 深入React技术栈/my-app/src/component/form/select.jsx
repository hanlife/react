import React, { Component } from 'react'

class Select extends Component {
    constructor(props) {
        super(props)

        this.state = {
            area: []
        }

        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        console.log(e.target.options)
        const { options } = e.target;
        const area = Object.keys(options)
                            .filter(i => options[i].selected === true)
                            .map(i => options[i].value);
        this.setState({
            area
        })
    }

    render() {
        const { area } = this.state;

        return (
            <div>
                <span>value:{area}</span>
                <select multiple={true} name="" id="" value={area} onChange={this.handleChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
            </div>
        ) 
    }
}

export default Select