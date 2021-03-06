import React, { Component } from 'react';

import Event from './Event';
import workshopConfig from 'workshopConfig';
import './Conf.scss';

class Workshops extends Component {
  static displayName = 'Workshops';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const events = workshopConfig.map((ele, idx) => {
      return (
        <Event key={`${ele.title}-${idx}`}
          title={ele.title}
          author={ele.author}
          bullets={ele.extra}
          description={ele.description}
          sessions={ele.sessions} 
          leftCol/>
      );
    }); 

    return (
      <span>
        {events}
      </span>
    );
  }
}

export default Workshops;
