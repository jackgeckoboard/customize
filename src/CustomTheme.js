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
      colorInputText:''
    };
  }

  componentWillMount(){
    this.setState({
      color: this.props.bgColor,
      customWidgetColor: this.props.widgetColor,
      colorInputText: this.props.bgColor
    })
  }

  onDrag(color, c) {
   this.setState({
     color
   })
   this.props.onCustomColorChange(color)

   let customHSL = convert.hex.hsl(color)

   console.log(customHSL)

     this.setState({
       customWidgetColor: "#" + convert.hsl.hex(customHSL[0], customHSL[1], 20)
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


 onInputChange(event){
   this.setState({
     colorInputText: event.target.value,
     color: event.target.value
   })
 }

  onDarkWidget() {
    this.props.onWidgetColorChange("#2A2A2A")
  }

  onLightWidget() {
    this.props.onWidgetColorChange("white")
  }

  onCustomWidget(){
    this.props.onWidgetColorChange(this.state.customWidgetColor)
  }


  render() {

    let customSwatchStyle = {
      background: this.state.color
    }

    let customWidgetSwatchStyle = {
      background: this.state.customWidgetColor
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
            <div className="h2 w2 br-100 dib v-mid mr2" style={customWidgetSwatchStyle} onClick={this.onCustomWidget.bind(this)}></div>
            <div className="h2 w2 br-100 dib bg-dark-theme v-mid mr2" onClick={this.onDarkWidget.bind(this)}></div>
            <div className="h2 w2 br-100 dib bg-light-theme v-mid mr2" onClick={this.onLightWidget.bind(this)}></div>

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
