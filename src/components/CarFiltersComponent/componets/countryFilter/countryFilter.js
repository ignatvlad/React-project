import React from 'react';
import style from "../../CarFiltersComponent.less";

class CarCountryFiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      country: "no country"
    }

    this.changeChecked = this.changeChecked.bind(this);
  }

  changeChecked(e) {
      e.preventDefault();
      this.setState({country: e.target.value});
  }

  render() {
    return (
      <div>
        <label className={style.labelStyle}>Country:
          <select className={style.inputTxtStyle} onChange = {(event) => {this.changeChecked(event)}}>
            <option value="no country" selected> --- </option>
            <option value="de" >Germany</option>
            <option value="jp" >Japan</option>
            <option value="uk" >UK</option>
            <option value="us" >USA</option>
            <option value="cn" >China</option>
         </select>
       </label>
     </div>
    )
  }
}

CarCountryFiltersComponent.defaultProps = {
  country: "no country"
}

export default CarCountryFiltersComponent;
