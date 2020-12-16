import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {this.props.opacity >= 0.2 ? <ColorBox opacity={this.props.opacity - 0.1} /> : null}
        {/* take away .1 percent of opacity for each color box till the opacity is .1 then do nothing. we use 0.2 because once it goes through at 0.2 - 0.1 = 0.1 and will stop */}
      </div>
    )
  }

}
// another solution:
// if(this.props.opacity >= 0.2) {
//   return (
//     <div className="color-box" style={{opacity: this.props.opacity}}>
//       <ColorBox opacity={this.props.opacity - 0.1} />
//     </div>
//   )
// } else {
//   return null
// }
// }

