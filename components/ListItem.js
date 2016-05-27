import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'


export default class ListItem extends Component {
  render() {
    const {id, title} = this.props
    return (
      <div>
        <Link to={`/topic/${id}`}>{title}</Link>
      </div>
    )
  }
}

ListItem.propTypes = {
  title: PropTypes.string.isRequired
}