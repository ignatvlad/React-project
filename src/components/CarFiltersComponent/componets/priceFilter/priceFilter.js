import React from 'react';
import style from "../../CarFiltersComponent.less";

class CarPriceFiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carPrice: ""
    }

    this.changeCarPrice = this.changeCarPrice.bind(this);
  }

  changeCarPrice({target: {value}}) {
    if (value >= 0) {
      this.setState({carPrice: value});
      this.props.changeCarPriceFilter(value);
    }
  }


  render() {
    return (
      <div>
        <label className={style.labelStyle}>Car price, $:
          <input id="price" type="number" step={1000}
                className={style.inputTxtStyle}
                value={this.state.carPrice}
                onChange={this.changeCarPrice}
                placeholder="enter max car price"
          />
        </label>
      </div>
    )
  }
}

CarPriceFiltersComponent.defaultProps = {
  carPrice: ""
}

export default CarPriceFiltersComponent;
