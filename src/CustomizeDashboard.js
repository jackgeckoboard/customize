import React, { Component } from 'react';
import logo from './logo.svg'
import wires from './wires.svg'

class CustomizeDashboard extends Component {


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

    var isCustomLogo=(this.props.imgSrc!="")

    var logoOff=(this.props.logo == "Blank")

    const tvStyle = {
      background: 'black',
      boxShadow: '0 10px 50px 0 rgba(0,0,0,0.5)',
    }

    const lightStyle = {
      width: '5px',
      height: '5px',
      float: 'right',
      border: '1px solid #80B636',
      borderRadius: '50%',
      marginTop: '1rem',
      marginRight: '0.5rem'
    }

    const scaleDown = {
      transform: "scale(0.90)",
      transformOrigin: "50%",
    }

    const containerStyle = {
      maxHeight: "calc(100vh - 100px)",
      overflow: 'hidden'
    }




    return (
      <div className="w-70 fl" style={containerStyle}>
      <div className="mt3" style={scaleDown}>
      <div className="ph3 pt3 pb4" style={tvStyle}>
      <div className="pa2" style={dashboardStyle} >

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
        {this.props.footerOn ?
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

        </div> :
        <div className="cf mh1 o-0"><h1 className="pa1 fw5 f2 mv2 dib">Footer Hidden</h1></div>
      }
      </div>
      <div style={lightStyle}></div>
    </div>
    <img src={wires} className="center db" />
    </div>
    </div>
    );
  }
}

export default CustomizeDashboard;
