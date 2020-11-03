import React, { Component } from 'react';
import goatData from '../helpers/data/goatData';
import Goat from '../Goat';

export default class GoatCorral extends Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    goatData.getGoats().then((response) => {
      this.setState({
        goats: response,
      });
    });
  }

  render() {
    const { goats } = this.state;
    const renderGoatToDom = () => (
      goats.map((goat) => <Goat key={goat.id} goat={goat} />)
    );

    return (
    <div>
      {renderGoatToDom()}
    </div>
    );
  }
}
