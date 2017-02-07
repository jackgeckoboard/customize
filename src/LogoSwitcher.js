import React, { Component } from 'react';

class LogoSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isGeckoboard: true,
      isCustom: false,
      isBlank: false,
    };
  }

  componentWillMount(){
    if (this.props.currentLogoState == "Geckoboard"){
      this.setState({
        isGeckoboard: true,
        isCustom: false,
        isBlank: false,
      })
    }

    else if (this.props.currentLogoState == "Custom"){
      this.setState({
        isGeckoboard: false,
        isCustom: true,
        isBlank: false,
      })
    }

    else{
      this.setState({
        isGeckoboard: false,
        isCustom: false,
        isBlank: true,
      })
    }
  }


  onClickGeckoboard() {
    this.props.onLogoChanged("Geckoboard");
    if (!this.state.isGeckoboard){
      this.setState({
        isGeckoboard: true,
        isCustom: false,
        isBlank: false,
      })
    }
  }

  onClickCustom() {
    this.props.onLogoChanged("Custom");
    if (!this.state.isCustom){
      this.setState({
        isGeckoboard: false,
        isCustom: true,
        isBlank: false,
      })
    }
  }

  onClickNoLogo() {
    this.props.onLogoChanged("Blank");
    if (!this.state.isBlank){
      this.setState({
        isGeckoboard: false,
        isCustom: false,
        isBlank: true,
      })
    }
  }


  render() {

    var isGeckoboard = this.state.isGeckoboard;

    var isCustom = this.state.isCustom;

    var isBlank = this.state.isBlank;

    return (
      <div className=" br2 ba b--config-mid cf overflow-hidden">
          {isGeckoboard ? (
            <div className="gb-config-mid w-40 fl tc pa2 f6  pointer">
              Geckoboard
            </div>
          ) : (
            <div className="w-40 fl tc pa2  white-50 f6  pointer b1 br b--config-mid" onClick={this.onClickGeckoboard.bind(this)}>
              Geckoboard
            </div>
          )}

          {isCustom ? (
            <div className="w-30 gb-config-mid fl tc pa2 f6  pointer" >
              Custom
            </div>
          ) : (
            <div className="w-30 fl tc pa2 white-50 f6  b1 br b--config-mid pointer" onClick={this.onClickCustom.bind(this)}>
              Custom
            </div>
          )}

          {isBlank ? (
            <div className="w-30 gb-config-mid fl tc pa2 f6  pointer">
              No Logo
            </div>
          ) : (
            <div className="w-30 fl tc pa2 white-50 f6  pointer"  onClick={this.onClickNoLogo.bind(this)}>
              No Logo
            </div>
          )}


      </div>
    );
  }
}

export default LogoSwitcher;
