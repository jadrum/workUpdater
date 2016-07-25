import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

export class TicketUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      ticketNum: '',
      date: '',
      time: '',
      currentStatus: 'In Progress',
      details: ''
    }
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onTicketNumChange = this.onTicketNumChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onCurrentStatusChange = this.onCurrentStatusChange.bind(this);
    this.onDetailsChange = this.onDetailsChange.bind(this);
  }
  
  onAuthorChange(e) {
    this.setState({
      author: e.target.value
    })
  }

  onTicketNumChange(e) {
    this.setState({
      ticketNum: e.target.value
    })
  }
  
  onDateChange(e) {
    this.setState({
      date: e.target.value
    })
  }

  onTimeChange(e) {
    this.setState({
      time: e.target.value
    })
  }

  onCurrentStatusChange(e) {
    this.setState({
      currentStatus: e.target.value
    })
  }

  onDetailsChange(e) {
    this.setState({
      details: e.target.value
    })
  }

  render() {
    let author, ticketNum, date, time, currentStatus, details;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12">
            <form className="form-horizontal top form-format"
              onSubmit={e => {
                e.preventDefault()
                if (!this.refs.author.value.trim()
                      || !this.refs.ticketNum.value.trim()
                      || !this.refs.date.value.trim()
                      || !this.refs.time.value.trim()
                      || !this.refs.currentStatus.value.trim()
                      || !this.refs.details.value.trim()) {
                      return
                }
                this.props.ticketUpdate({
                  author: this.refs.author.value,
                  ticketNum: this.refs.ticketNum.value,
                  date: this.refs.date.value,
                  time: this.refs.time.value,
                  currentStatus: this.refs.currentStatus.value,
                  details: this.refs.details.value
                })
                this.setState({
                  author: '',
                  ticketNum: '',
                  date: '',
                  time: '',
                  currentStatus: '',
                  details: ''
                })
              }}>
              
              <div className="form-group">
                <label className="col-xs-1 control-label txtCol">Author</label>
                <div className="col-xs-7">
                  <input type="Author" className="form-control" 
                    placeholder="Who worked on the ticket?"
                    ref="author"
                    onChange={this.onAuthorChange}
                    value={this.state.author}>
                      </input>
                </div>
                <label className="col-xs-2 control-label txtCol">Ticket Number</label>
                <div className="col-xs-2">
                  <input type="ticketNum" className="form-control"
                    placeholder="Ticket number?"
                    ref="ticketNum"
                    onChange={this.onTicketNumChange}
                    value={this.state.ticketNum}>
                      </input>
                </div>
              </div>
              
              <div className="form-group">
                <label className="col-xs-1 control-label txtCol">Date</label>
                <div className="col-xs-3">
                  <input type="date" className="form-control"
                    ref="date"
                    onChange={this.onDateChange}
                    value={this.state.date}>
                      </input>
                </div>

                <label className="col-xs-2 control-label txtCol">Time Spent</label>
                <div className="col-xs-2">
                  <input type="time" className="form-control"
                    ref="time"
                    onChange={this.onTimeChange}
                    value={this.state.time}>
                      </input>
                </div>

                <label className="col-xs-2 control-label txtCol">Status</label>
                <div className="col-xs-2">
                  <select className="form-control"
                    ref="currentStatus"
                    onChange={this.onCurrentStatusChange}
                    value={this.state.currentStatus}>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                      <option value="Reopened">Reopened</option>
                      <option value="Closed">Closed</option>
                        </select>
                </div>
              </div>

              <div className="form-group">
                <label className="col-xs-1 control-label txtCol">Details</label>
                <div className="col-xs-11">
                  <textarea className="form-control" placeholder="What have you been working on?
                    What do you plan to work on next?"
                    rows="5" ref="details"
                    onChange={this.onDetailsChange}
                    value={this.state.details}>
                      </textarea>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-11 col-xs-offset-1">
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


export default TicketUpdater
