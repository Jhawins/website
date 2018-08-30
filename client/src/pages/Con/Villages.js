import React, { Component } from 'react';

import Event from './Event';
import villageConfig from 'villageConfig';
import './Con.scss';

class Villages extends Component {
  static displayName = 'Villages';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {};
  static defaultProps = {};

  render() {
    const events = villageConfig.map((ele, idx) => {
      return (
        <Event key={`${ele.title}-${idx}`}
          title={ele.title}
          author={ele.author}
          bullets={ele.extra}
          description={ele.description} />
      );
    }); 

    return (
      <span>
        <div className='tab-title'>Villages</div>
        {events}
      </span>
    );
  }
}

export default Villages;
