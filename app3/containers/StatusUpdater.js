import React from 'react'
import Status from '../components/Status'
import CurrentTask from '../components/CurrentTask'
import UpdateStatus from './UpdateStatus'
import PreviousUpdates from '../components/PreviousUpdates'

class Updater extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Status status={this.props.status}/>
        <UpdateStatus  />
        <CurrentTask currentTask={this.props.currentTask} />
        <PreviousUpdates status={this.props.status} />
      </div>
    )
  }
}

export default Updater
