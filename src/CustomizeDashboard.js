import React, { Component } from 'react';

class CustomizeDashboard extends Component {


  render() {



    var widgetStyle={
      background: this.props.widgetColor
    }

    var textStyle={
      color: this.props.textColor
    }

    var dashboardStyle={
      transform: "scale(0.95)",
      transformOrigin: "50%",
      background: this.props.bgColor
    }

    var currentdate = new Date();


    return (
      <div className="w-70 fl pa2" style={dashboardStyle} >

        <div className="cf mh1">
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
        </div>

        <div className="cf mh1">
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
          <div className="fl w-25 pa1">
            <div className="h5" style={widgetStyle}></div>
          </div>
        </div>
        {this.props.footerOn &&
        <div className="cf mh1 ">


          <div className="fl w-70 pa1">
            <h1 className="fw5 f2 mv2 dib" style={textStyle}>

            {this.props.clockOn &&
              <span className="o-50 mr2 fw3">12:35</span>
            } Dashboard Title</h1>
          </div>
          <div className="fl w-30 pa3 tr">

            {this.props.logo === "Geckoboard" &&
              <img src="https://d2s28ygc2k7998.cloudfront.net/images/masthead-logo-green.svg" className="w2 h2 br2 mr3"/>
            }

            {this.props.logo === "Custom" &&
              <img src={this.props.imgSrc} className="h2"/>
            }

          </div>

        </div>
      }
      </div>
    );
  }
}

export default CustomizeDashboard;
