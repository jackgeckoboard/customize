import React, { Component } from 'react';
import logo from './logo.svg'

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

    var isCustomLogo=(this.props.imgSrc!="")

    var logoOff=(this.props.logo == "Blank")


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

          {!logoOff &&

          <div className="fl w-30 pa3 tr">

            { isCustomLogo ? <img src={this.props.imgSrc} className="h2"/> :
              <img src={logo} className=" h2 mr3"/>
            }

          </div>
        }

        </div>
      }
      </div>
    );
  }
}

export default CustomizeDashboard;
