import React, { Component } from 'react'
import ThemeSwitcher from './ThemeSwitcher.js'
import CustomTheme from './CustomTheme.js'
import ThemeTabs from './ThemeTabs.js'
import FooterSwitch from './FooterSwitch.js'
import LogoSwitcher from './LogoSwitcher.js'
import NormalDashboard from './NormalDashboard.js'
import CustomizeDashboard from './CustomizeDashboard.js'
import TransitionGroup from 'react-addons-css-transition-group'
import Toast from './Toast.js'
import StarterPlanPanel from './StarterPlanPanel.js'
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
      logo: "Geckoboard",
      customizeMode: false,
      clockOn: true,
      imgSrc: "",
      scaleToFit: true,
      settingsMenuOpen: false,
      toastVisible: false,
      starterPlan: false
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

  onSwitchClock(i){
    if (this.state.clockOn){
      this.setState({
        clockOn: false
      })
    } else {
      this.setState({
        clockOn: true,
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

   onCustomColorChange(bgColor, textColor) {
     this.setState({
       bgColor:bgColor,
       textColor: textColor
     })
   }

   onWidgetColorChange(widgetColor){
     this.setState({
       widgetColor: widgetColor
     })
   }

   onTextColorChange(textColor){
     this.setState({
       textColor: textColor
     })
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

   onEnterCustomizeMode(){
     this.setState({
       customizeMode: true,
       settingsMenuOpen: false
     });
   }

   onExitCustomizeMode(){
     this.setState({
       customizeMode: false,
       toastVisible: true
     });
     setTimeout(function() { this.setState({toastVisible: false}); }.bind(this), 5000);
   }


   onFileChange(){
     // Assuming only image
     var file = this.refs.file.files[0];
     var reader = new FileReader();
     var url = reader.readAsDataURL(file);

      reader.onloadend = function (e) {
         this.setState({
             imgSrc: [reader.result]
         })
       }.bind(this);
     console.log(url) // Would see a path?
     // TODO: concat files
   }

   onFileReset(){
     this.setState({
      imgSrc: ""
     });
   }

   onScaleToFitSwitch(){

      if (this.state.scaleToFit) {
       this.setState({
         scaleToFit: false
       });
     }

     else {
      this.setState({
        scaleToFit: true
      });
    }
   }

   onOpenSettingsMenu(){
       this.setState({
         settingsMenuOpen: true
       });

   }

   onCloseSettingsMenu(){
     if (this.state.settingsMenuOpen){
       this.setState({
         settingsMenuOpen: false
       });
     }
   }

   onPlanTypeToggle(){
     if (this.state.starterPlan){
       this.setState({
         starterPlan: false
       })
     }
     else {
       this.setState({
         starterPlan: true
       })

     }
   }




  render() {

    var isCustomizeMode = this.state.customizeMode

    var isCustomLogo = (this.state.logo != "Blank")



    var clockOn = this.state.clockOn

    var dashboardBackgroundStyle = {
      background: this.state.bgColor
    }

    const maxHeightStyle = {
      maxHeight: 'calc(100vh - 100px)',
      overflowY: 'scroll'
    }

    let scaleToFit = this.state.scaleToFit

    const maxWidthDashboard = {
      maxWidth: "90rem"
    }

    let settingsMenuOpen = this.state.settingsMenuOpen

    const settingsMenuStyle = {
      right: "19rem"
    }

    const starterPlan = this.state.starterPlan

    return (
      <div className="App white sans-serif relative" onClick={this.onCloseSettingsMenu.bind(this)}>
        <div className="bg-dark-gray cf pv2 ph3">
          <div className="w-10 fl">
            <img src="https://d2s28ygc2k7998.cloudfront.net/images/masthead-logo-green.svg" className="w2 h2 br2"/>
          </div>
          <div className="w-90 fl tr f6">
            <p className="ma2" onClick={this.onPlanTypeToggle.bind(this)}><span className="mr3">Screens</span> <span className="mr3" >Help</span> J</p>
          </div>
        </div>


        {isCustomizeMode ? (
          <div className="bg-mid-gray cf pa3">
            <div className="w-50 fl">
              <p className="f6 ma0"><span className="fw6 mr4">Dashboard Title</span><i className="fa fa-angle-right mr2"></i><span className="ml3">Customize appearance</span></p>
            </div>
            <div className="w-50 fl">
              <div className="fr dib">
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-mid-gray cf pv2 ph3">
            <div className="w-40 fl">
              <p className="f6 pv2 ma0"><span className="fw6 mr3">Dashboard Title</span></p>
            </div>
            <div className="w-60 fl">
              <div className="fr dib">
                <p className="f6 ma0 dib mr5 dim pointer"><i className="fa fa-share mr2"></i>Share</p>
                <p className="f6 ma0 dib mr5 dim pointer" onClick={this.onOpenSettingsMenu.bind(this)}><i className="fa fa-cog mr2" ></i>Settings</p>
                <p className="f6 ma0 dib mr5 dim pointer"><i className="fa fa-expand mr2"></i>Full screen</p>
                <div className="bg-gb-green br2 pv2 ph3 ma0 f6 dib dim pointer"><i className="fa fa-plus mr2"></i>Add widget</div>
              </div>
            </div>
          </div>
        )}
        {settingsMenuOpen &&
                  <div className="absolute f6 bg-light-gray br2 br--bottom dark-gray pa0 overflow-hidden shadow-2" style={settingsMenuStyle}>
                    <ul className="list pa0 ma0">
                      <li className="pv3 ph3 bg-animate hover-bg-white pointer" onClick={this.onEnterCustomizeMode.bind(this)}>Customize appearance</li>
                      <li className="pv3 ph3 bg-animate hover-bg-white pointer">Dashboard settings</li>
                    </ul>
                  </div>
                  }





        <div  className="cf" style={maxWidthDashboard}>
          {this.state.customizeMode &&
          <div className="cf w-30 fl relative ofy-scr" style={maxHeightStyle}>
            <div className="ma3  br2 gb-config-dark overflow-hidden">
              <div className="bb b--gb-config-mid pa3">
                <ThemeTabs onThemeTypeChange={this.onThemeTypeChange.bind(this)} customTheme={this.state.customTheme}/>
              </div>
              <div className="pa3">
                {!this.state.customTheme &&
                <ThemeSwitcher starterPlan={starterPlan} onChangeParentStyle={this.onThemeChange.bind(this)} theme={(this.state.bgColor == "#101214") ? "dark" : ""} />
                }
                {this.state.customTheme &&
                <CustomTheme bgColor={this.state.bgColor} widgetColor={this.state.widgetColor} onCustomColorChange={this.onCustomColorChange.bind(this)} onWidgetColorChange={this.onWidgetColorChange.bind(this)} onTextColorChange={this.onTextColorChange.bind(this) }
                starterPlan={starterPlan}
                  />
                }
              </div>

            </div>
            <div className="ma3 cf br2 gb-config-dark overflow-hidden">
              <FooterSwitch onFooterSwitched={this.onFooterSwitched.bind(this)} />
                {this.state.footerOn &&
                  <div className="pa3">
                    <LogoSwitcher currentLogoState={this.state.logo} onLogoChanged={this.onLogoChanged.bind(this)}
                    starterPlan={starterPlan}/>
                      {isCustomLogo && this.state.imgSrc.length == 0  &&
                      <div className="br2 bg-white-10 bw2 mb2 ph3 pv4 tc">
                        <i className="fa fa-cloud-upload mr2 f2 silver mb2"></i><br />
                        Drop logo here or
                      <input
                              ref="file"
                              type="file"
                              name="user[image]"
                              multiple="true"
                              value=""
                              className="o-0 di w0"
                              id="uploadFile"
                              onChange={this.onFileChange.bind(this)}/>
                            <label htmlFor="uploadFile" className="gb-green dim pointer di"> choose file</label>
                      </div>

                      }

                      {isCustomLogo && this.state.imgSrc.length > 0 &&
                        <div>
                        <div className="br2 hide-child relative" style={dashboardBackgroundStyle}>
                          <div className="ph5 pv4">
                            <img src={this.state.imgSrc}/>
                          </div>
                          <div onClick={this.onFileReset.bind(this)} className="br2 absolute bg-black-50 w-100 h-100 left-0 top-0 child tc ma0 link pointer dim f6 white pt4">
                            <i className="fa fa-trash-o mr3"></i>Remove
                          </div>
                        </div>

                      </div>
                    }
                    <div className="cf pt4 pb3">
                      <p className="fl ma0">Clock</p>
                        {clockOn ? (
                          <div className="fr br4 bg-gb-green pa1 pointer" onClick={this.onSwitchClock.bind(this)} >
                            <div className="fr w1 h1 ml4 bg-white br3"></div>
                          </div>
                        ) : (
                            <div className="fr br4 bg-silver pa1 pointer" onClick={this.onSwitchClock.bind(this)} >
                              <div className="fl w1 h1 mr4 bg-white br3"></div>
                            </div>
                        )}
                      </div>
                  </div>
                }
            </div>


            <div className="ma3 cf br2 gb-config-dark overflow-hidden">
            {scaleToFit ? (
            <div className="pa3 pointer" onClick={this.onScaleToFitSwitch.bind(this)}>
              Scale to Fit

                  <div className="fr br4 bg-gb-green pa1">
                    <div className="fr w1 h1 ml4 bg-white br3"></div>
                  </div>


              </div>
              ) :
              <div className="pa3  pointer" onClick={this.onScaleToFitSwitch.bind(this)}>
                Scale to Fit


                      <div className="fr br4 bg-silver pa1">
                        <div className="fl w1 h1 mr4 bg-white br3"></div>
                      </div>

                </div>
                }

            </div>

            { starterPlan && <StarterPlanPanel /> }


            <div className="w-100 pa3 mb5">
              <button className="bg-gb-green br2 pv2 ph3 fr white bn dim pointer" onClick={this.onExitCustomizeMode.bind(this)}>Save</button>
              <button className="bg-light-gray br2 pv2 ph3 fr near-black mr3 bn dim pointer" onClick={this.onExitCustomizeMode.bind(this)}>Cancel</button>
            </div>
        </div>
        }

        {isCustomizeMode ? (
          <CustomizeDashboard bgColor={this.state.bgColor} widgetColor={this.state.widgetColor} textColor={this.state.textColor} footerOn={this.state.footerOn} clockOn={this.state.clockOn} logo={this.state.logo} imgSrc={this.state.imgSrc} scaleToFit={this.state.scaleToFit}/>
        ) : (
          <NormalDashboard bgColor={this.state.bgColor} widgetColor={this.state.widgetColor} textColor={this.state.textColor} />
        )}

        <TransitionGroup transitionName="toast">
            { this.state.toastVisible && <Toast key="success" transitionEnterTimeout={500} /> }

        </TransitionGroup>



      </div>



        </div>


    );
  }
}

export default App;
