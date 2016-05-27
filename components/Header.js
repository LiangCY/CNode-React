import React, {Component, PropTypes} from 'react'
import {Link, IndexLink} from 'react-router'

import '../style/header.css'

export default class Header extends Component {
  render() {
    return (
      <ul id="nav">
        <li><IndexLink to="/" activeClassName="active">ALL</IndexLink></li>
        <li><Link to="/share" activeClassName="active">分享</Link></li>
        <li><Link to="/ask" activeClassName="active">问答</Link></li>
        <li><Link to="/job" activeClassName="active">招聘</Link></li>
        <li><Link to="/good" activeClassName="active">精华</Link></li>
      </ul>
    )
  }
}