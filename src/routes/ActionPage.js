import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

const ActionView = (props) => {
  return (
    <div>
      <div>The Player: {props.player}</div>
      <div>The Game: {props.game}</div>
      <div>Current Score: {props.score}</div>
    </div>
  );
};

class ActionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'Player_1',
      game: 'Game_1',
      score: 0
    };
  }

  render() {
    return (
      <div>
        <ActionView {...this.state}/>
      </div>
    );
  }
}

ActionPage.propTypes = {
};

export default ActionPage;
