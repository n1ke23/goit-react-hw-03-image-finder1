import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="Overlay" onClick={this.props.toggleModal}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="modalImage" />
        </div>
      </div>
    );
  }
}

export default Modal;
