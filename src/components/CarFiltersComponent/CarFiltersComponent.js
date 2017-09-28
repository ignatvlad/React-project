import React from 'react';
import TransmissionFilter from './componets/transmisFilter';
import NameFilter from './componets/nameFilter';
import PriceFilter from './componets/priceFilter';
import TypeFilter from './componets/cartypeFilter';
import SubmitButton from './componets/submitButton';
import style from './CarFiltersComponent.less'

class CarFiltersComponent extends React.Component {

  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault();
      }} className={style.formStyle}>
        <TransmissionFilter changeTransmission={this.props.changeTransmission} />
        <TypeFilter changeCarTypeFilter={this.props.onChangeTypeFilter} />
        <NameFilter changeCarNameFilter={this.props.onChangeNameFilter} />
        <PriceFilter changeCarPriceFilter={this.props.onChangePriceFilter} />
        <SubmitButton onSubmit={this.props} />
      </form>
    );
  }
}

export default CarFiltersComponent;
