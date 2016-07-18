import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/index'
import { bindActionCreators } from 'redux'

export class TicketUpdater extends Component {
  constructor(props) {
    super(props);
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
                if (!author.value.trim()
                      || !ticketNum.value.trim()
                      || !date.value.trim()
                      || !time.value.trim()
                      || !currentStatus.value.trim()
                      || !details.value.trim()) {
                      return
                }
                this.props.ticketUpdate({
                  author: author.value,
                  ticketNum: ticketNum.value,
                  date: date.value,
                  time: time.value,
                  currentStatus: currentStatus.value,
                  details: details.value
                    })
                author.value = ''
                ticketNum.value = ''
                date.value = ''
                time.value = ''
                currentStatus.value = ''
                details.value = ''

              }}>
              
              <div className="form-group">
                <label className="col-xs-1 control-label txtCol">Author</label>
                <div className="col-xs-7">
                  <input type="Author" className="form-control" 
                    placeholder="Who worked on the ticket?"
                    ref={node => { author = node }}>
                      </input>
                </div>
                <label className="col-xs-2 control-label txtCol">Ticket Number</label>
                <div className="col-xs-2">
                  <input type="ticketNum" className="form-control"
                    placeholder="Ticket number?"
                    ref={node => {ticketNum = node }}>
                      </input>
                </div>
              </div>
              
              <div className="form-group">
                <label className="col-xs-1 control-label txtCol">Date</label>
                <div className="col-xs-3">
                  <input type="date" className="form-control"
                    ref={node => {date = node }}>
                      </input>
                </div>

                <label className="col-xs-2 control-label txtCol">Time Spent</label>
                <div className="col-xs-2">
                  <input type="time" className="form-control"
                    ref={node => {time = node }}>
                      </input>
                </div>

                <label className="col-xs-2 control-label txtCol">Status</label>
                <div className="col-xs-2">
                  <select className="form-control"
                    ref={node => {currentStatus = node }}>
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
                    rows="5" ref={node => { details = node }}>
                      </textarea>
                </div>
              </div>

              <div className="form-group">
                <div className="col-xs-11 col-xs-offset-1">
                  <button type="Submit" className="btn">Submit</button>
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
