import React, { Component } from 'react';
import panelBackground from './panel-background.svg'

class StarterPlanPanel extends Component {


  render() {

  const panelStyle={
    backgroundColor: "#5C6B78",
    backgroundImage: " url("+  panelBackground  + ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center"
  }

    return (
      <div className="pv3 ph4 br2 cf ma3" style={panelStyle}>
        <p className="fw5">
          Upgrade to save your custom theme
        </p>
        <p className="lh-copy f6">
          <span className="fw5">Navy theme</span> and <span className="fw5">custom logo</span> aren't available on your current plan and won't be saved.
        </p>
        <button className="bg-transparent gb-green b--none pl0 dim pointer pb2">Upgrade</button>

        <button className="bg-transparent gb-green ml2 b--none dim pointer pb2">Learn more</button>
      </div>
    );
  }
}

export default StarterPlanPanel;
