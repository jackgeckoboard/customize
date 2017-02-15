import React, { Component } from 'react';

class Toast extends Component {


  render() {

  const toastStyle={
    width: "26rem"
  }

    return (
      <div className="bg-gb-green pa4 br2 absolute bottom-1 left-1 cf" style={toastStyle}>
        <div className="w-10 fl pt2">
          👍
        </div>
        <div className="w-90 fl">
        <p className="ma0 pa0">Changes applied. The footer will be shown when the dashboard is full screen.</p>
        </div>
      </div>
    );
  }
}

export default Toast;
