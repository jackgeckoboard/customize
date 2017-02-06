import React, { Component } from 'react';
import ThemeSwitcher from './ThemeSwitcher.js'
import ThemeTabs from './ThemeTabs.js'
import FooterSwitch from './FooterSwitch.js'
import LogoSwitcher from './LogoSwitcher.js'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: "#101214",
      widgetColor: "#2A2A2A",
      textColor: "#EEEEEE",
      customTheme: false,
      footerOn: true,
      logo: "Geckoboard"
    };
  }

  onThemeTypeChange(isCustom){
    if (isCustom){
      this.setState({
        customTheme: true
      })
    } else {
      this.setState({
        customTheme: false,
      })
    }
  }

  onThemeChange(bgColor, widgetColor, textColor) {
     this.setState({
       bgColor: bgColor,
       widgetColor: widgetColor,
       textColor: textColor
     });
   }

   onFooterSwitched(footerOn){
     if (footerOn){
       this.setState({
         footerOn: true
       })
     } else {
       this.setState({
        footerOn: false,
       })
     }
   }

   onLogoChanged(logoType){
     this.setState({
       logo: logoType
     })
   }

  render() {

    var widgetStyle={
      background: this.state.widgetColor
    }

    var textStyle={
      color: this.state.textColor
    }

    var dashboardStyle={
      transform: "scale(0.95)",
      transformOrigin: "50%",
      background: this.state.bgColor
    }

    var fullHeight={
      height: "calc(100vh - 99px)"
    }

    return (
      <div className="App white sans-serif" >
        <div className="bg-dark-gray cf pa2">
          <div className="w-10 fl">
            <img src="https://d2s28ygc2k7998.cloudfront.net/images/masthead-logo-green.svg" className="w2 h2 br2"/>
          </div>
          <div className="w-90 fl tr f6">
            <p className="ma2"><span className="mr3">Screens</span> <span className="mr3">Help</span> J</p>
          </div>
        </div>
        <div className="bg-mid-gray cf pa3">
          <div className="w-50 fl">
            <p className="f6 ma0"><span className="fw6 mr3">Dashboard Title</span>><span className="ml3">Edit Theme</span></p>
          </div>
          <div className="w-50 fl">
            <div className="fr dib">

            </div>
          </div>
        </div>
        <div  className="cf gb-background">
          <div className=" cf w-30 fl relative" style={fullHeight}>
            <div className="ma3  br2 gb-config-dark overflow-hidden">
              <div className="gb-config-mid pa3">
                <ThemeTabs onThemeTypeChange={this.onThemeTypeChange.bind(this)}/>
              </div>
              <div className="pa3">
                {!this.state.customTheme &&
                <ThemeSwitcher onChangeParentStyle={this.onThemeChange.bind(this)} />
                }
              </div>

            </div>
            <div className="ma3  br2 gb-config-dark overflow-hidden">
              <FooterSwitch onFooterSwitched={this.onFooterSwitched.bind(this)} />
                {this.state.footerOn &&
                  <div className="pa3">
                    <p>Logo</p>
                    <LogoSwitcher onLogoChanged={this.onLogoChanged.bind(this)} />

                  </div>
                }
            </div>
            <div className="absolute bottom-0 w-100 pa4 bg-black-10">
              <button className="bg-gb-green br2 pv2 ph3 fr white bn dim">Save</button>
              <button className="bg-light-gray br2 pv2 ph3 fr near-black mr3 bn dim">Cancel</button>
            </div>
        </div>


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
          {this.state.footerOn &&
          <div className="cf mh1 ">

            <div className="fl w-70 pa1">
              <img src="https://d2s28ygc2k7998.cloudfront.net/images/masthead-logo-green.svg" className="w2 h2 br2 mr3"/><h1 className="fw4 f2 mv2 dib" style={textStyle}>Dashboard Title</h1>
            </div>
            <div className="fl w-30 pa1 tr">
              <h3 className="fw4 f4 mt3 mb2 o-60" style={textStyle}>15:10, 30 January 2017</h3>
            </div>

          </div>
        }
        </div>
      </div>
        </div>


    );
  }
}

export default App;
