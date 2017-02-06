import React, { Component } from 'react';

class LogoSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isCustom: false
    };
  }


  onClickGeckoboard() {
    this.props.onLogoChanged("Geckoboard")
    if (this.state.isCustom){
      this.setState({
        isCustom: false
      })
    }
  }

  onClickCustom() {
    this.props.onLogoChanged("Custom")
    if (!this.state.isCustom){
      this.setState({
        isCustom: true
      })
    }
  }

  onClickNoLogo() {
    this.props.onLogoChanged("Blank")
    if (!this.state.isCustom){
      this.setState({
        isCustom: true
      })
    }
  }


  render() {

    var isCustom = this.state.isCustom;

    return (
      <div className="gb-background br2 ba b--dark-gray cf overflow-hidden">
          {isCustom ? (
            <div className="w-50 fl tc pa2 white-50 f6 fw5 pointer" onClick={this.onClickStandard.bind(this)}>
              Theme
            </div>
          ) : (
            <div className="w-50 gb-config-mid fl tc pa2 f6 fw5 pointer">
              Theme
            </div>
          )}

          {!isCustom ? (
            <div className="w-50 fl tc pa2 white-50 f6 fw5 pointer" onClick={this.onClickCustom.bind(this)}>
              Custom
            </div>
          ) : (
            <div className="w-50 gb-config-mid fl tc pa2 f6 fw5 pointer">
              Custom
            </div>
          )}


      </div>
    );
  }
}

export default LogoSwitcher;
