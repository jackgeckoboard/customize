import React, { Component } from 'react';
import ColorPicker from 'react-color-picker'
import convert from 'color-convert'

import 'react-color-picker/index.css'

class CustomTheme extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      colorPickerVisible: false,
      customWidgetColor: '',
      colorInputText:'',
      colorSwatchBorder: '',
      widgetType:''
    };
  }

  componentWillMount(){
    this.setState({
      color: this.props.bgColor,
      customWidgetColor: this.props.widgetColor,
      colorInputText: this.props.bgColor,
      widgetType: 'custom'
    })
    let customHSL = convert.hex.hsl(this.props.bgColor)
    this.setState({
      colorSwatchBorder: "#" + convert.hsl.hex(customHSL[0], customHSL[1], 55),
    })

  }


  onDrag(color, c) {
   this.setState({
     color: color,
     colorInputText: color,
     colorSwatchBorder: this.calculateSwatchBorderColor(this.props.bgColor)
   })
   this.props.onCustomColorChange(color)

   let customHSL = convert.hex.hsl(color)

     this.setState({
       customWidgetColor: "#" + convert.hsl.hex(customHSL[0], customHSL[1], 20),
     })


   this.props.onWidgetColorChange(this.state.customWidgetColor)

 }



 onHideShowColorPicker(){
   if (this.state.colorPickerVisible){
     this.setState({
       colorPickerVisible: false
     })
   }
   else{
     this.setState({
       colorPickerVisible: true
     })
   }
 }

 onHideColorPicker(){
   if (this.state.colorPickerVisible){
     this.setState({
       colorPickerVisible: false
     })
   }
 }

 calculateSwatchBorderColor(color){
   let customHSL = convert.hex.hsl(color)
   this.setState({
     colorSwatchBorder: "#" + convert.hsl.hex(customHSL[0], customHSL[1], 65),
   })

 }

 onInputChange(event){
   this.setState({
     colorInputText: event.target.value,
     color: event.target.value,
   })

   let customHSL = convert.hex.hsl(event.target.value)

     this.setState({
       customWidgetColor: "#" + convert.hsl.hex(customHSL[0], customHSL[1], 20),
     })

   this.props.onWidgetColorChange("#" + convert.hsl.hex(customHSL[0], customHSL[1], 20))

   this.props.onCustomColorChange(event.target.value)

 }

  onDarkWidget() {
    this.props.onWidgetColorChange("#2A2A2A")
    this.setState({
      widgetType: "dark"
    })
  }

  onLightWidget() {
    this.props.onWidgetColorChange("white")
    this.setState({
      widgetType: "light"
    })
  }

  onCustomWidget(){
    this.props.onWidgetColorChange(this.state.customWidgetColor)
    this.setState({
      widgetType: "custom"
    })
  }


  render() {

    let customSwatchStyle = {
      background: this.state.color,
      border: "2px solid "+  this.state.colorSwatchBorder
    }

    let customWidgetSwatchStyle = {
      background: this.state.customWidgetColor,
      border: "2px solid "+ this.state.color
    }

    const darkThemeStyle = {
      background: "#2a2a2a",
      border: "2px solid #787878"
    }

    const lightThemeStyle = {
      background: "#ffffff",
      border: "2px solid #C9C9C9"
    }


    return (
      <div>
        <div className="cf" onClick={this.onHideColorPicker.bind(this)}>
          <div className="pointer w-50 fl pa1 mb1">
            <p className="mt0">Background</p>
            <div className="h2 w2 br-100 dib v-mid mr2" style={customSwatchStyle} onClick={this.onHideShowColorPicker.bind(this)}></div>
            <input value={this.state.colorInputText} onChange={this.onInputChange.bind(this)} className="b--silver ba dib sans-serif w3 pa2 br2"/>



          </div>
          <div className="pointer w-50 fl pa1 mb1">
            <p className="mt0">Widgets</p>
            <div className="h2 w2 br-100 dib v-mid mr2 white tc pt1" style={customWidgetSwatchStyle} onClick={this.onCustomWidget.bind(this)}>
              {(this.state.widgetType=="custom" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            <div className="h2 w2 br-100 dib v-mid mr2 white tc pt1" style={darkThemeStyle} onClick={this.onDarkWidget.bind(this)}>
              {(this.state.widgetType=="dark" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>
            <div className="h2 w2 br-100 dib v-mid mr2 near-black tc pt1" style={lightThemeStyle} onClick={this.onLightWidget.bind(this)}>
              {(this.state.widgetType=="light" ? <i className="fa fa-check" aria-hidden="true"></i> : "")}
            </div>

          </div>

        </div>
  {this.state.colorPickerVisible &&
        <div className="absolute mt2 pa2 br2 gb-background shadow-1">
          <ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)} />
        </div>
          }
        </div>
    );
  }
}

export default CustomTheme;
