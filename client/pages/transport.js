import React, { Component } from 'react'
import TransportNav from '../components/Transport/TransportNav'
import ProgressBar from '../components/ProgressBar'
import TransportModel from '../components/Transport/TransportModel'
import TransportDetail from '../components/Transport/TransportDetail'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import Logo from '../components/Global/Logo'
import SpaceScreen from '../components/Global/SpaceScreen'

export default class transport extends Component {
  static async getInitialProps ({ query }) {
    return { query }
  }

  render () {
    return (
      <div className='transport'>
        <SpaceScreen />
        <Logo />
        <TransportNav />
        <ProgressBar progressValue='60' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Available transport:</p>
            <Row>
              <Col sm='6'>
                <TransportModel />
              </Col>
              <Col sm='6'>
                <TransportDetail />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`          
          .card {
            border: 1px solid #fff !important;
            background: transparent !important;
          }
          .jumbotron {
            background: transparent !important;
          }
          .display-4,
          .planet-nickname {
            color: #fff;
          }
          hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid #fff !important;
            margin: 1em 0;
            padding: 0; 
          }
          .scroll-card {
            height: 220px;
            overflow: scroll;
            border: none !important;
          }
        `}</style>
      </div>
    )
  }
}