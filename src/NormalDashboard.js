import React, { Component } from 'react';

class NormalDashboard extends Component {


  render() {

    var widgetStyle={
      background: this.props.widgetColor
    }

    var textStyle={
      color: this.props.textColor
    }

    var dashboardStyle={
      background: this.props.bgColor
    }

    return (
      <div className="w-100 fl pa2" style={dashboardStyle} >

        <div className="cf mh1">
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
        </div>

        <div className="cf mh1">
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h6" style={widgetStyle}></div>
          </div>
        </div>


        </div>
    );
  }
}

export default NormalDashboard;
