import React, {Component, PropTypes} from 'react'

class Updater extends Component {
  constructor(props) {
    super(props);

  }
/*
  var pStyle = {
    text-align: 'center',
    border-radius: '5px',
    background-color: '#f2f2f2'
  };
*/
  render() {
    const { value, onWorking, onMeeting } = this.props;
    return (
      <p>
        <p>
          I am <span>{value}</span>
        </p>
        {' '}
        <button onClick={onWorking}>Working</button>
        {' '}
        <button onClick={onMeeting}>At a meeting</button>
      </p>
    )
  }
}

Updater.propTypes = {
  value: PropTypes.string.isRequired,
  onWorking: PropTypes.func.isRequired,
  onMeeting: PropTypes.func.isRequired
}

export default Updater;
