import React, { Component } from 'react';

class FooterSwitch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      footerOn: true
    };
  }


  onClick() {

    if (!this.state.footerOn){
      this.setState({
        footerOn: true
      });
      this.props.onFooterSwitched(true);
    } else {
      this.setState({
        footerOn: false
      });
      this.props.onFooterSwitched(false);
    }
  }



  render() {

    var footerOn = this.state.footerOn;

    return (
      <div className="pa3 gb-config-mid pointer" onClick={this.onClick.bind(this)}>
        Dashboard footer
          {footerOn ? (
            <div className="fr br4 bg-gb-green pa1">
              <div className="fr w1 h1 ml4 bg-white br3"></div>
            </div>
          ) : (
              <div className="fr br4 bg-silver pa1">
                <div className="fl w1 h1 mr4 bg-white br3"></div>
              </div>
          )}



      </div>
    );
  }
}

export default FooterSwitch;
