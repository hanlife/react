import React, {Component} from 'react'

class Checkbox extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coffee: []
        }

        this.handleChange = this
            .handleChange
            .bind(this);
    }

    handleChange(e) {
        const {checked, value} = e.target;
        let {coffee} = this.state;
        if (checked && coffee.indexOf(value) === -1) {
            coffee.push(value)
        } else {
            coffee = coffee.filter(i => i !== value)
        }

        this.setState({coffee})
    }

    render() {
        const { coffee } = this.state;
        console.log(coffee)

        return (
            <div>
                <p>请选择你最喜欢的咖啡：</p>
                <label htmlFor="">Cappuccino
                    <input type="checkbox"
                        value="Cappuccino"
                        checked={coffee.indexOf('Cappuccino') !== -1}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">CafeMocha
                    <input type="checkbox"
                        value="CafeMocha"
                        checked={coffee.indexOf('CafeMocha') !== -1}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">CaffeLatte
                    <input type="checkbox"
                        value="CaffeLatte"
                        checked={coffee.indexOf('CaffeLatte') !== -1}
                        onChange={this.handleChange}
                    />
                </label>
                <label htmlFor="">Machiatto
                    <input type="checkbox"
                        value="Machiatto"
                        checked={coffee.indexOf('Machiatto') !== -1}
                        onChange={this.handleChange}
                    />
                </label>
                <p>{ coffee }</p>
            </div>
        )
    }
}

export default Checkbox