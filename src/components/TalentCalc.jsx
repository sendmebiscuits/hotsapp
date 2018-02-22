import React, {Component} from 'react';
import TalentRow from './TalentRow';

class TalentCalc extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      hero: props.hero,
      lvl1: [],
      lvl4: [],
      lvl7: [],
      lvl10: [],
      lvl13: [],
      lvl16: [],
      lvl20: [],
      talentStore: []
    }

    this.sortTalents = this.sortTalents.bind(this);
    this.renderBtns = this.renderBtns.bind(this);

  }

  componentDidMount(){
    this.sortTalents();
  }

  /**
   *  Iterates through selected hero's talents 
   *  and sorts them based on level.
   */
  sortTalents(){
    var talents = this.state.hero.talents,
        talentCount = talents.length,
        talent,
        lvl1 = [],
        lvl4 = [],
        lvl7 = [],
        lvl10 = [],
        lvl13 = [],
        lvl16 = [],
        lvl20 = [];
    for (var i = 0; i < talentCount; i++){

      talent = talents[i];
      (talents[i].level === 1) ? lvl1.push(talent)
      : (talents[i].level === 4) ? lvl4.push(talent)
      : (talents[i].level === 7) ? lvl7.push(talent)
      : (talents[i].level === 10) ? lvl10.push(talent)
      : (talents[i].level === 13) ? lvl13.push(talent)
      : (talents[i].level === 16) ? lvl16.push(talent)
      :                             lvl20.push(talent)

    }

    this.setState({lvl1});
    this.setState({lvl4 : lvl4});
    this.setState({lvl7 : lvl7});
    this.setState({lvl10 : lvl10});
    this.setState({lvl13 : lvl13});
    this.setState({lvl16 : lvl16});
    this.setState({lvl20 : lvl20});
    
  }

  renderBtns(lvl){

    return (lvl === 1) ? <TalentRow talents={this.state.lvl1}/>
          : (lvl === 4) ? <TalentRow talents={this.state.lvl4}/>
          : (lvl === 7) ? <TalentRow talents={this.state.lvl7}/>
          : (lvl === 10) ? <TalentRow talents={this.state.lvl10}/>
          : (lvl === 13) ? <TalentRow talents={this.state.lvl13}/>
          : (lvl === 16) ? <TalentRow talents={this.state.lvl16}/>
          :                <TalentRow talents={this.state.lvl20}/>
        }
    
  render(){

    if (this.state.hero === null){
      return null;
    }

    return (
      <div className='TalentTree'>
        <div className='level1'>
          {this.renderBtns(1)}
        </div>
        <div className='level4'>
          {this.renderBtns(4)}
        </div>
        <div className='level7'>
          {this.renderBtns(7)}
        </div>    
        <div className='level10'>
          {this.renderBtns(10)}
        </div>
        <div className='level13'>
          {this.renderBtns(13)}
        </div>
        <div className='level16'>
          {this.renderBtns(16)}
        </div>
        <div className='level20'>
          {this.renderBtns(20)}
        </div>
      </div>
      );
    }
  }

export default TalentCalc;