//your code here
import React, { Component } from 'react'


export default class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
// 1) BlogPost
//        "before all" hook:
//      TypeError: Enzyme::Selector does not support an array, null, or empty object as a selector
//this error means it needs to have the comment exported and import react!