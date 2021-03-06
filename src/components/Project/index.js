import React, { Component } from 'react';
import randomColor from 'randomcolor';
import uniqid from 'uniqid'
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';
import getAll from '../../utils/apiCalls/getAll';



export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      palettes: [{
        color1: '#F655AA',
        color2: '#FBA904',
        color3: '#7AFDDF',
        color4: '#571E7F',
        color5: '#0071BD'
      }]
    };
  }

  componentDidMount = () => {
    getAll('https://unicolors.herokuapp.com/api/v1/palettes')
      .then(res => console.log(res))
    const color = randomColor();
    console.log(this.state);
    console.log(color);
  };

  key = () => {
    return uniqid();
  }

  render() {
    const { colors, palettes } = this.state;
    const rainbows = palettes.map(palette => (
      <Rainbow colors={palette} key={this.key}/>
    ))
    return (
      <div>
        <LittleUni colors={colors} />
        { rainbows }
      </div>
    );
  }
}
