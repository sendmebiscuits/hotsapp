import React, {Component} from 'react';
import TalentCalc from '../components/TalentCalc';

class TalentPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedHero: null,
    };
  }
  
  render(){

    return (
      <div className='talentCalculator'>
        
      </div>
    );
  }
}

export default TalentPage;