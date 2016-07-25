import React from 'react'

class UpdateStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { details: '' }
    this.onDetailsChange = this.onDetailsChange.bind(this);
  }

  onDetailsChange(e) {
    this.setState({
      details: e.target.value
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">  
            <form className="form-horizontal top gradient" 
              onSubmit={e => {
                e.preventDefault()
                if (!this.refs.details.value.trim()) {
                  return
                }
                this.props.updateStatus(this.refs.details.value)
                this.setState({
                  details: ''
                })
              }}>
              <div className="form-group">
                <label className="col-xs-2 control-label txtCol">Work Status:</label>
                <div className="col-xs-10">
                  <textarea className="form-control" placeholder="What have you been working on? 
                    What do you plan to work on next?"
                    rows="5" ref="details"
                    onChange={this.onDetailsChange}
                    value={this.state.details}>
                      </textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-xs-10 col-xs-offset-2">
                  <button type="Submit" className="btn btn-custom">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateStatus
