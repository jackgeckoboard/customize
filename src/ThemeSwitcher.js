import React, { Component } from 'react';

class ThemeSwitcher extends Component {

  onClickDark() {
    this.props.onChangeParentStyle("#101214", "#2A2A2A", "#EEEEEE")
  }

  onClickNavy() {
    this.props.onChangeParentStyle("#23293D", "#2E354C", "#E9EAEB")
  }

  onClickPurple() {
    this.props.onChangeParentStyle("#2C1E33", "#3C2E47", "#EAE9EB")
  }

  onClickLight() {
    this.props.onChangeParentStyle("#F0F0F0", "white", "#444444")
  }

  render() {


    return (
        <div className="cf">
          <div className="pointer w-50 fl pa1 mb1" onClick={this.onClickDark.bind(this)}>
            <div className="h2 w2 br-100 dib bg-dark-theme v-mid mr2"></div>
            Dark
          </div>
          <div className="pointer w-50 fl pa1 mb1" onClick={this.onClickNavy.bind(this)}>
            <div className="h2 w2 br-100 dib bg-navy-theme v-mid mr2"></div>
            Navy
          </div>
          <div className="pointer w-50 fl pa1" onClick={this.onClickPurple.bind(this)}>
            <div className="h2 w2 br-100 dib bg-purple-theme v-mid mr2"></div>
            Purple
          </div>
          <div className="pointer w-50 fl pa1" onClick={this.onClickLight.bind(this)}>
            <div className="h2 w2 br-100 dib bg-light-theme v-mid mr2"></div>
            Light
          </div>


        </div>
    );
  }
}

export default ThemeSwitcher;
