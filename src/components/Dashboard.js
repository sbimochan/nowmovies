import React, {Component} from 'react';
import MediaColumn from './MediaColumn';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {

    return (
      <div class="container">
        <MediaColumn/>
        <MediaColumn/>
      </div>

    )
  }

}
export default Dashboard;