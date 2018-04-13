import React, {Component} from 'react';
import './App.css';
import {Tabs, TabPane} from "./component/tabs"
import Input from './component/form/input'
import Checkbox from './component/form/checkbox'
import Select from './component/form/select'
import List from './component/comConcat/listItem'
import List2 from './component/comConcat/listItem2'
import emitter from './component/events.js'

class App extends Component {
  constructor(props){
    super(props)

  }

  componentDidMount() {
    this.itemChange = emitter.addListener('ItemChange', (msg, data) => {
      console.log(msg)
    })
  }

  componentWillUnMount() {
    emitter.removeListener(this.itemChange);
  }

  handleChange(activeIndex, prevIndex){
    console.log(activeIndex, prevIndex)
  }
  handleItemChange(entry){
    console.log(entry)    
  }
  render() {
    return (
      <div className="App">
        <Tabs classPrefix={'tabs'} defaultActiveIndex={0}  className="tabs-bar" onChange={this.handleChange}>
          <TabPane order="0" tab={<span><i className="fa fa-home"></i>home</span>} className="tab-pane">
            第一个Tab里面的内容
          </TabPane>
          <TabPane order="1" tab={<span><i className="fa fa-pencil"></i>pencil</span>} className="tab-pane">
            第二个Tab里面的内容
          </TabPane>
          <TabPane order="2" tab={<span><i className="fa fa-book"></i>book</span>} className="tab-pane">
            第三个Tab里面的内容
          </TabPane>
        </Tabs>
        <br/>
        <Input />
        <Checkbox />
        <Select />
        {/* <List 
          list={[{text:1,checked:false,},{text:2,checked:true,}]}
          handleItemChange={this.handleItemChange}
        /> */}
        <List2 
          list={[{text:1,checked:false,},{text:2,checked:true,}]}
        />
      </div>
    );
  }
}

export default App;
