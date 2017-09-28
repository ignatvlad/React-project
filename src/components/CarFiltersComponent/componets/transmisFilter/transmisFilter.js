import React from 'react';
import style from "../../CarFiltersComponent.less";

import transmissions from '../../../../utils/transmissions';

class CarTransmisFiltersComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      transmissions: []
    };

    this.changeTransmission = this.changeTransmission.bind(this);
  }

  componentWillMount() {
    this.setState({transmissions: transmissions});
    this.props.changeTransmission(transmissions);
  }

  changeTransmission(transmisType, {target: {checked: value}}) {
    let selectedTransmission;

    if (value) {
      selectedTransmission = [...this.state.transmissions, transmisType];
    } else {
      selectedTransmission = this.state.transmissions.filter((el) => el !== transmisType)
    }

    this.setState({transmissions: selectedTransmission});
    this.props.changeTransmission(selectedTransmission);
  }

  render() {
    return (
      <div>
        {transmissions.map((transmission, key) => (
          <label key={`transmis-${key}`} >
            {transmission}
            <input type="checkbox" checked={this.state.transmissions.includes(transmission)} onChange={this.changeTransmission.bind(null, transmission)} />
          </label>
        ))}
      </div>
    )
  }
}

CarTransmisFiltersComponent.defaultProps = {
  transmissions: [],
  changeTransmission: (selectedTransmissions) => {console.log(selectedTransmissions)}
}

export default CarTransmisFiltersComponent;
