import React, { Component } from 'react'
import { Progress } from 'reactstrap'

export default class ProgressBar extends Component {
  render () {
    return (
      <div>
        <Progress className='mb-3' value={this.props.progressValue} />
        <style global jsx>{`           
          .progress {
            background-color: transparent !important;
            height: 2px !important;
          }
          .progress-bar {
            background: -webkit-linear-gradient(left, #33156d 0%,#f282bc 100%);
            height: 2px;
          }
        `}</style>
      </div>
    )
  }
}
