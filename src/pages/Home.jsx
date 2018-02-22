import React, {Component} from 'react';
import HeroRoster from '../components/HeroRoster';
import TalentCalc from '../components/TalentCalc';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <HeroRoster/>
    );
  }
}

export default Home;