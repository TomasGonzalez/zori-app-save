import React, { PureComponent } from "react";

class Hoverable extends PureComponent {
  state = {
    isHovering: false,
  };

  render() {
    return (
      <div
        onMouseEnter={() => this.setState({ isHovering: true })}
        onMouseLeave={() => this.setState({ isHovering: false })}
      >
        {this.props.children(this.state.isHovering)}
      </div>
    );
  }
}

export default Hoverable;
