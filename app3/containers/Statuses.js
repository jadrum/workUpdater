import React from 'react'
import Status from '../components/Status'
import CurrentTask from '../components/CurrentTask'
import UpdateStatus from '../components/UpdateStatus'
import PreviousUpdates from '../components/PreviousUpdates'

class Statuses extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Status status={this.props.status}/>
        <UpdateStatus  updateStatus={this.props.updateStatus} />
        <CurrentTask currentTask={this.props.currentTask} task={this.props.task} />
        <PreviousUpdates status={this.props.status} />
      </div>
    )
  }
}

export default Statuses
