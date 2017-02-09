import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: this.props.theme,
      customTheme: this.props.customTheme
    };
  }


  onClickDark() {
    this.props.onChangeParentStyle("#101214", "#2A2A2A", "#EEEEEE")
    this.setState({
      theme: "dark"
    })
  }

  onClickNavy() {
    this.props.onChangeParentStyle("#23293D", "#2E354C", "#E9EAEB")
    this.setState({
      theme: "navy"
    })
  }

  onClickPurple() {
    this.props.onChangeParentStyle("#2C1E33", "#3C2E47", "#EAE9EB")
    this.setState({
      theme: "purple"
    })
  }

  onClickLight() {
    this.props.onChangeParentStyle("#F0F0F0", "white", "#444444")
    this.setState({
      theme: "light"
    })
  }

  render() {

    const darkThemeStyle = {
      background: "linear-gradient(to right, #2a2a2a 50%,#101214 50%)",
      border: "2px solid #787878"
    }

    const navyThemeStyle = {
      background: "linear-gradient(to right, #2E354D 50%,#23293D 50%)",
      border: "2px solid #7284BF"
    }

    const purpleThemeStyle = {
      background: "linear-gradient(to right, #3C2E47 50%,#2C1F33 50%)",
      border: "2px solid #9971B8"
    }

    const lightThemeStyle = {
      background: "linear-gradient(to right, #ffffff 50%,#F0F0F0 50%)",
      border: "2px solid #C9C9C9"
    }

    return (
        <div className="cf">
          <div className="pointer w-50 fl pa1 mb1" onClick={this.onClickDark.bind(this)}>
            <div className="h2 w2 br-100 dib v-mid mr2 white tc pt1" style={darkThemeStyle}>
              {(this.state.theme=="dark" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            Dark
          </div>
          <div className="pointer w-50 fl pa1 mb1" onClick={this.onClickNavy.bind(this)}>
            <div className="h2 w2 br-100 dib v-mid mr2 white tc pt1" style={navyThemeStyle}>
                {(this.state.theme=="navy" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            Navy
          </div>
          <div className="pointer w-50 fl pa1" onClick={this.onClickPurple.bind(this)}>
            <div className="h2 w2 br-100 dib v-mid mr2 white tc pt1" style={purpleThemeStyle}>
                {(this.state.theme=="purple" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            Purple
          </div>
          <div className="pointer w-50 fl pa1" onClick={this.onClickLight.bind(this)}>
            <div className="h2 w2 br-100 dib v-mid mr2 near-black tc pt1" style={lightThemeStyle}>
                {(this.state.theme=="light" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            Light
          </div>


        </div>
    );
  }
}

export default ThemeSwitcher;
