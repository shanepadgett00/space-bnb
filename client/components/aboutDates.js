import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

export default class aboutDates extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment(),
      endDate: moment()
    }
    this.setStartDate = this.setStartDate.bind(this)
    this.setEndDate = this.setEndDate.bind(this)
  }

  setStartDate (date) {
    this.setState({
      startDate: date
    })
  }

  setEndDate (date) {
    this.setState({
      endDate: date
    })
  }

  render () {
    return (
      <Container className='text-center'>
        <Row>
          <Col xs='6'>
            Depature
          </Col>
          <Col xs='6'>
            Return
          </Col>
        </Row>
        <Row>
          <Col xs='6'>
            <DatePicker className='text-center pb-3 pt-3'
              selected={this.state.startDate}
              onChange={this.setStartDate}
            />
          </Col>
          <Col xs='6'>
            <DatePicker className='text-center pb-3 pt-3'
              selected={this.state.endDate}
              onChange={this.setEndDate}
            />
          </Col>
        </Row>
        <style global jsx>{`           
              .react-datepicker-wrapper input {
                background: transparent;
                color: #919aa1;
                border: 1px solid #919aa1;
              }
    
              .btn-outline-secondary:hover {
                color: #000 !important;
              }
        `}</style>
      </Container>
    )
  }
}
