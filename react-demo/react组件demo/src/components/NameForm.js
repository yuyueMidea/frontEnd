import React from 'react';
import '../App.css';
import BoilingVerdict from './BoilingVerdict'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: 'coconut',
          name:'',
          temp:'37',
        };
  
      this.getName = this.getName.bind(this);
      this.getTemp = this.getTemp.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({value: event.target.value});
      }
      getName(event) {
        this.setState({name: event.target.value});
      }
      getTemp(event) {
        this.setState({temp: event.target.value});
      }
    handleSubmit(event) {
      console.log('提交的名字: ' + this.state.name,'====你喜欢的风味是: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        const temperature = this.state.temp;
      return (
        <form onSubmit={this.handleSubmit} className="the_NameForm">
          <label>
            名字:
            <input type="text" className="form-control" value={this.state.name} onChange={this.getName} />
          </label>
          <br/>
          <label>
            请输入温度（0-200C）:
            <input type="text" className="form-control" value={this.state.temp} onChange={this.getTemp} />
          </label>
          <br/>
          <BoilingVerdict celsius={temperature} />
          <p>{'提交的名字:' +this.state.name}</p>
          <hr/>
          <label>
          选择你喜欢的风味:
          <select className="form-control" value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">柠檬</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
          <input type="submit" className="btn btn-success" value="提交" />
        </form>
      );
    }
  }

  export default NameForm;