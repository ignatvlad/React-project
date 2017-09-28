import React from 'react';
import style from "../../CarFiltersComponent.less";

class CarTypeFiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartype: "no type"
    }

    this.changeType = this.changeType.bind(this);
  }

  changeType(e) {
      this.setState({cartype: e.target.value});
      this.props.changeCarTypeFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <label className={style.labelStyle}>Type:
          <select className={style.inputTxtStyle}
                  onChange = {(event) => {
                      event.preventDefault();
                      this.changeType(event);
            }}>
            <option value="no cartype selected" selected> --- </option>
            <option value="sedan" >sedan</option>
            <option value="crossover" >crossover</option>
            <option value="hatchback" >hatchback</option>
            <option value="coupe" >coupe</option>
            <option value="universal" >universal</option>
            <option value="minivan" >minivan</option>
         </select>
        </label>
      </div>
   )
 }
}

CarTypeFiltersComponent.defaultProps = {
  cartype: "no type"
}

export default CarTypeFiltersComponent;
