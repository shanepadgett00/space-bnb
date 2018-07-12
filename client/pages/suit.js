import React, { Component } from 'react'
import Logo from '../components/Global/Logo'
import ProgressBar from '../components/ProgressBar'
import { Container, Row, Col, Jumbotron } from 'reactstrap'
import SuitNav from '../components/Suit/SuitNav'
import SpaceScreen from '../components/Global/SpaceScreen'
import SuitModel from '../components/Suit/SuitModel'
import SuitDetail from '../components/Suit/SuitDetail'
import suitConfig from '../components/Suit/suitConfig'

export default class Resort extends Component {
  constructor (props) {
    super(props)

    this.changeSuit = this.changeSuit.bind(this)
    this.state = {
      suit: 'emu'
    }
  }
  static async getInitialProps ({ query }) {
    return { query }
  }

  changeSuit (key) {
    this.setState({
      suit: key
    })
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <SpaceScreen />
        <Logo />
        <SuitNav />
        <ProgressBar progressValue='60' />
        <Jumbotron className='pt-4'>
          <Container>
            <h1 className='display-4'>{this.props.query.name}</h1>
            <p className='lead'>Available spacesuits:</p>
            <Row>
              <Col md='5' lg='4' className='mb-3'>
                <SuitModel model={suitConfig[this.state.suit].model} />
              </Col>
              <Col md='7' lg='8'>
                <SuitDetail rocket={suitConfig[this.state.rocket]} rocketConfig={suitConfig} changeSuit={this.changeSuit} />
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <style global jsx>{`          
          .card {
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
        `}</style>
      </div>
    )
  }
}
