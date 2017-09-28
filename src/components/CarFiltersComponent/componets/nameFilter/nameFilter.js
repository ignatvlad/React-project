import React from 'react';
import style from "../../CarFiltersComponent.less";

class CarNameFiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carName: ""
    }

    this.changeCarName = this.changeCarName.bind(this);
  }

  changeCarName({target: {value}}) {
    this.setState({carName: value});
    this.props.changeCarNameFilter(value);
  }


  render() {
    return (
      <div>
        <label className={style.labelStyle}>Car name:
          <input id="name" type="text" className={style.inputTxtStyle} value={this.state.carName} onChange={this.changeCarName} placeholder="enter car name"/>
        </label>
      </div>
    )
  }
}

CarNameFiltersComponent.defaultProps = {
  carName: ""
}

export default CarNameFiltersComponent;
