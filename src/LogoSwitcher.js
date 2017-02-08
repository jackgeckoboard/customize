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
      <div className="cf pt2 pb3">
        <p className="fl ma0">Logo</p>

      {!isBlank ? (
        <div className="fr br4 bg-gb-green pa1 pointer"  onClick={this.onClickNoLogo.bind(this)}>
          <div className="fr w1 h1 ml4 bg-white br3"></div>
        </div>
      ) : (
          <div className="fr br4 bg-silver pa1 pointer" onClick={this.onClickCustom.bind(this)}>
            <div className="fl w1 h1 mr4 bg-white br3"></div>
          </div>
      )}

      </div>
    );
  }
}

export default LogoSwitcher;
